import {
  EarthGlobeIcon,
  HomeIcon,
  RocketIcon,
  SearchIcon,
} from "@sanity/icons";
import { defineArrayMember, defineField } from "sanity";

import {
  PhoneIcon,
  RibbonIcon,
  Triangle1Icon,
  Triangle2Icon,
} from "@/sanity/utils/icons";

const title = "Home";

export const homeType = defineField({
  name: "home",
  title: title,
  type: "document",
  icon: HomeIcon,
  groups: [
    {
      title: "Hero",
      name: "hero",
      icon: RocketIcon,
    },
    {
      title: "Phone Section",
      name: "phone",
      icon: PhoneIcon,
    },
    {
      title: "First Triangle Section",
      name: "triangle1",
      icon: Triangle1Icon,
    },
    {
      title: "Second Triangle Section",
      name: "triangle2",
      icon: Triangle2Icon,
    },
    {
      title: "Ribbon",
      name: "ribbon",
      icon: RibbonIcon,
    },
    {
      title: "Globe Section",
      name: "globe",
      icon: EarthGlobeIcon,
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
      title: "Hero Copy",
      name: "heroCopy",
      type: "text",
      group: "hero",
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
    // PHONE
    defineField({
      title: "Phone Section Title",
      name: "phoneTitle",
      type: "heading",
      group: "phone",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Phone Section Copy",
      name: "phoneCopy",
      type: "text",
      group: "phone",
    }),
    defineField({
      title: "Phone Section CTA",
      name: "phoneCTA",
      type: "array",
      group: "phone",
      validation: (rule) => rule.max(2),
      of: [
        defineArrayMember({
          type: "buttonCTA",
        }),
      ],
    }),
    // FIRST TRIANGLE SECTION
    defineField({
      title: "First Triangle Section Title",
      name: "triangle1Title",
      type: "heading",
      group: "triangle1",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "First Triangle Section Copy",
      name: "triangle1Copy",
      type: "text",
      group: "triangle1",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "First Triangle Section Tagline",
      name: "triangle1Tagline",
      type: "text",
      group: "triangle1",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "First Triangle Section CTA",
      name: "triangle1CTA",
      type: "array",
      group: "triangle1",
      validation: (rule) => rule.max(2),
      of: [
        defineArrayMember({
          type: "buttonCTA",
        }),
      ],
    }),
    defineField({
      name: "triangle1Image",
      title: "First Triangle Section Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    // SECOND TRIANGLE SECTION
    defineField({
      title: "Second Triangle Section Title",
      name: "triangle2Title",
      type: "heading",
      group: "triangle2",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Second Triangle Section Copy",
      name: "triangle2Copy",
      type: "text",
      group: "triangle2",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Second Triangle Section Tagline",
      name: "triangle2Tagline",
      type: "text",
      group: "triangle2",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Second Triangle Section CTA",
      name: "triangle2CTA",
      type: "array",
      group: "triangle2",
      validation: (rule) => rule.max(2),
      of: [
        defineArrayMember({
          type: "buttonCTA",
        }),
      ],
    }),
    defineField({
      name: "triangle2Image",
      title: "Second Triangle Section Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    // RIBBON SECTION
    defineField({
      name: "ribbon",
      title: "Ribbon Text",
      type: "heading",
      description: "",
      group: "ribbon",
      validation: (rule) => rule.required(),
    }),
    // GLOBE SECTION
    defineField({
      type: "globe",
      name: "globe",
      group: "globe",
      validation: (rule) => rule.required(),
    }),
    // SEO
    defineField({
      name: "meta",
      title: "Meta",
      type: "meta",
      group: "seo",
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
        title: title,
      };
    },
  },
});
