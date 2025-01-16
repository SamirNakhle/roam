import { CogIcon, SearchIcon, TextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

import { BellIcon } from "@/sanity/utils/icons";

const title = "Settings";
export const settingsType = defineType({
  type: "document",
  name: "settings",
  title: title,
  icon: CogIcon,
  groups: [
    {
      title: "General",
      name: "general",
      icon: CogIcon,
    },
    {
      title: "Collaborators",
      name: "collaborators",
      icon: BellIcon,
    },
    {
      title: "Footer",
      name: "footer",
      icon: TextIcon,
    },
    {
      name: "seo",
      title: "Site-wide SEO",
      icon: SearchIcon,
    },
  ],
  fields: [
    // GENERAL
    defineField({
      name: "mailchimpListId",
      title: "Mailchimp List Id",
      description:
        "The ID of the Mailchimp list to subscribe users to. This is used in the newsletter form.",
      type: "string",
      group: "general",
      validation: (rule) => rule.required(),
    }),
    // FOOTER
    defineField({
      name: "footerSettings",
      title: "Footer Settings",
      type: "footerSettings",
      group: "footer",
      validation: (rule) => rule.required(),
    }),
    // COLLABORATORS
    defineField({
      name: "collaborators",
      title: "Collaborators",
      type: "array",
      group: "collaborators",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    // SEO
    defineField({
      name: "meta",
      title: "Site-wide Meta",
      type: "meta",
      group: "seo",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "opengraph",
      title: "Site-wide Opengraph",
      type: "opengraph",
      group: "seo",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: title,
      };
    },
  },
});
