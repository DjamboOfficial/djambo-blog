import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { NextSeo } from "next-seo";
import SeoWrapper from "@/components/SeoWrapper";
import Post from "@/components/Post";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src", "content", "posts");
  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export default async function PostPage({ params }) {
  const { slug } = params;

  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "posts",
    `${slug}.mdx`
  );

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data: frontmatter } = matter(source);

  const siteUrl = process.env.SITE_URL || "http://localhost:3000";
  const canonicalUrl = `${siteUrl}/blog/${slug}`;

  const ogImage = frontmatter.cover
    ? frontmatter.cover.startsWith("http")
      ? frontmatter.cover
      : `${siteUrl}/${frontmatter.cover.replace(/^\/?/, "")}`
    : null;

  return (
    <>
      <SeoWrapper
        title={frontmatter.title}
        description={frontmatter.description}
        canonical={canonicalUrl}
        openGraph={{
          title: frontmatter.title,
          description: frontmatter.description,
          url: canonicalUrl,
          images: ogImage ? [{ url: ogImage }] : [],
        }}
      />

      <Post {...frontmatter}>
        <MDXRemote source={content} />
      </Post>
    </>
  );
}
