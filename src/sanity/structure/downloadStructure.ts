import { ListItemBuilder } from "sanity/structure";

import defineStructure from "@/sanity/utils/defineStructure";

export const downloadStructure = defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Download")
    .schemaType("download")
    .child(
      S.editor()
        .title("Download")
        .schemaType("download")
        .documentId("download"),
    ),
);
