import { Metadata } from "next";

import { getAboutPage, getAboutSEO, getSEO } from "@/lib/queries";
import { formatLink } from "@/lib/utils";

import { Accordion } from "@/components/about/accordion";
import { Hero } from "@/components/about/hero";
import { Videos } from "@/components/about/videos";
import { AboutBg } from "@/components/bg/home-bg";
import { GlobeAnimation } from "@/components/landing/globe-animation";

import { getDimensions, urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

export const generateMetadata = async (): Promise<Metadata> => {
  const [aboutSEO, seo] = await Promise.all([getAboutSEO(), getSEO()]);
  return {
    title: aboutSEO.meta?.title,
    description: aboutSEO.meta?.description,
    openGraph: {
      images:
        aboutSEO.opengraph?.image || seo.opengraph?.image
          ? [
              {
                url: urlFor(
                  aboutSEO.opengraph?.image || seo.opengraph?.image || "",
                )
                  .width(1200)
                  .height(630)
                  .url(),
                width: 1200,
                height: 630,
              },
            ]
          : undefined,
      title:
        aboutSEO.opengraph?.title ||
        aboutSEO.meta?.title ||
        seo.opengraph?.title ||
        seo.meta?.title,
      description:
        aboutSEO.opengraph?.description ||
        aboutSEO.meta?.description ||
        seo.opengraph?.description ||
        seo.meta?.description,
    },
  };
};

export default async function Page() {
  const page = await getAboutPage();
  const heroImage = {
    src: urlFor(page.heroBgImage).url(),
    alt: page.heroBgImage.alt,
    clipPath: page.heroBgImage.clipPath,
    ...getDimensions(page.heroBgImage.asset._ref),
  };
  return (
    <>
      <AboutBg {...heroImage} />
      <main className="page-base">
        <Hero
          title={page.heroTitle}
          description={page.heroCopy}
          buttons={page.heroCTA?.map((c) => ({
            href: formatLink(c),
            label: c.text,
          }))}
        />
        <Accordion
          images={page.infoImages.map((i) => ({
            src: urlFor(i).url(),
            alt: i.alt,
            ...getDimensions(i.asset._ref),
          }))}
          mainInfo={page.mainInfo}
          otherInfo={page.otherInfo}
        />
        <GlobeAnimation
          title={page.globe.title}
          buttons={page.globe.cta?.map((c) => ({
            href: formatLink(c),
            label: c.text,
          }))}
        >
          {page.globe.copy}
        </GlobeAnimation>
        <Videos
          video1={{
            title: page.video1Title,
            id: page.video1URL.split("=")[1],
          }}
          video2={{
            title: page.video2Title,
            id: page.video2URL.split("=")[1],
          }}
        />
      </main>
    </>
  );
}
