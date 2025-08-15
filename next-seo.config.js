const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export default {
  defaultTitle: "Blog di Djambo",
  titleTemplate: "%s | Blog di Djambo",
  description: "Un blog multilingua fatto con Next e Tailwind",
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Blog di Djambo",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Blog di Djambo - Un blog multilingua fatto con Next e Tailwind",
      },
    ],
  },
  twitter: {
    handle: "@djambo",
    site: "@djambo",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "blog, nextjs, tailwind, multilingua, seo",
    },
    {
      name: "author",
      content: "Djambo",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};
