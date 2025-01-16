import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

import { getLegal, getSEO } from "@/lib/queries";

import { urlFor } from "@/sanity/lib/image";

type Props = {
  params: { slug: string };
};
export const revalidate = 60

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const [legal, seo] = await Promise.all([getLegal(params.slug), getSEO()]);
  return {
    title: legal?.title,
    openGraph: {
      images: seo.opengraph?.image
        ? [
            {
              url: urlFor(seo.opengraph?.image).width(1200).height(630).url(),
              width: 1200,
              height: 630,
            },
          ]
        : undefined,
      title: legal?.title || seo.opengraph?.title || seo.meta?.title,
      description: seo.opengraph?.description || seo.meta?.description,
    },
  };
};

export default async function Page({ params }: Props) {
  const page = await getLegal(params.slug);
  return (
    <div className="prose max-w-none pb-24 text-center text-[22px] text-white prose-headings:relative prose-headings:mt-[144px] prose-headings:font-bold prose-headings:text-[#d9d9d9] prose-headings:after:absolute prose-headings:after:inset-x-0 prose-headings:after:h-px prose-headings:after:bg-[#d9d9d9] prose-h1:mb-[86px] prose-h1:mt-[80px] prose-h1:text-[66px] prose-h1:after:-bottom-[43px] prose-h2:mb-[33px] prose-h2:text-[48px] prose-h2:after:-bottom-[8px] prose-h3:text-3xl prose-h3:after:hidden prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-white prose-a:underline prose-strong:font-bold prose-strong:text-[#d3d3d3] prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 sm:text-left">
      <h1>{page.title}</h1>
      <PortableText value={page.content} />
    </div>
  );
}
