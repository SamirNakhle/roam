import Link from "next/link";

import { TLink } from "@/lib/types";

type HeroProps = {
  title: string;
  buttons?: TLink[];
};
export const Hero = ({ title, buttons }: HeroProps) => {
  return (
    <div className="mb-[100px] flex flex-col items-center py-[51px] text-center text-white">
      <h1 className="mx-auto px-[45px] pb-[50px] text-[26px] font-black sm:max-w-[720px] sm:text-[68px] sm:leading-[78px] lg:text-[72px] lg:leading-[78px]">
        {title}
      </h1>
      <div className="flex flex-col items-center gap-[25px] sm:flex-row sm:flex-wrap sm:gap-[50px]">
        {buttons?.map((button, i) => (
          <Link
            key={i}
            href={button.href}
            className="mb-4 flex h-11 w-fit items-center justify-center whitespace-nowrap rounded-lg bg-white px-[15px] text-lg font-semibold text-black transition-colors duration-300 hover:bg-[#D9D9D9] sm:h-[54px] sm:max-w-[243px] sm:grow sm:px-[45px] sm:text-[22px] sm:leading-[47px]"
          >
            {button.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
