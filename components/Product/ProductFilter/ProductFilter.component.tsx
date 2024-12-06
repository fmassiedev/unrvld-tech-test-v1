"use client";

export default function ProductFilter() {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    // TODO: All filtering
    console.log(e);
  };

  return (
    <div className="container mx-auto p-4 mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="color"
          id="color"
          className="py-2 px-4 rounded text-xs font-medium bg-slate-100"
          onChange={handleFilterChange}
        >
          <option>Color</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
      <div className="">
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
    </div>
  );
}
