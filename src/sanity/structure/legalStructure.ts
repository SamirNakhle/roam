import { ListItemBuilder } from "sanity/structure";

import defineStructure from "@/sanity/utils/defineStructure";

export const legalStructure = defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Legal")
    .schemaType("legal")
    .child(S.documentTypeList("legal")),
);
