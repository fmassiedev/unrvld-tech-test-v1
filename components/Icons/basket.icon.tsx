import { TIcon } from "./types";

export default function IconBasket({ width = 22, height = 22 }: TIcon) {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m20 10-1.4855 7.4276c-0.1833 0.9163-0.2749 1.3745-0.5141 1.7172-0.211 0.3022-0.5014 0.5402-0.8391 0.6878-0.383 0.1674-0.8502 0.1674-1.7847 0.1674h-6.7532c-0.93447 0-1.4017 0-1.7847-0.1674-0.33772-0.1476-0.62809-0.3856-0.83905-0.6878-0.23923-0.3427-0.33086-0.8009-0.51413-1.7172l-1.4855-7.4276m16 0h-2m2 0h1m-17 0h-1m1 0h2m0 0h12m-12 0 3-6m9 6-3-6m-6 9v3m3-3v3m3-3v3"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
}
