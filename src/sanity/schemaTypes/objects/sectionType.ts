import { BlockElementIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const sectionType = defineType({
  name: "section",
  title: "Section",
  type: "document",
  icon: BlockElementIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      readOnly: true,
    },
    {
      name: "id",
      title: "ID",
      type: "string",
      validation: (rule) => rule.required(),
      readOnly: true,
    },
  ],
});
