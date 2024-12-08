import React from "react";
import ProductCard from "../ProductCard/ProductCard.component";
import { TProduct } from "../types";
import { getProducts } from "@/lib/api/products";

export default async function ProductList() {
  const productsData = await getProducts();
  const products: TProduct[] = productsData.data.products.edges.map(
    (edge: { node: TProduct }) => edge.node
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
