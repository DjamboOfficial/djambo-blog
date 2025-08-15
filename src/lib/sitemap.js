// lib/sitemap.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function generateSitemap() {
  const siteUrl = process.env.SITE_URL || "http://localhost:3000";

  const staticPages = ["", "about", "contacts"];

  // Percorso ai post MDX
  const postsDir = path.join(process.cwd(), "content", "posts");
  const postFiles = fs.readdirSync(postsDir);

  const urls = [];

  // Pagine statiche
  staticPages.forEach((page) => {
    urls.push({
      loc: `${siteUrl}/${page}`,
      lastmod: new Date().toISOString(),
      priority: page === "" ? "1.0" : "0.8",
    });
  });

  // Post del blog
  postFiles.forEach((file) => {
    if (file.endsWith(".mdx")) {
      const filePath = path.join(postsDir, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);

      urls.push({
        loc: `${siteUrl}/blog/${file.replace(/\.mdx$/, "")}`,
        lastmod: data.date
          ? new Date(data.date).toISOString()
          : new Date().toISOString(),
        priority: "0.7",
      });
    }
  });

  // XML base
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `<url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <priority>${url.priority}</priority>
    </url>`
      )
      .join("\n")}
  </urlset>`;

  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), xml);
}
