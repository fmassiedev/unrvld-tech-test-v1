"use client";

import { getCollections } from "@/lib/api/products";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { TCollection } from "../types";

export default function ProductFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [collections, setCollections] = useState<TCollection[]>([]);
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const collectionData = await getCollections();
        setCollections(
          collectionData.data.collections.edges.map((edge: { node: TCollection }) => edge.node)
        );
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    if (value === "") {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="container mx-auto p-4 mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="collectionId"
          id="collectionId"
          className="py-2 px-4 rounded text-xs font-medium bg-slate-100"
          onChange={handleFilterChange}
        >
          <option value="">All Collections</option>
          {collections &&
            collections.map((collection) => (
              <option key={collection.id.split("/").pop()} value={collection.id.split("/").pop()}>
                {collection.title}
              </option>
            ))}
        </select>
      </div>
      {/* TODO: Ran out of time to implement sort */}
      <select
        name="sort"
        id="sort"
        className="py-2 px-4 rounded text-xs font-medium bg-white ring-1 ring-slate-400"
        onChange={handleFilterChange}
      >
        <option>Sort By</option>
        <option value="asc price">Price (low to high)</option>
        <option value="desc price">Price (high to low)</option>
        <option value="asc lastUpdated">Newest</option>
        <option value="desc lastUpdated">Oldest</option>
      </select>
    </div>
  );
}
