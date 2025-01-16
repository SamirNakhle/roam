"use client";

import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback } from "react";

import { cn } from "@/lib/utils";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

export const BrandsClient = ({
  brands,
}: {
  brands: { title: string; src: string; width: number; height: number }[];
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [Autoplay()],
  );

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );
  return (
    <motion.div
      className="embla w-full max-w-[calc(768px-45px)] sm:ml-auto sm:[--slide-size:248px] sm:[--slide-spacing:40px]"
      whileInView={{
        translateX: 0,
      }}
      initial={{
        translateX: "40%",
      }}
      transition={{
        ease: "easeOut",
        duration: 0.5,
      }}
      viewport={{
        once: false,
        amount: 0.5,
      }}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {brands.map((brand, i) => (
            <div className="embla__slide" key={i}>
              <div className="flex h-32 items-center justify-center rounded-md bg-white text-white sm:h-48">
                <Image
                  src={brand.src}
                  alt={brand.title}
                  width={brand.width}
                  height={brand.height}
                  className="w-[100px] sm:w-[170px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[18px] flex gap-1.5 sm:pl-8">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "h-[13px] w-[20px] touch-manipulation rounded-full bg-white transition-all",
              index === selectedIndex && "w-[66px] bg-[#D9D9D9]",
            )}
          />
        ))}
      </div>
    </motion.div>
  );
};
