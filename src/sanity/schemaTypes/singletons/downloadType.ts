import {
  ActivityIcon,
  DownloadIcon,
  InfoFilledIcon,
  InfoOutlineIcon,
  RocketIcon,
  SearchIcon,
  TagIcon,
  TagsIcon,
  UlistIcon,
} from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const downloadType = defineType({
  name: "download",
  title: "Download",
  type: "document",
  icon: DownloadIcon,
  groups: [
    {
      title: "Hero",
      name: "hero",
      icon: RocketIcon,
    },
    {
      title: "Features Section",
      name: "features",
      icon: TagsIcon,
    },
    {
      title: "Download Links Section",
      name: "downloadLinks",
      icon: DownloadIcon,
    },
    {
      title: "Info Section",
      name: "info",
      icon: InfoOutlineIcon,
    },
    {
      title: "Usage Section",
      name: "usage",
      icon: ActivityIcon,
    },
    {
      title: "Steps Section",
      name: "steps",
      icon: UlistIcon,
    },
    {
      title: "FAQ Section",
      name: "faq",
      icon: InfoFilledIcon,
    },
    {
      name: "seo",
      title: "SEO",
      icon: SearchIcon,
    },
  ],
  fields: [
    // HERO
    defineField({
      title: "Hero Title",
      name: "heroTitle",
      type: "string",
      group: "hero",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Hero CTA",
      name: "heroCTA",
      type: "array",
      group: "hero",
      validation: (rule) => rule.max(2),
      of: [
        defineArrayMember({
          type: "buttonCTA",
        }),
      ],
    }),
    defineField({
      title: "Hero Background Image",
      name: "heroBgImage",
      type: "image",
      fields: [
        defineField({
          title: "Alt Text",
          name: "alt",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          title: "Has Triangle Overlay",
          name: "clipPath",
          type: "boolean",
          initialValue: false,
          validation: (rule) => rule.required(),
        }),
      ],
      group: "hero",
      validation: (rule) => rule.required(),
    }),
    // FEATURES
    defineField({
      title: "Features",
      name: "features",
      type: "array",
      group: "features",
      validation: (rule) => rule.length(3),
      of: [
        defineArrayMember({
          title: "Feature",
          type: "object",
          fields: [
            defineField({
              title: "Description",
              name: "description",
              type: "text",
              validation: (rule) => rule.required(),
            }),
          ],
          icon: TagIcon,
          preview: {
            select: {
              title: "description",
            },
            prepare(selection) {
              const { title } = selection as { title: string };
              return {
                title: title.length > 30 ? title.slice(0, 30) + "..." : title,
              };
            },
          },
        }),
      ],
    }),
    // DOWNLOAD LINKS
    defineField({
      title: "Download Links Title",
      name: "downloadLinksTitle",
      type: "string",
      group: "downloadLinks",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Download Links Sub Title",
      name: "downloadLinksSubtitle",
      type: "string",
      group: "downloadLinks",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Download Link QR Code",
      name: "downloadLinksQR",
      type: "image",
      group: "downloadLinks",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Apple Download Link",
      name: "downloadLinksApple",
      type: "url",
      group: "downloadLinks",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Android Download Link",
      name: "downloadLinksAndroid",
      type: "url",
      group: "downloadLinks",
      validation: (rule) => rule.required(),
    }),
    // USAGE
    defineField({
      title: "Usage Title",
      name: "usageTitle",
      type: "string",
      group: "usage",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Usage Sub Title",
      name: "usageSubtitle",
      type: "string",
      group: "usage",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Usage Text",
      name: "usageText",
      type: "array",
      of: [{ type: "block" }],
      group: "usage",
      validation: (rule) => rule.required(),
    }),
    // STEPS
    defineField({
      title: "Steps",
      name: "steps",
      type: "array",
      group: "steps",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              title: "Title",
              name: "title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: "Sub Title",
              name: "subtitle",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: "Text",
              name: "text",
              type: "array",
              of: [{ type: "block" }],
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: "Image",
              name: "image",
              type: "image",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "subtitle",
              media: "image",
            },
            prepare(selection) {
              const { title, subtitle, media } = selection;
              return {
                title,
                subtitle,
                media,
              };
            },
          },
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    // FAQ
    defineField({
      title: "FAQ",
      name: "faq",
      type: "array",
      group: "faq",
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          type: "object",
          icon: InfoFilledIcon,
          fields: [
            defineField({
              title: "Question",
              name: "question",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: "Answer",
              name: "answer",
              type: "text",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    // SEO
    defineField({
      name: "meta",
      title: "Meta",
      type: "meta",
      group: "seo",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "opengraph",
      title: "Opengraph",
      type: "opengraph",
      group: "seo",
    }),
  ],
});
