import { ListItemBuilder } from "sanity/structure";

import defineStructure from "@/sanity/utils/defineStructure";

export const homeStructure = defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Home")
    .schemaType("home")
    .child(S.editor().title("Home").schemaType("home").documentId("home")),
);
