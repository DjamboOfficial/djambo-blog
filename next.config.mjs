import mdxPkg from "@next/mdx";
const withMDX = mdxPkg.default || mdxPkg;

const mdxPlugin = withMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.youtube.com", "res.cloudinary.com"], // <- array unico con tutti i domini consentiti
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

export default mdxPlugin(nextConfig);
