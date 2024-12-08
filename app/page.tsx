import PageTitle from "@/components/PageTitle/PageTitle.component";
import ProductCollectionsList from "@/components/Products/ProductCollectionsList/ProductCollectionsList.component";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <PageTitle title="Homepage" />
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-semibold text-slate-800 mt-12">See our categories</h2>
      </div>
      <ProductCollectionsList />
    </main>
  );
}
