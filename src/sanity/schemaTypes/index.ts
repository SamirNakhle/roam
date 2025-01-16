import { type SchemaTypeDefinition } from "sanity";

import { legalType } from "@/sanity/schemaTypes/legalType";
import { buttonCTAType } from "@/sanity/schemaTypes/objects/buttonCTAType";
import { customLinkType } from "@/sanity/schemaTypes/objects/customLinkType";
import { footerSettingsType } from "@/sanity/schemaTypes/objects/footerSettingsType";
import { globeType } from "@/sanity/schemaTypes/objects/globeType";
import { headingType } from "@/sanity/schemaTypes/objects/headingType";
import { sectionType } from "@/sanity/schemaTypes/objects/sectionType";
import {
  metaType,
  opengraphType,
  seoType,
} from "@/sanity/schemaTypes/objects/seoType";
import { aboutType } from "@/sanity/schemaTypes/singletons/aboutType";
import { downloadType } from "@/sanity/schemaTypes/singletons/downloadType";
import { homeType } from "@/sanity/schemaTypes/singletons/homeType";
import { settingsType } from "@/sanity/schemaTypes/singletons/settingsType";

const objects = [
  buttonCTAType,
  headingType,
  globeType,
  seoType,
  metaType,
  opengraphType,
  footerSettingsType,
  customLinkType,
  sectionType,
];

const singletons = [homeType, settingsType, aboutType, downloadType];
const documents = [legalType];
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...objects, ...singletons, ...documents],
};
