import { ComponentProps } from "react";

export const Check = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="24"
      viewBox="0 0 27 24"
      fill="none"
      {...props}
    >
      <path
        d="M2.94434 12.9032L11.3888 21.3477L24.0554 2.34766"
        stroke="#7C16EE"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
