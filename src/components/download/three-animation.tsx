"use client";

import {
  MotionValue,
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

type ThreeAnimationProps = {
  children: ReactNode;
  index: number;
  className?: string;
  query?: string;
  reverse?: boolean;
  defaultState?: State;
};

export const ThreeAnimation = ({
  children,
  index,
  className,
  query,
  defaultState,
  reverse = false,
}: ThreeAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const animate = useAnimation(scrollYProgress, query, defaultState);
  return (
    <motion.div
      ref={ref}
      variants={getVariants(index, reverse)}
      animate={animate}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const START = 0.15;
const END = 0.9;

const getVariants = (index: number, reverse: boolean) =>
  ({
    start: {
      x: reverse ? (index == 0 ? "-50%" : index == 1 ? 0 : "50%") : undefined,
    },
    visible: {
      x: !reverse ? (index == 0 ? "-50%" : index == 1 ? 0 : "50%") : undefined,
    },
    exit: {
      x: index == 0 ? "-200%" : index == 1 ? 0 : "200%",
      y: -200,
    },
  }) satisfies Variants;

type State = keyof ReturnType<typeof getVariants>;

function useAnimation(
  progress: MotionValue<number>,
  query?: string,
  defaultState?: State,
) {
  const [state, setState] = useState<keyof ReturnType<typeof getVariants>>(
    defaultState || "start",
  );
  const isAnimate = useMediaQuery(query || "(min-width: 1024px)");

  useMotionValueEvent(progress, "change", (value) => {
    function calculateProgress(value: number) {
      if (value < START) return "exit";
      if (value > END) return "start";
      return "visible";
    }

    const newState = calculateProgress(value);
    if (newState !== state) {
      setState(newState);
    }
  });
  return isAnimate ? state : defaultState || "start";
}
