import Image from "next/image";
import Link from "next/link";
import { TCollection } from "../types";

type CollectionCardProps = {
  collection: TCollection;
};

export default function CollectionCard({ collection }: CollectionCardProps) {
  const link = {
    pathname: "/products",
    query: { collectionId: collection.id.split("/").pop() || null },
  };

  return (
    <div
      key={collection.id}
      className="bg-white border rounded-lg shadow-md overflow-hidden  flex flex-col hover:shadow-lg transition-shadow"
    >
      <Link href={link}>
        <div className="relative w-full aspect-w-1 aspect-h-1 group">
          <Image
            src={collection.image.url}
            alt={collection.title}
            fill
            sizes="(max-width: 640px) 100vw, 
              (max-width: 1024px) 50vw, 
              25vw"
            className="absolute object-cover"
          />

          {/* TODO: MAYBE OPEN QUICK VIEW IN MODAL? */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="px-4 py-2 bg-transparent text-white font-bold rounded-md transition border border-white">
              View Collection
            </button>
          </div>
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-semibold text-slate-800 mt-2">
          <Link href={link}>{collection.title}</Link>
        </h2>
        <p className="text-slate-600 mt-2 text-sm">{collection.description}</p>
        <div className="flex justify-between gap-4 mt-auto">
          <Link
            href={link}
            className="flex-1 text-center mt-4 px-4 py-2 bg-transparent text-slate-700 font-medium rounded-md hover:bg-slate-100 transition border border-slate-500"
          >
            View Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
