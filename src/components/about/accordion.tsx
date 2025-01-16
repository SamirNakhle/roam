import Image from "next/image";

import { cn } from "@/lib/utils";

import * as UI from "@/components/ui/accordion";

type AccordionProps = {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  mainInfo: {
    title: string;
    description: string;
    number: string;
  };
  otherInfo: {
    title: string;
    number: string;
  }[];
};
export const Accordion = ({ images, mainInfo, otherInfo }: AccordionProps) => {
  return (
    <section
      id="learn-more"
      className="mx-auto mb-[100px] flex max-w-screen-2xl flex-col gap-5 text-white xl:mb-0 xl:flex-row xl:py-[100px]"
    >
      <div className="grid w-full grid-cols-2 gap-8 rounded-2xl bg-roam-700 p-8 xl:w-2/3">
        {images.map((image, index) => (
          <Image
            key={index}
            className={cn(
              "h-[290px] w-full rounded-[10px] object-cover sm:h-[270px] sm:rounded-[20px]",
              index === 2 &&
                "col-span-2 row-start-2 mb-[20px] h-[270px] sm:mb-0",
            )}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        ))}
      </div>
      <UI.Accordion
        defaultValue={mainInfo.title}
        type="single"
        className="flex flex-col gap-5 xl:w-1/3"
        disabled
      >
        {[mainInfo, ...otherInfo]
          .map((i) => ({
            right: i.title,
            left: i.number,
            body: "description" in i ? (i.description as string) : "",
          }))
          .map((item, index) => (
            <UI.AccordionItem
              value={item.right}
              key={index}
              className="rounded-2xl border-0 bg-roam-700 p-4 sm:px-8"
            >
              <UI.AccordionTrigger className="justify-start gap-5 py-0 hover:no-underline">
                <p className="whitespace-nowrap text-[42px] font-black hover:no-underline">
                  {item.left}
                </p>
                <p className="whitespace-nowrap text-[24px] leading-[28px]">
                  {item.right}
                </p>
              </UI.AccordionTrigger>
              <UI.AccordionContent className="p-0 pt-7 text-lg font-light">
                {item.body}
              </UI.AccordionContent>
            </UI.AccordionItem>
          ))}
      </UI.Accordion>
    </section>
  );
};
