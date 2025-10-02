type ContactMapProps = {
  mapEmbedUrl?: string | null;
  mapLinkUrl?: string | null;
};

const DEFAULT_MAP_EMBED =
  "https://maps.google.com/maps?q=Dell%20Pediatric%20Research%20Institute%201400%20Barbara%20Jordan%20Blvd%20Austin%20TX%2078723&output=embed";

function buildEmbedUrl(mapEmbedUrl?: string | null, mapLinkUrl?: string | null) {
  const candidate = mapEmbedUrl || mapLinkUrl;
  if (!candidate) {
    return null;
  }

  try {
    const url = new URL(candidate);

    const isGoogleDomain = /google\./.test(url.hostname);

    if (isGoogleDomain) {
      const hasEmbedPath = url.pathname.includes("/embed");
      if (hasEmbedPath) {
        return url.toString();
      }

      const query = url.searchParams.get("q") || url.searchParams.get("query");
      if (query) {
        const embedUrl = new URL("https://www.google.com/maps");
        embedUrl.searchParams.set("q", query);
        embedUrl.searchParams.set("output", "embed");
        return embedUrl.toString();
      }

      if (url.pathname && url.pathname !== "/") {
        const embedUrl = new URL("https://www.google.com/maps");
        embedUrl.searchParams.set("q", url.pathname.replace(/\+/g, " ").trim());
        embedUrl.searchParams.set("output", "embed");
        return embedUrl.toString();
      }
    }

    return null;
  } catch (error) {
    console.warn("Unable to normalize map URL", error);
    return null;
  }
}

export function ContactMap({ mapEmbedUrl, mapLinkUrl }: ContactMapProps) {
  const headingId = "contact-map-heading";
  const normalizedEmbedUrl =
    buildEmbedUrl(mapEmbedUrl, mapLinkUrl) || DEFAULT_MAP_EMBED;

  return (
    <section
      aria-labelledby={headingId}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <h2 id={headingId} className="text-2xl font-bold text-primary p-8 text-center">
        Find Us
      </h2>
      <div className="map-responsive">
        <iframe
          title="Georgakopoulos-Soares Lab location map"
          src={normalizedEmbedUrl}
          loading="lazy"
          allowFullScreen
          aria-label="Map showing the Georgakopoulos-Soares Lab location"
          className="w-full h-64 md:h-80 border-0"
        />
        {mapLinkUrl && (
          <div className="text-center py-4">
            <a
              href={mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
              aria-label="Open the lab location in Google Maps (opens in a new tab)"
            >
              Open in Google Maps
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
