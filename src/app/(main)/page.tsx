import { Metadata } from "next";

import { getHomePage, getHomeSEO, getSEO } from "@/lib/queries";
import { formatLink } from "@/lib/utils";

import { HomeBg } from "@/components/bg/home-bg";
import { Banner } from "@/components/landing/banner";
import { GlobeAnimation } from "@/components/landing/globe-animation";
import { Hero } from "@/components/landing/hero";
import { Phone } from "@/components/landing/phone";
import {
  TriangleImage1,
  TriangleImage2,
} from "@/components/landing/triangle-image";
import { TriangleImageSection } from "@/components/landing/triangle-image-section";

import { getDimensions, urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

export const generateMetadata = async (): Promise<Metadata> => {
  const [homeSeo, seo] = await Promise.all([getHomeSEO(), getSEO()]);
  return {
    title: homeSeo.meta?.title,
    description: homeSeo.meta?.description,
    openGraph: {
      images:
        homeSeo.opengraph?.image || seo.opengraph?.image
          ? [
              {
                url: urlFor(
                  homeSeo.opengraph?.image || seo.opengraph?.image || "",
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
        homeSeo.opengraph?.title ||
        homeSeo.meta?.title ||
        seo.opengraph?.title ||
        seo.meta?.title,
      description:
        homeSeo.opengraph?.description ||
        homeSeo.meta?.description ||
        seo.opengraph?.description ||
        seo.meta?.description,
    },
  };
};
export default async function Home() {
  const page = await getHomePage();
  const heroImage = {
    src: urlFor(page.heroBgImage).url(),
    alt: page.heroBgImage.alt,
    ...getDimensions(page.heroBgImage.asset._ref),
    clipPath: page.heroBgImage.clipPath,
  };
  const triangle1Image = {
    src: urlFor(page.triangle1Image).width(1024).url(),
    ...getDimensions(page.triangle1Image.asset._ref),
  };
  const triangle2Image = {
    src: urlFor(page.triangle2Image).width(1024).url(),
    ...getDimensions(page.triangle2Image.asset._ref),
  };
  return (
    <>
      <HomeBg {...heroImage} />
      <main className="page-base">
        <Hero
          title={page.heroTitle}
          description={page.heroCopy}
          buttons={page.heroCTA?.map((c) => ({
            href: formatLink(c),
            label: c.text,
          }))}
        />
        <Phone
          title={page.phoneTitle}
          description={page.phoneCopy}
          buttons={page.phoneCTA?.map((c) => ({
            href: formatLink(c),
            label: c.text,
          }))}
        />
        <TriangleImageSection
          icon={<TriangleImage2 {...triangle1Image} />}
          title={page.triangle1Title}
          text={page.triangle1Copy}
          tagline={page.triangle1Tagline}
          orientation="left"
          buttons={page.triangle1CTA?.map((c) => ({
            href: formatLink(c),
            label: c.text,
          }))}
        />
        <TriangleImageSection
          icon={<TriangleImage1 {...triangle2Image} />}
          title={page.triangle2Title}
          text={page.triangle2Copy}
          tagline={page.triangle2Tagline}
          orientation="right"
          tight
          buttons={page.triangle2CTA?.map((c) => ({
            href: formatLink(c),
            label: c.text,
          }))}
        />
        <Banner value={page.ribbon} />
        <GlobeAnimation
          title={page.globe.title}
          buttons={page.globe.cta?.map((c) => ({
            href: formatLink(c),
            label: c.text,
          }))}
        >
          {page.globe.copy}
        </GlobeAnimation>
      </main>
    </>
  );
}
