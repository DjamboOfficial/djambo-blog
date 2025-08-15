// lib/rss.js
import fs from "fs";
import path from "path";
import RSS from "rss";
import matter from "gray-matter";

// Percorso ai post MDX
const postsDir = path.join(process.cwd(), "content", "posts");

export default function generateRSS() {
  const siteUrl = "http://localhost:3000"; // Cambia con il tuo dominio

  // Crea il feed
  const feed = new RSS({
    title: "Il mio blog",
    description: "Ultimi articoli dal mio blog",
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    language: "it",
    pubDate: new Date(),
    lastBuildDate: new Date(),
  });

  // Leggi e aggiungi ogni post
  const files = fs.readdirSync(postsDir);
  files.forEach((file) => {
    if (file.endsWith(".mdx")) {
      const filePath = path.join(postsDir, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source); // Legge frontmatter

      feed.item({
        title: data.title,
        description: data.excerpt || "",
        url: `${siteUrl}/blog/${file.replace(/\.mdx$/, "")}`,
        date: data.date,
      });
    }
  });

  // Scrive il file in public/
  fs.writeFileSync(
    path.join(process.cwd(), "public", "rss.xml"),
    feed.xml({ indent: true })
  );
}
