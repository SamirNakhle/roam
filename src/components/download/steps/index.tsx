import { PortableText, PortableTextBlock } from "@portabletext/react";

import { AnimatedSteps } from "@/components/download/steps/animated-steps";

type StepsProps = {
  title: string;
  subTitle: string;
  text: PortableTextBlock[];
  steps: {
    title: string;
    subtitle: string;
    text: PortableTextBlock[];
    image: { src: string; width: number; height: number };
  }[];
};
export const Steps = ({ title, steps, subTitle, text }: StepsProps) => {
  return (
    <section className="mx-auto my-[100px] max-w-screen-2xl" id="usage">
      <div className="mb-[55px] rounded-2xl bg-roam-700 px-5 py-[35px] lg:p-[50px]">
        <div className="flex flex-col justify-between gap-[35px] sm:flex-row sm:items-center">
          <h2 className="text-[40px] font-black sm:text-[68px]">{title}</h2>
          <p className="text-[28px] font-semibold sm:text-[32px]">{subTitle}</p>
        </div>
        <div className="pt-[35px] text-[22px] font-light sm:text-[24px]">
          <PortableText
            value={text}
            components={{
              block: {
                normal: ({ children }) => <p className="pb-10">{children}</p>,
              },
              list: {
                number: ({ children }) => (
                  <ol className="ml-7 list-decimal">{children}</ol>
                ),
              },
              listItem: {
                number: ({ children }) => (
                  <li className="pb-10 last:pb-0">{children}</li>
                ),
              },
            }}
          />
        </div>
      </div>
      <AnimatedSteps steps={steps} />
    </section>
  );
};
