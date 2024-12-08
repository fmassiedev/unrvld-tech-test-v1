import PageTitle from "@/components/PageTitle/PageTitle.component";
import ProductFilter from "@/components/Products/ProductFilter/ProductFilter.component";
import ProductList from "@/components/Products/ProductList/ProductList.component";
import React from "react";

export default async function ProductListingPage() {
  return (
    <main>
      <PageTitle title="Products" />
      <ProductFilter />
      <ProductList />
    </main>
  );
}
