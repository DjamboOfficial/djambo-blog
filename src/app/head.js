export default function Head() {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Djambo Blog",
    url: "https://www.tuo-sito.it",
    description: "Blog personale con articoli di musica e tecnologia",
    publisher: {
      "@type": "Organization",
      name: "Djambo Blog",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tuo-sito.it/logo.png",
      },
    },
    author: {
      "@type": "Person",
      name: "Djambo",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        id="schema-org"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
      />
    </>
  );
}
