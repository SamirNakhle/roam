import { PortableTextBlock } from "@portabletext/react";
import Link from "next/link";
import { ReactNode } from "react";

import { TLink } from "@/lib/types";
import { cn } from "@/lib/utils";

import { Heading } from "@/components/heading";

type TriangleImageSectionProps = {
  className?: string;
  icon: ReactNode;
  title: PortableTextBlock[];
  text: string;
  tagline: string;
  orientation: "left" | "right";
  tight?: boolean;
  buttons?: TLink[];
};
export const TriangleImageSection = ({
  className,
  icon,
  text,
  tagline,
  title,
  orientation,
  tight,
  buttons,
}: TriangleImageSectionProps) => {
  return (
    <section
      className={cn(
        "mb-[100px] flex flex-col text-center text-white xl:items-center 2xl:items-end",
        {
          "xl:flex-row": orientation === "left",
          "xl:flex-row-reverse": orientation === "right",
        },
        className,
      )}
    >
      <div className="xl:w-1/2">
        <Heading value={title} className="pb-[34px]" />
        <div
          className={cn(
            "flex flex-col pb-[68px] sm:items-center sm:text-left",
            {
              "sm:flex-row": orientation === "left",
              "sm:flex-row-reverse sm:justify-end": orientation === "right",
            },
          )}
        >
          <p className="shrink-0 text-lg font-bold sm:w-[93px] sm:text-[24px] sm:leading-[30px]">
            {tagline}
          </p>
          <div
            className={cn(
              "mx-4 my-[25px] h-px shrink-0 bg-[#D9D9D9] sm:my-0 sm:h-auto sm:w-px sm:self-stretch",
              {
                "sm:mx-20": !tight,
                "sm:mx-6": tight,
              },
            )}
          />
          <p
            className={cn(
              "text-[22px] font-light sm:py-[56px] sm:text-[28px] sm:leading-[30px]",
              {
                "xl:max-w-[300px]": !tight,
                "xl:max-w-[393px]": tight,
              },
            )}
          >
            {text}
          </p>
        </div>
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
      {icon}
    </section>
  );
};
