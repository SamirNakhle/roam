import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

import { ThreeAnimation } from "@/components/download/three-animation";

type DownloadLinksProps = {
  title: string;
  subTitle: string;
  qr: {
    src: string;
    width: number;
    height: number;
  };
  apple: string;
  android: string;
};
export const DownloadLinks = ({
  title,
  subTitle,
  qr,
  apple,
  android,
}: DownloadLinksProps) => {
  return (
    <section id="links" className="my-[100px] text-center">
      <h2 className="pb-3 text-[52px] font-black">{title}</h2>
      <p className="pb-[100px] text-[32px] font-light leading-none">
        {subTitle}
      </p>
      <div className="flex flex-col gap-[25px] sm:gap-[120px] xl:flex-row xl:justify-center xl:gap-[50px]">
        <ThreeAnimation
          query="(min-width: 1280px)"
          index={0}
          className="hidden aspect-square w-full max-w-[380px] grow items-center justify-center rounded-[22px] bg-roam-700 p-[25px] xl:flex"
          reverse
          defaultState="visible"
        >
          <div className="aspect-square overflow-hidden rounded-lg bg-white">
            {/*<Image*/}
            {/*  src="/download/qr.png"*/}
            {/*  width={1200}*/}
            {/*  height={1200}*/}
            {/*  alt="Roam Reality QR Code"*/}
            {/*  className="object-cover"*/}
            {/*/> */}
            <Image
              src={qr.src}
              width={qr.width}
              height={qr.height}
              alt="Roam Reality QR Code"
              className="object-cover"
            />
          </div>
        </ThreeAnimation>
        <DownloadCard
          title="Available on IOS"
          text="Find us on the App Store."
          href={apple}
          icon="apple"
          index={1}
        />
        <DownloadCard
          title="Available on Android"
          text="Find us on the Play Store."
          href={android}
          icon="android"
          index={2}
        />
      </div>
    </section>
  );
};

type DownloadCardProps = {
  icon: "apple" | "android";
  title: string;
  text: string;
  href: string;
  index: number;
};

const DownloadCard = ({
  icon,
  title,
  text,
  href,
  index,
}: DownloadCardProps) => {
  const Icon = icon === "apple" ? Apple : Android;
  return (
    <ThreeAnimation
      index={index}
      reverse
      defaultState="visible"
      query="(min-width: 1280px)"
      className="flex flex-col items-center gap-10 rounded-[22px] bg-roam-700 p-[38px] sm:items-start xl:aspect-square xl:h-[365px] xl:max-h-[380px] xl:w-full xl:max-w-[380px] xl:grow xl:justify-between xl:gap-[unset] xl:p-[25px] xl:text-left"
    >
      <Icon className="mb-10 h-[130px] w-auto xl:mb-0 xl:h-[87px]" />
      <h3 className="mt-[60px] text-[40px] font-black sm:mt-0 sm:text-[42px] sm:leading-[55px] xl:text-[28px] xl:leading-none">
        {title}
      </h3>
      <p className="text-[22px] font-light sm:text-[33px] sm:leading-none xl:text-[22px]">
        {text}
      </p>
      <Link
        // target="_blank"
        href={href}
        // href={"#form-newsletter"}
        className="flex h-11 w-fit items-center justify-center whitespace-nowrap rounded-lg bg-white px-[15px] text-lg font-semibold text-black transition-colors duration-300 hover:bg-[#D9D9D9] sm:h-[54px] sm:max-w-[243px] sm:px-[45px] sm:text-[22px] sm:leading-[47px]"
      >
        Download Now
      </Link>
    </ThreeAnimation>
  );
};

