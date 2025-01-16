import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export const getDimensions = (id: string) => {
  const dimensions = id.split("-")[2];
  const [width, height] = dimensions
    .split("x")
    .map((num: string) => parseInt(num, 10));
  return { width, height };
};
