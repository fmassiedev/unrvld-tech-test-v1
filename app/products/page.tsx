import ProductFilter from "@/components/Product/ProductFilter/ProductFilter.component";
import ProductList from "@/components/Product/ProductList/ProductList.component";
import React from "react";

export default async function ProductListingPage() {
  return (
    <div>
      <div>Product Listing Page</div>
      <div className="dgbfv">
        <ProductFilter />
        <ProductList />
      </div>
    </div>
  );
}
