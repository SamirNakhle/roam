import type { ListItemBuilder, StructureResolver } from "sanity/structure";

import { aboutStructure } from "@/sanity/structure/aboutStructure";
import { downloadStructure } from "@/sanity/structure/downloadStructure";
import { homeStructure } from "@/sanity/structure/homeStructure";
import { legalStructure } from "@/sanity/structure/legalStructure";
import { settingsStructure } from "@/sanity/structure/settingsStructure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId();

  if (!id) {
    return false;
  }

  return ![
    "home",
    "settings",
    "section",
    "about",
    "download",
    "legal",
  ].includes(id);
};
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      homeStructure(S, context),
      S.divider(),
      aboutStructure(S, context),
      downloadStructure(S, context),
      S.divider(),
      legalStructure(S, context),
      S.divider(),
      settingsStructure(S, context),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
