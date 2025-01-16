"use client";

import { motion } from "framer-motion";

import { Globe } from "./globe";

const DURATION = 2;

export const AnimatedGlobe = () => {
  return (
    <div className="relative w-full self-stretch overflow-hidden rounded-full p-1 will-change-transform">
      <Globe className="h-auto w-full rounded-full" />
      {/* FIRST SET OF COUNTRIES */}
      <motion.img
        animate={{
          translateX: [null, -450, 450, 0],
          translateY: [null, "-50%", "10%", 0],
          transition: {
            duration: DURATION,
            times: [0, 0.6, 0.6, 1],
            repeatDelay: DURATION,
            repeat: Infinity,
            ease: "easeOut",
          },
        }}
        src="/countries/bermuda.png"
        alt="Bermuda"
        width={146}
        height={163}
        className="absolute right-[17%] top-[13%] w-16 will-change-transform min-[468px]:w-20 sm:w-28"
      />
      <motion.img
        animate={{
          translateX: [null, -350, 350, 0],
          transition: {
            duration: DURATION,
            times: [0, 0.5, 0.5, 1],
            repeatDelay: DURATION,
            repeat: Infinity,
            ease: "easeOut",
          },
        }}
        src="/countries/tt.png"
        alt="T&T"
        width={118}
        height={174}
        className="absolute bottom-[10%] right-[35%] w-16 will-change-transform min-[468px]:w-20 sm:w-28"
      />
      <motion.img
        animate={{
          translateX: [null, -500, 500, 0],
          translateY: [null, "-40%", 0, 0],
          transition: {
            duration: DURATION,
            times: [0, 0.3, 0.3, 1],
            repeatDelay: DURATION,
            repeat: Infinity,
            ease: "easeOut",
          },
        }}
        src="/countries/jamaica.png"
        alt="Jamaica"
        width={164}
        height={172}
        className="absolute left-[10%] top-[20%] w-16 will-change-transform min-[468px]:w-20 sm:w-28"
      />
    </div>
  );
};
