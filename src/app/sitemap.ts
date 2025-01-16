import { MetadataRoute } from "next";

import { baseUrl } from "@/lib/constants";
import { getAllLegal } from "@/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allLegal = await getAllLegal();
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/download`,
      lastModified: new Date(),
    },
    ...allLegal.map((l) => ({
      url: `${baseUrl}${l.url}`,
      lastModified: new Date(),
    })),
  ];
}
