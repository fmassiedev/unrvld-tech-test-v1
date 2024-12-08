import PageTitle from "@/components/PageTitle/PageTitle.component";
import ProductAddToCart from "@/components/Products/ProductAddToCart/ProductAddToCart.component";
import ProductGallery from "@/components/Products/ProductGallery/ProductGallery.component";
import { getProduct } from "@/lib/api/products";

export default async function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;

  try {
    const productData = await getProduct(slug);

    if (!productData || !productData.data || !productData.data.product) {
      throw new Error("Product not found");
    }

    const product = productData.data.product;
    const variants = product.variants.edges.map((edge) => edge.node);

    return (
      <main>
        <PageTitle title="Single Product" />

        <div className="container mx-auto max-w-[1200px] p-4 relative flex flex-col lg:flex-row gap-16">
          {product.featuredImage && (
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
              <ProductGallery images={product.featuredImage} />
            </div>
          )}

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl text-slate-800 font-bold">{product.title}</h1>
            <p className="text-slate-500">{product.description}</p>
            <div className="h-[2px] bg-slate-100" />
            {/* TODO: For now using price of first variant */}
            {variants.length > 0 && (
              <>
                <h2 className="font-medium text-2xl">
                  Price: {variants[0]?.price.amount} {variants[0]?.price.currencyCode}
                </h2>
                <div className="h-[2px] bg-slate-100" />
              </>
            )}

            {/* TODO: State management and dynamic price updating depending on variant selection */}
            {variants.length > 0 && (
              <div>
                <h3 className="font-medium text-lg">Select Variant</h3>
                <div className="flex gap-4">
                  {variants.map((variant) => (
                    <button
                      key={variant.id}
                      className="flex-1 px-4 py-2 rounded border text-sm hover:bg-slate-100"
                    >
                      {variant.title} <br /> {variant.price.amount} {variant.price.currencyCode}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="h-[2px] bg-slate-100" />
            <ProductAddToCart />
          </div>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main>
        <PageTitle title="Error" />
        <div className="container mx-auto p-4">
          <h2 className="text-xl font-bold text-red-500">Error: Product not found</h2>
          <p className="text-slate-600">
            The product you are looking for does not exist or has been removed.
          </p>
        </div>
      </main>
    );
  }
}
