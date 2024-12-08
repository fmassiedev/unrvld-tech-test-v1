import React from "react";
import ProductCard from "./ProductCard.component";
import { TCollection, TProduct } from "./types";
import { getCollectionWithProducts, getProducts } from "@/lib/api/products";

export default async function ProductList({
  searchParams,
}: {
  searchParams: { collectionId?: string };
}) {
  const { collectionId } = await searchParams;

  let products: TProduct[] = [];
  let collection: TCollection | null = null;

  // If a collectionId is provided, get the collection data and its products
  if (collectionId) {
    const collectionData = await getCollectionWithProducts(collectionId);
    collection = collectionData.data.collection;
    products = collection.products.edges.map((edge) => edge.node);
  } else {
    // Else, get all products
    const productsData = await getProducts();
    products = productsData.data.products.edges.map((edge) => edge.node);
  }

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
