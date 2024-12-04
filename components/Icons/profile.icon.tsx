import { TIcon } from "./types";

export default function IconProfile({ width = 22, height = 22 }: TIcon) {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12.12 12.78c-0.07-0.01-0.16-0.01-0.24 0-1.76-0.06-3.16-1.5-3.16-3.27 0-1.81 1.46-3.28 3.28-3.28 1.81 0 3.28 1.47 3.28 3.28-0.01 1.77-1.4 3.21-3.16 3.27z"
        stroke="#292D32"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        d="m18.74 19.38c-1.78 1.63-4.14 2.62-6.74 2.62-2.6 0-4.96-0.99-6.74-2.62 0.1-0.94 0.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07 0.72 1.67 1.64 1.77 2.58z"
        stroke="#292D32"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
      <path
        d="m12 22c5.5228 0 10-4.4772 10-10 0-5.5228-4.4772-10-10-10-5.5228 0-10 4.4772-10 10 0 5.5228 4.4772 10 10 10z"
        stroke="#292D32"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </svg>
  );
}
