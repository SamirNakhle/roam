import { ComponentProps } from "react";

export const X = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
      {...props}
    >
      <path
        d="M2 27.5L27 2.5M2 2.5L27 27.5"
        stroke="#F05A5A"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
