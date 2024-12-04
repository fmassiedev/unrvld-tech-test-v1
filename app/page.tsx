import ProductList from "@/components/Product/ProductList/ProductList.component";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div>Homepage</div>
      <ProductList />
    </main>
  );
}
