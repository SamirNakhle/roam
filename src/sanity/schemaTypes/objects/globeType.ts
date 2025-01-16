import { defineArrayMember, defineField, defineType } from "sanity";

export const globeType = defineType({
  name: "globe",
  title: "Globe Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "heading",
      description: "",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "copy",
      title: "Copy",
      type: "text",
    }),
    defineField({
      title: "CTA",
      name: "cta",
      type: "array",
      validation: (rule) => rule.max(2),
      of: [
        defineArrayMember({
          type: "buttonCTA",
        }),
      ],
    }),
  ],
});
