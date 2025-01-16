"use client";

import { Variants, motion } from "framer-motion";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const imageVariants: Variants = {
  hidden: {
    scale: 1,
  },
  show: {
    scale: 1.5,
  },
};
const viewport = {
  once: false,
  amount: "some",
  margin: "-20% 0% -20% 0%",
} as const;

type TriangleImageProps = {
  src: string;
  width: number;
  height: number;
};
export const TriangleImage1 = ({ src, width, height }: TriangleImageProps) => {
  return (
    <>
      <Triangle1 />
      <div
        className="-mx-[25px] mt-[100px] self-stretch overflow-hidden xl:mx-0 xl:mt-0 xl:w-1/2 xl:grow"
        style={{
          filter: "drop-shadow(-44px -28px 93.3px rgba(62, 6, 91, 0.47))",
        }}
      >
        <div
          className="relative mx-auto max-w-[640px]"
          style={{
            clipPath: "url(#clip-triangle-1)",
          }}
        >
          <div className="absolute inset-0 z-10 bg-black/30" />
          <motion.img
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            src={src}
            width={width}
            height={height}
            viewport={viewport}
            className="w-full object-cover will-change-transform"
            alt="Roam Reality Vision"
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
          />
        </div>
      </div>
    </>
  );
};
export const TriangleImage2 = ({ src, width, height }: TriangleImageProps) => {
  return (
    <>
      <Triangle2 />
      <div
        className="relative -mx-[25px] mt-[100px] xl:mx-0 xl:mt-0 xl:grow"
        style={{
          filter: "drop-shadow(-44px -28px 93.3px rgba(119, 21, 149, 0.37))",
        }}
      >
        <RadialGradient />
        <div
          className="relative mx-auto max-w-[640px] overflow-hidden"
          style={{
            clipPath: "url(#clip-triangle-2)",
          }}
        >
          <div className="absolute inset-0 z-10 bg-black/30" />
          <motion.img
            src={src}
            width={width}
            height={height}
            className="mt-1 w-full object-cover will-change-transform"
            alt="Roam Reality Vision"
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{
              ease: "easeOut",
              duration: 0.5,
            }}
          />
        </div>
      </div>
    </>
  );
};

const Triangle1 = () => {
  return (
    <svg
      width="1"
      height="1"
      viewBox="0 0 1 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
    >
      <defs>
        <clipPath id="clip-triangle-1" clipPathUnits="objectBoundingBox">
          <path
            d="M0.0710817 0.066531C0.0609047 0.0442164 0.0729305 0.015625 0.0924931 0.015625L0.906298 0.015625C0.925752 0.015625 0.937794 0.0439313 0.927836 0.066252L0.525411 0.968271C0.515743 0.98994 0.492287 0.990093 0.482462 0.96855L0.0710817 0.066531Z"
            fill="none"
            stroke="none"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const Triangle2 = () => {
  return (
    <svg
      width="1"
      height="1"
      viewBox="0 0 1 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
    >
      <defs>
        <clipPath id="clip-triangle-2" clipPathUnits="objectBoundingBox">
          <path
            d="M0.936659 0.928936C0.947034 0.951525 0.934774 0.980469 0.914831 0.980469L0.0851825 0.980469C0.0653501 0.980469 0.0530739 0.951814 0.0632259 0.929218L0.473485 0.0160901C0.483341 -0.00584653 0.507254 -0.00600081 0.51727 0.0158077L0.936659 0.928936Z"
            fill="none"
            stroke="none"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const RadialGradient = ({ className, ...props }: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="298"
    height="345"
    viewBox="0 0 298 345"
    fill="none"
    className={cn("absolute right-2 top-2 h-[60vw] w-[60vw]", className)}
    {...props}
  >
    <g filter="url(#filter0_f_2484_1045)">
      <circle
        cx="171.898"
        cy="172.573"
        r="117.66"
        transform="rotate(-0.163752 171.898 172.573)"
        fill="url(#paint0_radial_2484_1045)"
        fillOpacity="0.15"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_2484_1045"
        x="0.128525"
        y="0.803818"
        width="343.54"
        height="343.539"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="27.0551"
          result="effect1_foregroundBlur_2484_1045"
        />
      </filter>
      <radialGradient
        id="paint0_radial_2484_1045"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(155.23 38.2447) rotate(87.7365) scale(248.26 2924.61)"
      >
        <stop stopColor="#58107A" />
      </radialGradient>
    </defs>
  </svg>
);
