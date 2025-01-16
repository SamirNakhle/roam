import Image from "next/image";
import { ComponentProps, ReactNode } from "react";

import { ThreeAnimation } from "@/components/download/three-animation";

const features = [
  {
    src: "/download/feature-1.png",
    width: 148,
    height: 124,
    alt: "Feature 1",
    children:
      "We map the adventure of a lifetime in the form of a geo-AR star hunt, curated around the best sites + attractions",
  },
  {
    src: "/download/feature-2.png",
    width: 150,
    height: 154,
    alt: "Feature 2",
    children:
      "Uncover travel insights on the go! engage in unique AR experiences + access a range ar photo filters to uplift your vacation shots!",
  },
  {
    src: "/download/feature-3.png",
    width: 138,
    height: 90,
    alt: "Feature 3",
    children:
      "Share your recorded ar experiences, photos and travel insights cross- platform for in-app points + rewards",
  },
];
export const Features = ({ data }: { data: { description: string }[] }) => {
  return (
    <section className="flex flex-col gap-[25px] sm:flex-row sm:justify-center lg:gap-[60px]">
      {features.map((feature, index) => (
        <Feature key={feature.alt} index={index} {...feature}>
          {data?.[index]?.description}
        </Feature>
      ))}
    </section>
  );
};

type FeatureProps = {
  children: ReactNode;
  index: number;
} & ComponentProps<typeof Image>;
const Feature = ({ children, index, ...props }: FeatureProps) => {
  return (
    <ThreeAnimation
      index={index}
      className="flex flex-col items-center justify-between rounded-[14px] bg-roam-700 px-[35px] py-[25px] text-center text-white lg:max-w-[241px] lg:px-[30px]"
    >
      <div
        className="h-[91px] w-auto min-w-[91px] shrink-0 rounded-[15px] p-3"
        style={{
          background:
            "linear-gradient(90deg, #4238F5 -0.49%, #8100E3 63.01%, #9E00E9 99.51%)",
        }}
      >
        {/* enforced using typescript */}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...props} className="h-full w-auto object-contain" />
      </div>
      <p className="pt-[25px] text-[22px] font-light sm:text-base sm:leading-[22px]">
        {children}
      </p>
    </ThreeAnimation>
  );
};
