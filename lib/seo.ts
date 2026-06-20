import { siteConfig } from "./constants";
import { absoluteUrl } from "./utils";
import type { Metadata } from "next";

export function buildMetadata({
  title,
  description,
  image,
  noIndex,
  path = "/",
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  path?: string;
} = {}): Metadata {
  const finalTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const finalDescription = description || siteConfig.description;

  return {
    title: finalTitle,
    description: finalDescription,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      images: [
        {
          url: image || absoluteUrl("/og-image.jpg"),
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [image || absoluteUrl("/og-image.jpg")],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: siteConfig.name,
    image: absoluteUrl("/og-image.jpg"),
    "@id": absoluteUrl("/"),
    url: absoluteUrl("/"),
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Wellness Way",
      addressLocality: "Health City",
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US",
    },
  };
}

export function personJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.trainerName,
        jobTitle: siteConfig.trainerTitle,
        url: absoluteUrl("/about"),
    };
}
