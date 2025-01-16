import { q, sanityImage } from "groqd";

import { runQuery } from "@/sanity/lib/client";

const buttonCTASchema = (arg: string) =>
  q(arg)
    .filter()
    .grab$({
      text: q.string(),
      isLinkExternal: q.boolean().default(false),
      internalLink: q.string().optional(),
      externalLink: q.string().optional(),
    })
    .nullable();

const customLinksSchema = (arg: string) =>
  q(arg)
    .filter()
    .grab$({
      label: q.string(),
      isExternal: q.boolean(),
      internalLink: q("internalLink")
        .deref()
        .select({
          "_id == 'home'": {
            href: ["'/'", q.string()],
          },
          "_id == 'about'": {
            href: ["'/about'", q.string()],
          },
          "_id == 'download'": {
            href: ["'/download'", q.string()],
          },
          "_type == 'legal'": {
            href: ["'/legal/' + string(slug.current)", q.string()],
          },
          "_type == 'section' && id == '#faq'": {
            href: ["'/download' + string(id)", q.string()],
          },
          "_type == 'section' && id == '#usage'": {
            href: ["'/download' + string(id)", q.string()],
          },
          default: {
            href: ["'/'", q.string()],
            _id: q.string(),
            _type: q.string(),
          },
        }),
    });

const globeSchema = (arg: string) =>
  q(arg).grab$({
    title: q.contentBlocks(),
    copy: q.string().optional(),
    cta: buttonCTASchema("cta"),
  });

const metaSchema = (arg: string) =>
  q(arg).grab$({
    title: q.string(),
    description: q.string().optional(),
  });

const opengraphSchema = (arg: string) =>
  q(arg)
    .grab$({
      title: q.string().optional(),
      description: q.string().optional(),
      image: sanityImage("image", { withHotspot: true }).nullable(),
    })
    .nullable();

export const getFooter = async () => {
  const res = await runQuery(
    q("*")
      .filterByType("settings")
      .grab$({
        footerSettings: q("footerSettings").grab$({
          logo: sanityImage("logo"),
          footerCopy: q.string(),
          social: q.array(
            q.object({
              url: q.string(),
              platform: q.string(),
            }),
          ),
          quickLinks: customLinksSchema("quickLinks"),
          legalLinks: customLinksSchema("legalLinks"),
          phone: q.string(),
          email: q.string().email(),
        }),
      }),
  );
  return res[0].footerSettings;
};

export const getCollaborators = async () => {
  const res = await runQuery(
    q("*")
      .filterByType("settings")
      .grab$({
        collaborators: q("collaborators")
          .filter()
          .grab$({
            name: q.string(),
            logo: sanityImage("logo"),
          }),
      }),
  );
  return res[0].collaborators;
};

export const getSEO = async () => {
  const res = await runQuery(
    q("*")
      .filterByType("settings")
      .grab$({
        meta: metaSchema("meta"),
        opengraph: opengraphSchema("opengraph"),
      }),
  );
  return res[0];
};

export const getHomePage = async () => {
  return runQuery(
    q("*")
      .filterByType("home")
      .slice(0)
      .grab$({
        heroTitle: q.string(),
        heroCopy: q.string().optional(),
        heroCTA: buttonCTASchema("heroCTA"),
        heroBgImage: sanityImage("heroBgImage", {
          additionalFields: {
            alt: q.string(),
            clipPath: q.boolean().optional().default(false),
          },
        }),
        phoneTitle: q.contentBlocks(),
        phoneCopy: q.string().optional(),
        phoneCTA: buttonCTASchema("phoneCTA"),
        triangle1Title: q.contentBlocks(),
        triangle1Copy: q.string(),
        triangle1Tagline: q.string(),
        triangle1CTA: buttonCTASchema("triangle1CTA"),
        triangle1Image: sanityImage("triangle1Image"),
        triangle2Title: q.contentBlocks(),
        triangle2Copy: q.string(),
        triangle2Tagline: q.string(),
        triangle2CTA: buttonCTASchema("triangle2CTA"),
        triangle2Image: sanityImage("triangle2Image"),
        ribbon: q.contentBlocks(),
        globe: globeSchema("globe"),
      }),
  );
};

