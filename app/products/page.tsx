import PageTitle from "@/components/PageTitle/PageTitle.component";
import ProductFilter from "@/components/Products/ProductFilter.component";
import ProductList from "@/components/Products/ProductList.component";
import React from "react";

export default async function ProductListingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;

  return (
    <main>
      <PageTitle title="Products" hasBackButton={true} />
      <ProductFilter />
      <ProductList searchParams={params} />
    </main>
  );
}
