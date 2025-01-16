import Image from "next/image";

type BgProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  clipPath: boolean;
};

export const HomeBg = ({ src, width, height, alt, clipPath }: BgProps) => {
  return (
    <div
      className="absolute inset-x-0 top-0 h-svh overflow-hidden"
      style={{
        clipPath: clipPath ? "url(#clip-home-bg)" : undefined,
      }}
    >
      <div className="relative h-full w-full">
        <BgClipPath />
        <div className="absolute inset-0 bg-black/50" />
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export const AboutBg = ({ src, width, height, alt, clipPath }: BgProps) => {
  return (
    <div
      className="absolute inset-x-0 top-0 h-svh overflow-hidden"
      style={{
        clipPath: clipPath ? "url(#clip-home-bg)" : undefined,
      }}
    >
      <div className="relative h-full w-full">
        <BgClipPath />
        <div className="absolute inset-0 bg-black/50" />
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
export const DownloadBg = ({ src, width, height, alt, clipPath }: BgProps) => {
  return (
    <div
      className="absolute inset-x-0 top-0 h-svh overflow-hidden"
      style={{
        clipPath: clipPath ? "url(#clip-home-bg)" : undefined,
      }}
    >
      <div className="relative h-full w-full">
        <BgClipPath />
        <div className="absolute inset-0 bg-black/50" />
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

const BgClipPath = () => {
  return (
    <svg
      width="1"
      height="1"
      viewBox="0 0 1 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
    >
      <defs>
        <clipPath id="clip-home-bg" clipPathUnits="objectBoundingBox">
          <path
            d="M0 0H1V0.266913L0.125354 0.941654C0.113219 0.951016 0.0987988 0.95042 0.0870152 0.940069L0 0.863636V0Z"
            fill="none"
            stroke="none"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