const Apple = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="115"
      height="133"
      viewBox="0 0 115 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78.1424 21.2798C83.0433 15.6791 86.3469 7.87855 85.4428 0.117188C78.3803 0.382311 69.836 4.56561 64.7719 10.1596C60.2245 15.124 56.2548 23.0563 57.322 30.6653C65.2002 31.2419 73.2415 26.887 78.1424 21.2798ZM95.8089 70.5406C96.006 90.6036 114.434 97.2775 114.638 97.3637C114.488 97.8343 111.694 106.873 104.931 116.219C99.0784 124.292 93.0083 132.332 83.4444 132.504C74.0504 132.67 71.0255 127.242 60.2788 127.242C49.539 127.242 46.181 132.331 37.29 132.669C28.0592 132.994 21.0239 123.935 15.1305 115.889C3.07193 99.4313 -6.13854 69.3813 6.23273 49.0997C12.3776 39.0317 23.3554 32.6464 35.278 32.4874C44.3389 32.3217 52.8969 38.2481 58.4368 38.2481C63.9766 38.2481 74.3767 31.123 85.3069 32.1702C89.8815 32.3492 102.729 33.9128 110.974 45.3196C110.308 45.7106 95.6457 53.7718 95.8089 70.5406Z"
        fill="white"
      />
    </svg>
  );
};
const Android = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="115"
      height="134"
      viewBox="0 0 115 134"
      fill="none"
      {...props}
    >
      <path
        d="M22.2039 44.3285H92.7953V101.572C92.7953 104.972 90.0247 107.729 86.6115 107.729H79.5409V125.163C79.5409 129.59 75.9924 133.178 71.612 133.178C67.2204 133.178 63.6772 129.59 63.6772 125.163V107.729H51.3281V125.163C51.3281 129.59 47.7725 133.178 43.3924 133.178C39.0131 133.178 35.4579 129.59 35.4579 125.163V107.729H28.3935C24.9795 107.729 22.2037 104.972 22.2037 101.572L22.2039 44.3285ZM8.37047 43.8613C3.94554 43.8613 0.361328 47.4835 0.361328 51.955V83.5872C0.361328 88.0535 3.94554 91.6819 8.37047 91.6819C12.7962 91.6819 16.3796 88.0535 16.3796 83.5872V51.955C16.3796 47.4835 12.7962 43.8613 8.37047 43.8613ZM92.7956 38.5602H22.2039C23.0751 28.5525 29.5989 19.9405 38.9902 14.954L32.2785 5.14717C31.3734 3.82468 31.7149 2.02019 33.0465 1.11977C34.3765 0.219344 36.1862 0.56177 37.0958 1.88322L44.411 12.5794C48.4668 11.1837 52.8693 10.3824 57.4996 10.3824C62.1354 10.3824 66.5382 11.1837 70.5938 12.5812L77.9089 1.88712C78.8073 0.56203 80.6227 0.219604 81.9528 1.12003C83.2843 2.02045 83.6258 3.82494 82.7207 5.14743L76.0145 14.9543C85.4056 19.9376 91.9249 28.5497 92.7956 38.5602ZM46.5155 24.962C46.5155 22.8158 44.7691 21.0752 42.6132 21.0752C40.4519 21.0752 38.7055 22.8158 38.7055 24.962C38.7055 27.1071 40.4576 28.847 42.6132 28.847C44.7689 28.847 46.5155 27.1071 46.5155 24.962ZM76.7885 24.962C76.7885 22.8158 75.0362 21.0752 72.8808 21.0752C70.7194 21.0752 68.9783 22.8158 68.9783 24.962C68.9783 27.1071 70.7194 28.847 72.8808 28.847C75.0364 28.847 76.7885 27.1071 76.7885 24.962ZM106.634 43.8502C102.214 43.8502 98.6196 47.4778 98.6196 51.9496V83.5929C98.6196 88.0646 102.214 91.6933 106.634 91.6933C111.06 91.6933 114.638 88.0649 114.638 83.5929V51.9496C114.638 47.4778 111.06 43.8502 106.634 43.8502Z"
        fill="white"
      />
    </svg>
  );
};
