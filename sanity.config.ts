"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from "@sanity/vision";
import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { customDocumentActions } from "@/sanity/plugins/custom-document-actions";
import { schema } from "@/sanity/schemaTypes";
import { structure } from "@/sanity/structure";

const devOnlyPlugins = [visionTool({ defaultApiVersion: apiVersion })];
export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    customDocumentActions(),
    ...(isDev ? devOnlyPlugins : []),
  ],
});
