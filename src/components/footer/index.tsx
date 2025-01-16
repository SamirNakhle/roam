import Image from "next/image";
import Link from "next/link";

import { getFooter } from "@/lib/queries";
import { renderIcon } from "@/lib/render-icon";

import { Mail } from "@/components/icons/mail";
import { Phone } from "@/components/icons/phone";

import { getDimensions, urlFor } from "@/sanity/lib/image";

export const Footer = async () => {
  const footer = await getFooter();
  const { width, height } = getDimensions(footer.logo.asset._ref);
  console.log(footer.quickLinks);

  return (
    <footer className="flex flex-col gap-[107px] bg-roam-700 px-[45px] py-[50px] text-white sm:gap-[98px] lg:flex-row lg:px-[100px] xl:gap-[158px]">
      <div className="text-[15px] font-medium lg:max-w-[292px]">
        <Link className="leading-none" href="/">
          <Image
            src={urlFor(footer.logo).width(243).url()}
            alt="Roam Reality Logo"
            width={width}
            height={height}
            className="mb-[51px] w-[243px] lg:mb-[25px]"
          />
        </Link>
        <p>{footer.footerCopy}</p>
      </div>
      <SocialLinks links={footer.social} />
      <div className="grow sm:flex">
        <FooterMenu
          title="Quick Links"
          links={footer.quickLinks.map((l) => ({
            title: l.label,
            href: !l.isExternal ? l.internalLink.href : "/",
          }))}
        />
        <div className="h-[107px] sm:h-auto sm:w-[52px]" />
        <FooterMenu
          title="Legal"
          links={footer.legalLinks.map((l) => ({
            title: l.label,
            href: !l.isExternal ? l.internalLink.href : "/",
          }))}
        />
        <div className="h-[107px] sm:h-auto sm:grow" />
        <ul className="flex flex-col gap-[27px] sm:ml-auto">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <Link
            href={`tel:${footer.phone}`}
            className="flex items-center gap-2.5"
          >
            <Phone className="h-[19px] w-[19px]" />
            <span className="text-[15px] font-medium">{footer.phone}</span>
          </Link>
          <Link
            href={`mailto:${footer.email}`}
            className="flex items-center gap-2.5"
          >
            <Mail className="h-[19px] w-[19px]" />
            <span className="text-[15px] font-medium">{footer.email}</span>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

const SocialLinks = ({
  links,
}: {
  links: {
    url: string;
    platform: string;
  }[];
}) => {
  const getTitle = (platform: string) => {
    switch (platform) {
      case "facebook":
        return "Open Roam Reality Facebook";
      case "instagram":
        return "Open Roam Reality Instagram";
      case "x":
        return "Open Roam Reality Twitter";
      case "tiktok":
        return "Open Roam Reality Tiktok";
      default:
        return "";
    }
  };
  return (
    <ul className="flex gap-[18px] lg:flex-col">
      {links.map((link) => (
        <li key={link.platform}>
          <Link href={link.url} target="_blank" title={getTitle(link.platform)}>
            {renderIcon(link.platform)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

type FooterMenuProps = {
  title: string;
  links: { title: string; href: string }[];
};
const FooterMenu = ({ title, links }: FooterMenuProps) => {
  return (
    <ul>
      <h2 className="pb-[10px] text-lg font-bold">{title}</h2>
      {links.map((link) => (
        <li key={link.title} className="pb-[15px] text-[15px] font-medium">
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};
