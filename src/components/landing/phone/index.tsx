import { PortableTextBlock } from "@portabletext/react";
import Link from "next/link";

import { TLink } from "@/lib/types";

import { Heading } from "@/components/heading";
import { AnimatedPhone } from "@/components/landing/phone/animated-phone";

type PhoneProps = {
  title: PortableTextBlock[];
  description?: string;
  buttons?: TLink[];
};
export const Phone = ({ title, description, buttons }: PhoneProps) => {
  return (
    <section className="py-[100px] sm:mb-[50px] sm:mt-[250px] xl:mt-[250px] xl:flex xl:justify-center xl:gap-[111px]">
      <AnimatedPhone />
      <div className="xl:w-1/2 xl:max-w-[620px]">
        <Heading value={title} className="pb-5" />
        <p className="pb-[37px] text-center text-[22px] font-light leading-[32px] text-white sm:text-left sm:text-[24px]">
          {description}
        </p>
        {buttons?.map((button, i) => (
          <Link
            key={i}
            href={button.href}
            className="mx-auto mb-4 flex h-11 w-fit items-center justify-center whitespace-nowrap rounded-lg bg-white px-[15px] text-lg font-semibold text-black transition-colors duration-300 hover:bg-[#D9D9D9] sm:mx-[unset] sm:h-[54px] sm:max-w-[243px] sm:grow sm:px-[45px] sm:text-[22px] sm:leading-[47px]"
          >
            {button.label}
          </Link>
        ))}
      </div>
    </section>
  );
};
