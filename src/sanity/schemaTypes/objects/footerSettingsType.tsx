import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { defineArrayMember, defineField, defineType } from "sanity";

export const footerSettingsType = defineType({
  name: "footerSettings",
  title: "Footer Settings",
  type: "object",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "footerCopy",
      title: "Footer Copy",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "X / Twitter", value: "x" },
                  { title: "Tiktok", value: "tiktok" },
                  { title: "Instagram", value: "instagram" },
                  { title: "Facebook", value: "facebook" },
                ],
              },
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              platform: "platform",
            },
            prepare(selection) {
              let media = undefined;
              switch (selection.platform) {
                case "x":
                  media = <FaXTwitter width="1em" height="1em" />;
                  break;
                case "tiktok":
                  media = <FaTiktok width="1em" height="1em" />;
                  break;
                case "instagram":
                  media = <FaInstagram width="1em" height="1em" />;
                  break;
                case "facebook":
                  media = <FaFacebook width="1em" height="1em" />;
                  break;
              }
              return {
                media,
              };
            },
          },
        }),
      ],
      validation: (rule) => rule.required().max(5),
    }),
    defineField({
      name: "quickLinks",
      title: "Quick Links",
      type: "array",
      of: [{ type: "customLink" }],
      validation: (rule) => rule.required().max(5),
    }),
    defineField({
      name: "legalLinks",
      title: "Legal Links",
      type: "array",
      of: [{ type: "customLink" }],
      validation: (rule) => rule.required().max(5),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
  ],
});
