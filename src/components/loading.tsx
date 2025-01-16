import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const Circle = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("h-[14px] w-[14px] rounded-full bg-roam-700", className)}
      {...props}
    />
  );
};

export const Loading = () => {
  return (
    <div className="flex gap-2">
      <Circle className="animate-bounce-loading" />
      <Circle className="animate-bounce-loading [animation-delay:300ms]" />
      <Circle className="animate-bounce-loading [animation-delay:600ms]" />
    </div>
  );
};
