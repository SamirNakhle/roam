import { PortableText, PortableTextBlock } from "@portabletext/react";
import Link from "next/link";
import { ReactNode } from "react";

import { TLink } from "@/lib/types";
import { cn } from "@/lib/utils";

import { AnimatedGlobe } from "./animated-globe";

type GlobeAnimationProps = {
  title: PortableTextBlock[];
  children: ReactNode;
  buttons?: TLink[];
};
export const GlobeAnimation = ({
  title,
  children,
  buttons,
}: GlobeAnimationProps) => {
  return (
    <section className="flex flex-col text-center text-white sm:text-left xl:flex-row xl:items-center 2xl:pb-[100px]">
      <div className="xl:w-1/2">
        <PortableText
          value={title}
          components={{
            block: {
              normal: ({ children }) => (
                <h2
                  className={cn(
                    "[&_strong]:purple-text pb-5 text-[40px] font-bold sm:text-[64px] sm:leading-none xl:max-w-[538px] [&_strong]:font-black",
                  )}
                >
                  {children}
                </h2>
              ),
            },
          }}
        />
        <p className="pb-[72px] text-[22px] font-light sm:text-[25px] sm:leading-[32px] xl:pb-10">
          {children}
        </p>
        <div className="flex items-center justify-center gap-[25px] sm:flex-row sm:flex-wrap sm:justify-start sm:gap-[50px]">
          {buttons?.map((button, i) =>
            i === 0 ? (
              <Link
                key={i}
                href={button.href}
                className="flex h-11 w-fit items-center justify-center whitespace-nowrap rounded-lg bg-white px-[15px] text-lg font-semibold text-black transition-colors duration-300 hover:bg-[#D9D9D9] sm:h-[54px] sm:max-w-[243px] sm:grow sm:px-[45px] sm:text-[22px] sm:leading-[47px]"
              >
                {button.label}
              </Link>
            ) : (
              <Link
                key={i}
                href={button.href}
                className="flex h-11 w-fit items-center justify-center whitespace-nowrap rounded-lg border-2 border-white bg-transparent px-[15px] text-lg font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black sm:h-[54px] sm:max-w-[243px] sm:grow sm:border-[3px] sm:px-[45px] sm:text-[22px] sm:leading-[47px]"
              >
                {button.label}
              </Link>
            ),
          )}
        </div>
      </div>
      <div className="my-[100px] flex max-w-[542px] items-center justify-center self-stretch sm:mx-auto xl:my-0 xl:w-1/2">
        <AnimatedGlobe />
      </div>
    </section>
  );
};
