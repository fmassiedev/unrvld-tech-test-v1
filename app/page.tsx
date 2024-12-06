import PageTitle from "@/components/PageTitle/PageTitle.component";
import ProductList from "@/components/Product/ProductList/ProductList.component";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <PageTitle title="Homepage" />
      <ProductList />
    </main>
  );
}
