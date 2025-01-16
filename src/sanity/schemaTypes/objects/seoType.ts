import { defineField } from "sanity";

export const seoType = defineField({
  name: "seo",
  title: "SEO",
  type: "object",
  group: "seo",
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) =>
        Rule.max(50).warning(
          "Longer titles may be truncated by search engines",
        ),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 2,
      validation: (Rule) =>
        Rule.max(150).warning(
          "Longer descriptions may be truncated by search engines",
        ),
    }),
    defineField({
      name: "opengraph",
      title: "Opengraph",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title Override",
          type: "string",
          description: "If left empty, will use the document title",
        }),
        defineField({
          name: "description",
          title: "Description Override",
          type: "string",
          description: "If left empty, will use the description field",
        }),
        defineField({
          name: "image",
          type: "image",
          description:
            "Image to display in social media shares (recommended size: 1200px by 630px)",
        }),
      ],
    }),
  ],
});

export const opengraphType = defineField({
  name: "opengraph",
  title: "Opengraph",
  type: "object",
  group: "seo",
  description: "(Optional)",
  fields: [
    defineField({
      name: "title",
      title: "Title Override",
      type: "string",
      description: "If left empty, will use the document title.",
    }),
    defineField({
      name: "description",
      title: "Description Override",
      type: "string",
      description:
        "A short description shown when shared on social media. If left empty, will use the description field.",
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      description:
        "Image to display when shared on social media. (recommended size: 1200px by 630px)",
    }),
  ],
});

export const metaType = defineField({
  name: "meta",
  title: "Meta",
  type: "object",
  group: "seo",
  description: "HTML Metadata used for SEO and social media",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .max(50)
          .warning("Longer titles may be truncated by search engines"),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 2,
      validation: (rule) =>
        rule
          .max(150)
          .required()
          .warning("Longer descriptions may be truncated by search engines"),
    }),
    defineField({
      name: "keywords",
      type: "text",
      rows: 2,
      description:
        "(Optional) Comma separated list of keywords. While these are only used by few search engines, they can be useful for SEO.",
      validation: (rule) =>
        rule
          .max(150)
          .warning("Longer descriptions may be truncated by search engines"),
    }),
  ],
});
