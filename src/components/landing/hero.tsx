import Link from "next/link";

import { TLink } from "@/lib/types";

type HeroProps = {
  title: string;
  description?: string;
  buttons?: TLink[];
};
export const Hero = ({ title, description, buttons }: HeroProps) => {
  return (
    <div className="mb-[100px] flex max-w-[670px] flex-col py-[51px] text-center text-white sm:text-left">
      <h1 className="pb-[22px] text-[26px] font-black sm:text-[68px] sm:leading-[78px] lg:text-[72px] lg:leading-[78px]">
        {title}
      </h1>
      <p className="pb-[72px] text-[18px] font-light sm:max-w-[720px] sm:text-[24px]">
        {description}
      </p>
      <div className="flex items-center justify-center gap-[25px] sm:flex-wrap sm:justify-start sm:gap-[50px]">
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
  );
};
