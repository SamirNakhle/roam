import { defineArrayMember, defineType } from "sanity";

import { CharacterCountInputPTE } from "@/sanity/components/character-count";

export const headingType = defineType({
  name: "heading",
  type: "array",
  description:
    "This will be used as the H2 of the Sections. Short and on point – max. 200",
  validation: (Rule) => Rule.required().max(200),
  components: {
    // @ts-ignore
    input: CharacterCountInputPTE,
  },
  of: [
    defineArrayMember({
      type: "block",
      styles: [],
      lists: [],
      marks: {
        decorators: [{ title: "Strong", value: "strong" }],
        annotations: [],
      },
    }),
  ],
});
