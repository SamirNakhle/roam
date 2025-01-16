import { ReactNode } from "react";

import { Brands } from "@/components/brands";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { NewsletterForm } from "@/components/newsletter-form";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Nav />
      {children}
      <Brands />
      <NewsletterForm />
      <Footer />
    </>
  );
}
