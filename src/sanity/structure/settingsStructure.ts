import { ListItemBuilder } from "sanity/structure";

import defineStructure from "@/sanity/utils/defineStructure";

export const settingsStructure = defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Settings")
    .schemaType("settings")
    .child(
      S.editor()
        .title("Settings")
        .schemaType("settings")
        .documentId("settings"),
    ),
);
