// app/components/ClientWrapper.jsx
"use client";

import SeoProvider from "@/app/seo-provider";

export default function ClientWrapper({ children }) {
  return (
    <>
      <SeoProvider />
      {children}
    </>
  );
}
