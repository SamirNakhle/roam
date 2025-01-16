import { ListItemBuilder } from "sanity/structure";

import defineStructure from "@/sanity/utils/defineStructure";

export const aboutStructure = defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("About")
    .schemaType("about")
    .child(S.editor().title("About").schemaType("about").documentId("about")),
);
