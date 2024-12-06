import Image from "next/image";
import Link from "next/link";

type TProduct = {
  product: {
    id: string;
    title: string;
    description: string;
    featuredImage: {
      id: string;
      url: string;
    };
    variants: {
      edges: {
        node: {
          price: {
            amount: string;
            currencyCode: string;
          };
        };
      }[];
    };
  };
};

export default function ProductCard({ product }: TProduct) {
  const link = `/products/${product.id.split("/").pop()}`;

  return (
    <div
      key={product.id}
      className="bg-white border rounded-lg shadow-md overflow-hidden  flex flex-col hover:shadow-lg transition-shadow"
    >
      <Link href={link}>
        <div className="relative w-full aspect-w-1 aspect-h-1 group">
          <Image
            src={product.featuredImage.url}
            alt={product.title}
            fill
            className="absolute object-cover"
          />

          {/* TODO: MAYBE OPEN QUICK VIEW IN MODAL? */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="px-4 py-2 bg-transparent text-white font-bold rounded-md transition border border-white">
              View Product
            </button>
          </div>
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-slate-900 font-bold">
          &#36;{product.variants.edges[0]?.node.price.amount}
        </p>
        <h2 className="text-xl font-semibold text-slate-800 mt-2">
          <Link href={link}>{product.title}</Link>
        </h2>
        <p className="text-slate-600 mt-2 text-sm">{product.description}</p>
        <div className="flex justify-between gap-4 mt-auto">
          <Link
            href={link}
            className="flex-1 text-center mt-4 px-4 py-2 bg-transparent text-slate-700 font-medium rounded-md hover:bg-slate-100 transition border border-slate-500"
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}
