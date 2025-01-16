import { Metadata } from "next";

import { getDownloadPage, getDownloadSEO, getSEO } from "@/lib/queries";
import { formatLink } from "@/lib/utils";

import { DownloadBg } from "@/components/bg/home-bg";
import { DownloadLinks } from "@/components/download/download-links";
import { FAQ } from "@/components/download/faq";
import { Features } from "@/components/download/features";
import { Hero } from "@/components/download/hero";
import { Steps } from "@/components/download/steps";

import { getDimensions, urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

export const generateMetadata = async (): Promise<Metadata> => {
  const [downloadSEO, seo] = await Promise.all([getDownloadSEO(), getSEO()]);
  return {
    title: downloadSEO.meta?.title,
    description: downloadSEO.meta?.description,
    openGraph: {
      images:
        downloadSEO.opengraph?.image || seo.opengraph?.image
          ? [
              {
                url: urlFor(
                  downloadSEO.opengraph?.image || seo.opengraph?.image || "",
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
        downloadSEO.opengraph?.title ||
        downloadSEO.meta?.title ||
        seo.opengraph?.title ||
        seo.meta?.title,
      description:
        downloadSEO.opengraph?.description ||
        downloadSEO.meta?.description ||
        seo.opengraph?.description ||
        seo.meta?.description,
    },
  };
};

export default async function Page() {
  const page = await getDownloadPage();
  const heroImage = {
    src: urlFor(page.heroBgImage).url(),
    alt: page.heroBgImage.alt,
    clipPath: page.heroBgImage.clipPath,
    ...getDimensions(page.heroBgImage.asset._ref),
  };
  return (
    <>
      <DownloadBg {...heroImage} />
      <main className="page-base text-white">
        <Hero
          title={page.heroTitle}
          buttons={page.heroCTA?.map((c) => ({
            href: formatLink(c),
            label: c.text,
          }))}
        />
        <Features data={page.features} />
        <DownloadLinks
          title={page.downloadLinksTitle}
          subTitle={page.downloadLinksSubtitle}
          qr={{
            src: urlFor(page.downloadLinksQR).url(),
            ...getDimensions(page.downloadLinksQR.asset._ref),
          }}
          apple={page.downloadLinksApple}
          android={page.downloadLinksAndroid}
        />
        <Steps
          title={page.usageTitle}
          subTitle={page.usageSubtitle}
          text={page.usageText}
          steps={page.steps.map((s) => ({
            ...s,
            image: {
              src: urlFor(s.image).url(),
              ...getDimensions(s.image.asset._ref),
            },
          }))}
        />
        <FAQ questions={page.faq} />
      </main>
    </>
  );
}
