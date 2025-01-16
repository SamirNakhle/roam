import { makeSafeQueryRunner } from "groqd";
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const runQuery = makeSafeQueryRunner(
  (query: string, params: Record<string, number | string> = {}) =>
    client.fetch(query, {
      // @ts-ignore
      cache: "no-store",
      ...params,
    }),
);
