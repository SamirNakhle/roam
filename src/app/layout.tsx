import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { ReactNode } from "react";

import { baseUrl } from "@/lib/constants";
import { getSEO } from "@/lib/queries";

import { urlFor } from "@/sanity/lib/image";

import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
  const seo = await getSEO();
  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: `%s | ${seo.meta.title}`,
      default: seo.meta.title,
    },
    description: seo.meta.description,
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
      siteName: seo.meta.title,
      url: new URL(baseUrl),
      title: seo.opengraph?.title,
      description: seo.opengraph?.title,
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative bg-gradient-bg ${nunitoSans.className}`}>
        {children}
      </body>
    </html>
  );
}
