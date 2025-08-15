import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

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

export default function PostPage({ params }) {
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

  return (
    <Post {...frontmatter}>
      <MDXRemote source={content} />
    </Post>
  );
}
