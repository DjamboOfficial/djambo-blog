import mdxPkg from "@next/mdx";
const withMDX = mdxPkg.default || mdxPkg; // fallback per default export o modulo intero

const mdxPlugin = withMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

export default mdxPlugin(nextConfig);
