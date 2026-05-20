import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  OG_IMAGE,
} from "@/lib/constants";

interface PageMetaOptions {
  title: string;
  description: string;
  slug?: string;
  image?: string;
  noindex?: boolean;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  slug = "",
  image = OG_IMAGE,
  noindex = false,
  keywords = [],
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${slug ? `/${slug}` : ""}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@brandcodesol",
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@brandcodesol",
  },
};
