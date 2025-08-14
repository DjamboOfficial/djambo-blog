import mdxPkg from "@next/mdx";
const withMDX = mdxPkg.default || mdxPkg;

const mdxPlugin = withMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

export default mdxPlugin(nextConfig);
