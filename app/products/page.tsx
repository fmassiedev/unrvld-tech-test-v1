import PageTitle from "@/components/PageTitle/PageTitle.component";
import ProductFilter from "@/components/Product/ProductFilter/ProductFilter.component";
import ProductList from "@/components/Product/ProductList/ProductList.component";
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