export const getAboutPage = async () => {
  return runQuery(
    q("*")
      .filterByType("about")
      .slice(0)
      .grab$({
        heroTitle: q.string(),
        heroCopy: q.string(),
        heroCTA: buttonCTASchema("heroCTA"),
        heroBgImage: sanityImage("heroBgImage", {
          additionalFields: {
            alt: q.string(),
            clipPath: q.boolean().optional().default(false),
          },
        }),
        infoImages: sanityImage("infoImages", {
          isList: true,
          additionalFields: {
            alt: q.string(),
          },
        }),
        mainInfo: q("mainInfo").grab$({
          title: q.string(),
          number: q.string(),
          description: q.string(),
        }),
        otherInfo: q("otherInfo").filter().grab$({
          title: q.string(),
          number: q.string(),
        }),
        globe: globeSchema("globe"),
        video1Title: q.string(),
        video1URL: q.string(),
        video2Title: q.string(),
        video2URL: q.string(),
      }),
  );
};

export const getDownloadPage = async () => {
  const res = await runQuery(
    q("*")
      .filterByType("download")
      .grab$({
        heroTitle: q.string(),
        heroCTA: buttonCTASchema("heroCTA"),
        heroBgImage: sanityImage("heroBgImage", {
          additionalFields: {
            alt: q.string(),
            clipPath: q.boolean().optional().default(false),
          },
        }),
        features: q("features").filter().grab$({
          description: q.string(),
        }),
        downloadLinksTitle: q.string(),
        downloadLinksSubtitle: q.string(),
        downloadLinksQR: sanityImage("downloadLinksQR"),
        downloadLinksApple: q.string(),
        downloadLinksAndroid: q.string(),
        usageTitle: q.string(),
        usageSubtitle: q.string(),
        usageText: q.contentBlocks(),
        steps: q("steps")
          .filter()
          .grab$({
            title: q.string(),
            subtitle: q.string(),
            text: q.contentBlocks(),
            image: sanityImage("image"),
          }),
        faq: q("faq").filter().grab$({
          question: q.string(),
          answer: q.string(),
        }),
      }),
  );
  return res[0];
};

export const getHomeSEO = async () => {
  const res = await runQuery(
    q("*")
      .filterByType("home")
      .grab$({
        meta: metaSchema("meta").nullable(),
        opengraph: opengraphSchema("opengraph"),
      }),
  );
  return res[0];
};

export const getAboutSEO = async () => {
  const res = await runQuery(
    q("*")
      .filterByType("about")
      .grab$({
        meta: metaSchema("meta").nullable(),
        opengraph: opengraphSchema("opengraph"),
      }),
  );
  return res[0];
};

export const getDownloadSEO = async () => {
  const res = await runQuery(
    q("*")
      .filterByType("download")
      .grab$({
        meta: metaSchema("meta").nullable(),
        opengraph: opengraphSchema("opengraph"),
      }),
  );
  return res[0];
};

export const getLegal = async (slug: string) => {
  const res = await runQuery(
    q("*").filter("_type == 'legal' && slug.current == $slug").grab$({
      title: q.string(),
      content: q.contentBlocks(),
    }),
    {
      slug,
    },
  );
  return res[0];
};

export const getAllLegal = async () => {
  return runQuery(
    q("*")
      .filterByType("legal")
      .grab$({
        url: ["'/legal/' + string(slug.current)", q.string()],
      }),
  );
};

export const getNewsletterListId = async () => {
  return runQuery(
    q("*")
      .filterByType("settings")
      .slice(0)
      .grabOne$("mailchimpListId", q.string()),
  );
};
