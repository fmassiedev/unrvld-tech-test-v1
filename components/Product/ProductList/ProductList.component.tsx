import { DUMMY_DATA } from "@/lib/dummyData";
import React from "react";
import ProductCard from "../ProductCard/ProductCard.component";

export default function ProductList() {
  const products = DUMMY_DATA.data.products.edges.map((edge) => edge.node);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, i) => {
          return <ProductCard product={product} key={i} />;
        })}
      </div>
    </div>
  );
}
