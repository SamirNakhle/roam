import { ComponentProps } from "react";

export const Facebook = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_2595_108)">
        <path
          d="M30.8271 14.9739C30.8271 6.83131 23.9262 0.230469 15.4136 0.230469C6.90088 0.230469 0 6.83131 0 14.9739C0 22.3326 5.63648 28.4321 13.0052 29.5382V19.2356H9.09159V14.9739H13.0052V11.7257C13.0052 8.03065 15.3064 5.98961 18.8271 5.98961C20.513 5.98961 22.2774 6.27757 22.2774 6.27757V9.90582H20.3338C18.4192 9.90582 17.8219 11.0424 17.8219 12.2095V14.9739H22.0968L21.4134 19.2356H17.8219V29.5382C25.1906 28.4321 30.8271 22.3326 30.8271 14.9739Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2595_108">
          <rect
            width="30.8271"
            height="29.4868"
            fill="white"
            transform="translate(0 0.230469)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
