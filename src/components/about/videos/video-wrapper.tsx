"use client";

import { motion, useScroll } from "framer-motion";
import { ReactNode, useRef } from "react";

import { useParallax } from "@/lib/use-parallax";
import { cn } from "@/lib/utils";

type VideoWrapperProps = {
  children: ReactNode;
  className?: string;
  fast?: boolean;
};

export const VideoWrapper = ({
  children,
  className,
  fast,
}: VideoWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useParallax(scrollYProgress, fast ? 60 : 20);

  return (
    <motion.div ref={ref} style={{ y }}>
      <div className={cn("bg-roam-700 px-4 py-3.5 sm:px-8 sm:py-7", className)}>
        {children}
      </div>
    </motion.div>
  );
};
