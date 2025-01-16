import {
  BlockElementIcon,
  DocumentTextIcon,
  DownloadIcon,
  HomeIcon,
  InfoOutlineIcon,
} from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const customLinkType = defineType({
  name: "customLink",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isExternal",
      title: "Is link External?",
      type: "boolean",
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Internal Link",
      name: "internalLink",
      type: "reference",
      to: [
        { type: "home" },
        { type: "section" },
        { type: "about" },
        { type: "download" },
        { type: "legal" },
      ],
      hidden: ({ parent }) => parent?.isExternal,
      validation: (rule) =>
        rule.custom((val, ctx) => {
          const parent = ctx.parent as { isExternal: boolean };

          if (!parent.isExternal && !val) return "Internal link is required";

          return true;
        }),
    }),
    defineField({
      title: "External Link",
      name: "externalLink",
      type: "url",
      hidden: ({ parent }) => !parent?.isExternal,
      validation: (rule) =>
        rule.custom((val, ctx) => {
          const parent = ctx.parent as { isExternal: boolean };

          if (parent.isExternal && !val) return "External link is required";

          return true;
        }),
    }),
  ],
  preview: {
    select: {
      label: "label",
      isExternal: "isExternal",
      internalLinkType: "internalLink._type",
    },
    prepare(selection) {
      const { label, isExternal, internalLinkType } = selection;
      let media = undefined;
      if (!isExternal) {
        switch (internalLinkType) {
          case "home":
            media = HomeIcon;
            break;
          case "section":
            media = BlockElementIcon;
            break;
          case "about":
            media = InfoOutlineIcon;
            break;
          case "download":
            media = DownloadIcon;
            break;
          case "legal":
            media = DocumentTextIcon;
            break;
        }
      }
      return {
        title: label,
        media,
      };
    },
  },
});
