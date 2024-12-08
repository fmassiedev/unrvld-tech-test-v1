import PageTitle from "@/components/PageTitle/PageTitle.component";
import ProductFilter from "@/components/Products/ProductFilter.component";
import ProductList from "@/components/Products/ProductList.component";
import React from "react";

export default async function ProductListingPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <main>
      <PageTitle title="Products" hasBackButton={true} />
      <ProductFilter />
      <ProductList searchParams={searchParams} />
    </main>
  );
}
