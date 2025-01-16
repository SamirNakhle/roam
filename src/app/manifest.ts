import { MetadataRoute } from "next";

import { getSEO } from "@/lib/queries";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const seo = await getSEO();

  return {
    name: seo.meta.title,
    short_name: seo.opengraph?.title || seo.meta.title,
    description: seo.meta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#202136",
    theme_color: "#202136",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
