"use client";

import { PortableText, PortableTextBlock } from "@portabletext/react";
import { motion } from "framer-motion";

export const Banner = ({ value }: { value: PortableTextBlock[] }) => {
  return (
    <div className="-mx-[25px] my-[100px] flex overflow-hidden bg-roam-700 py-8 text-white sm:-mx-[45px] sm:py-[50px] lg:-mx-[100px]">
      {Array.from({ length: 4 }).map((_, i) => (
        <PortableText
          key={i}
          value={value}
          components={{
            block: {
              normal: ({ children }) => (
                <motion.p
                  className="[&_strong]:purple-text min-w-max pr-24 text-[40px] font-black leading-[45px] sm:text-[64px] sm:leading-[72px]"
                  animate={{ x: "-100%" }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {children}
                </motion.p>
              ),
            },
          }}
        />
      ))}
    </div>
  );
};
