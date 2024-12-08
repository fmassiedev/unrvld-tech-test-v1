"use client";

import { useRouter } from "next/navigation";

export default function PageTitle({
  title,
  hasBackButton = false,
}: {
  title: string;
  hasBackButton?: boolean;
}) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="container mx-auto p-4">
      {hasBackButton && (
        <button
          onClick={handleBackClick}
          className="flex-1 text-center mt-4 px-4 py-2 bg-transparent text-slate-700 font-medium rounded-md hover:bg-slate-100 transition border border-slate-500"
        >
          Back
        </button>
      )}
      <h1 className="text-4xl font-semibold text-slate-800 text-center my-12">{title}</h1>
    </div>
  );
}
