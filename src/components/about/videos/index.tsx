import { cn } from "@/lib/utils";

import { VideoPlayer } from "@/components/about/videos/video-player";
import { VideoWrapper } from "@/components/about/videos/video-wrapper";

type TVideo = {
  title: string;
  id: string;
};

export const Videos = ({
  video1,
  video2,
}: {
  video1: TVideo;
  video2: TVideo;
}) => {
  return (
    <section className="relative my-[100px] sm:pb-[100px]">
      <VideoCard
        className="relative z-10 mx-4 max-w-[680px] translate-y-1/4 rounded-2xl sm:mx-8 sm:rounded-[32px] lg:mx-0 lg:mr-auto lg:px-[36px] lg:py-[28px]"
        innerClassName="rounded-[12px] sm:rounded-[22px]"
        title={video1.title}
        id={video1.id}
      />
      <VideoCard
        className="relative z-10 mx-auto max-w-[720px] rounded-[20px] sm:rounded-[40px] lg:mx-[unset] lg:ml-auto lg:px-[35px] lg:py-[30px]"
        innerClassName="rounded-[12px] sm:rounded-[24px]"
        title={video2.title}
        id={video2.id}
        fast
      />
      <Blur className="pointer-events-none right-0 top-0 -translate-y-1/4 translate-x-1/2 lg:-translate-y-1/4 lg:translate-x-0" />
      <Blur className="pointer-events-none bottom-0 left-1/2 -translate-x-1/3 translate-y-1/3 lg:left-0 lg:-translate-x-1/3 lg:translate-y-0" />
      <Blur className="pointer-events-none bottom-0 left-1/2 -translate-x-2/3 translate-y-1/3 lg:left-[unset] lg:right-0 lg:translate-x-0 lg:translate-y-0" />
    </section>
  );
};

const VideoCard = ({
  className,
  innerClassName,
  title,
  id,
  fast,
}: {
  className?: string;
  innerClassName?: string;
  title: string;
  id: string;
  fast?: boolean;
}) => {
  return (
    <VideoWrapper className={className} fast={fast}>
      <div
        className={cn(
          "aspect-video h-full w-full overflow-hidden rounded",
          innerClassName,
        )}
      >
        <VideoPlayer title={title} id={id} />
      </div>
    </VideoWrapper>
  );
};

const Blur = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute z-0 h-[65vw] w-[65vw] rounded-full blur-[80px] sm:blur-[160px] lg:h-[35vw] lg:w-[35vw]",
        className,
      )}
      style={{
        background:
          "radial-gradient(1600.27% 105.5% at 42.92% -7.08%, rgba(32, 32, 203, 0.30) 0%, rgba(30, 48, 103, 0.30) 100%)",
      }}
    />
  );
};
