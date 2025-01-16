"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const AnimatedPhone = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    margin: `-30% 0% 0% 0%`,
    once: false,
    amount: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      animate={inView ? "normal" : "rotated"}
      variants={{
        normal: { rotate: 0 },
        rotated: { rotate: -30 },
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="grow origin-center sm:w-full sm:max-w-[509px] xl:w-1/2 xl:grow"
    >
      <Image
        src="/landing-phone.png"
        width={1973}
        height={2529}
        alt="Phone Prototype"
        className="w-full px-[25px] pb-[37px]"
      />
    </motion.div>
  );
};
