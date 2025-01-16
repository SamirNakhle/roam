"use client";

import { PortableText, PortableTextBlock } from "@portabletext/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

import { Chevron } from "@/components/icons/chevron";

import { useSteps } from "./use-steps";

type AnimatedStepsProps = {
  steps: {
    title: string;
    subtitle: string;
    text: PortableTextBlock[];
    image: {
      src: string;
      width: number;
      height: number;
    };
  }[];
};
export const AnimatedSteps = ({ steps }: AnimatedStepsProps) => {
  const { currentStepIdx, prevStep, nextStep } = useSteps(steps.length);
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:gap-5">
      <div>
        <AnimatePresence>
          {steps.map((step, idx) => (
            <Step
              title={step.title}
              subtitle={step.subtitle}
              index={idx}
              key={step.title}
              active={idx === currentStepIdx}
            >
              <PortableText
                value={step.text}
                components={{
                  block: {
                    normal: ({ children }) => <>{children}</>,
                  },
                  marks: {
                    strong: ({ children }) => (
                      <span className="font-bold">{children}</span>
                    ),
                  },
                }}
              />
            </Step>
          ))}
        </AnimatePresence>
        <div className="my-[55px] flex justify-center gap-8 lg:my-5 lg:justify-start">
          <button
            className="rounded-full bg-roam-700 px-[30px] py-[25px] disabled:opacity-80"
            title={currentStepIdx === 0 ? "No Previous Step" : "Previous Step"}
            onClick={prevStep}
            disabled={currentStepIdx === 0}
          >
            <Chevron />
          </button>
          <button
            className="rounded-full bg-roam-700 px-[30px] py-[25px] disabled:opacity-80"
            title={
              currentStepIdx === steps.length - 1 ? "No Next Step" : "Next Step"
            }
            onClick={nextStep}
            disabled={currentStepIdx === steps.length - 1}
          >
            <Chevron className="rotate-180" />
          </button>
        </div>
      </div>
      <Image
        src={steps[currentStepIdx].image.src}
        width={steps[currentStepIdx].image.width}
        height={steps[currentStepIdx].image.height}
        alt={steps[currentStepIdx].title}
        className="mx-auto mb-auto h-auto w-full max-w-[542px] object-contain lg:max-w-[290px]"
      />
    </div>
  );
};

type StepProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
  active: boolean;
  index: number;
};
const Step = ({ children, title, subtitle, index, active }: StepProps) => {
  return active ? (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      key={index}
      className="rounded-2xl bg-roam-700 px-5 py-[35px] lg:px-[35px]"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="pb-4 text-[40px] font-black sm:text-[68px]"
      >
        {title}
      </motion.h2>
      <motion.h3
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="pb-[35px] text-[18px] font-extrabold sm:text-[24px]"
      >
        {subtitle}
      </motion.h3>
      <motion.p
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="text-[22px] font-light sm:text-[24px]"
      >
        {children}
      </motion.p>
    </motion.div>
  ) : null;
};
