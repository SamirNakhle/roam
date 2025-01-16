import {
  DocumentVideoIcon,
  EarthGlobeIcon,
  InfoFilledIcon,
  InfoOutlineIcon,
  RocketIcon,
  SearchIcon,
} from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const TITLE = "About";
export const aboutType = defineType({
  name: "about",
  title: TITLE,
  type: "document",
  icon: InfoOutlineIcon,
  groups: [
    {
      title: "Hero",
      name: "hero",
      icon: RocketIcon,
    },
    {
      title: "Info Section",
      name: "info",
      icon: InfoOutlineIcon,
    },
    {
      title: "Globe Section",
      name: "globe",
      icon: EarthGlobeIcon,
    },
    {
      title: "Videos Section",
      name: "video",
      icon: DocumentVideoIcon,
    },
    {
      name: "seo",
      title: "SEO",
      icon: SearchIcon,
    },
  ],
  fields: [
    defineField({
      title: "Hero Title",
      name: "heroTitle",
      type: "string",
      group: "hero",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Hero Copy",
      name: "heroCopy",
      type: "text",
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
    // INFO SECTION
    defineField({
      title: "Info Images",
      name: "infoImages",
      type: "array",
      group: "info",
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          title: "Image",
          type: "image",
          validation: (rule) => rule.required(),
          fields: [
            defineField({
              title: "Alt Text",
              name: "alt",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: "Main Info",
      name: "mainInfo",
      group: "info",
      type: "object",
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          title: "Title",
          name: "title",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          title: "Number",
          name: "number",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          title: "Description",
          name: "description",
          type: "text",
          validation: (rule) => rule.required(),
        }),
      ],
      preview: {
        select: {
          title: "title",
          subtitle: "number",
        },
      },
    }),
    defineField({
      title: "Other Info",
      name: "otherInfo",
      type: "array",
      group: "info",
      validation: (rule) => rule.required(),
      of: [
        defineArrayMember({
          type: "object",
          validation: (rule) => rule.required(),
          icon: InfoFilledIcon,
          fields: [
            defineField({
              title: "Title",
              name: "title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              title: "Number",
              name: "number",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "number",
            },
          },
        }),
      ],
    }),
    // GLOBE SECTION
    defineField({
      type: "globe",
      name: "globe",
      group: "globe",
      validation: (rule) => rule.required(),
    }),
    // VIDEOS
    defineField({
      name: "video1Title",
      title: "First Video Title",
      type: "string",
      group: "video",
    }),
    defineField({
      name: "video1URL",
      title: "First Video URL",
      type: "url",
      group: "video",
      validation: (rule) =>
        rule.required().custom((url) => {
          if (!url) return true;
          if (!url.includes("youtube")) return "URL must be a YouTube link";
          return true;
        }),
    }),
    defineField({
      name: "video2Title",
      title: "Second Video Title",
      type: "string",
      group: "video",
    }),
    defineField({
      name: "video2URL",
      title: "Second Video",
      type: "url",
      group: "video",
      validation: (rule) =>
        rule.required().custom((url) => {
          if (!url) return true;
          if (!url.includes("youtube")) return "URL must be a YouTube link";
          return true;
        }),
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
  preview: {
    prepare() {
      return {
        title: TITLE,
        media: InfoOutlineIcon,
      };
    },
  },
});
