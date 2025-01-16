import { PortableText, PortableTextBlock } from "@portabletext/react";

import { cn } from "@/lib/utils";

export const Heading = ({
  value,
  className,
}: {
  value: PortableTextBlock[];
  className?: string;
}) => (
  <PortableText
    value={value}
    components={{
      block: {
        normal: ({ children }) => (
          <h2
            className={cn(
              "center [&_strong]:purple-text text-center text-[40px] font-bold text-white sm:text-left sm:text-[64px] [&_strong]:font-black",
              className,
            )}
          >
            {children}
          </h2>
        ),
      },
    }}
  />
);
