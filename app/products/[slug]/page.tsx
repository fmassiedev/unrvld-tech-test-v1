import PageTitle from "@/components/PageTitle/PageTitle.component";
import ProductAddToCart from "@/components/Product/ProductAddToCart/ProductAddToCart.component";
import ProductGallery from "@/components/Product/ProductGallery/ProductGallery.component";

export default async function ProductDetailsPage() {
  return (
    <main>
      <PageTitle title="Single Product" />

      <div className="container mx-auto max-w-[1200px] p-4 relative flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductGallery />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl text-slate-800 font-bold">Product Name</h1>
          <p className="text-slate-500">
            Product Description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            impedit itaque cum ipsum ullam, debitis possimus, cumque obcaecati, deleniti sequi
            reprehenderit voluptates eum sed rem consectetur aliquam quis modi fugiat?
          </p>
          <div className="h-[2px] bg-slate-100" />
          <h2 className="font-medium text-2xl">Product Price</h2>
          <div className="h-[2px] bg-slate-100" />
          Something with Variants?
          <div className="h-[2px] bg-slate-100" />
          <ProductAddToCart />
        </div>
      </div>
    </main>
  );
}
