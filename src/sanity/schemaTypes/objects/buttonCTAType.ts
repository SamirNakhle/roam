import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const buttonCTAType = defineType({
  name: "buttonCTA",
  title: "Button CTA",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isLinkExternal",
      title: "Is link External?",
      type: "boolean",
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Link",
      name: "internalLink",
      type: "string",
      options: {
        list: ["home", "about", "download"],
      },
      hidden: ({ parent }) => parent?.isLinkExternal,
      validation: (rule) =>
        rule.custom((val, ctx) => {
          const parent = ctx.parent as { isLinkExternal: boolean };

          if (!parent.isLinkExternal && !val)
            return "Internal link is required";

          return true;
        }),
    }),
    defineField({
      title: "External Link",
      name: "externalLink",
      type: "string",
      hidden: ({ parent }) => !parent?.isLinkExternal,
      validation: (rule) =>
        rule.custom((val, ctx) => {
          const parent = ctx.parent as { isLinkExternal: boolean };

          if (parent.isLinkExternal && !val) return "External link is required";

          return true;
        }),
    }),
  ],
});
