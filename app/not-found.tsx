import PageTitle from "@/components/PageTitle/PageTitle.component";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <PageTitle title="Not Found" />
      <div className="container mx-auto p-4">
        <h3 className="text-4xl font-semibold text-slate-800 mt-12 mb-8">
          Oops! Couldn&#39;t find the page!
        </h3>
        <Link href="/">Back to Home</Link>
      </div>
    </main>
  );
}
