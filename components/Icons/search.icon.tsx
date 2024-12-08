import { TIcon } from "./types";

export default function IconSearch({ width = 22, height = 22 }: TIcon) {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m14.954 14.946 6.0464 6.0542m-4-11c0 3.866-3.134 7-7 7-3.866 0-7-3.134-7-7 0-3.866 3.134-7 7-7 3.866 0 7 3.134 7 7z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
