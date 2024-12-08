export type TProduct = {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    id: string;
    url: string;
  };
  variants: {
    edges: Array<{
      node: TProductVariant;
    }>;
  };
};

export type TProducts = {
  products: TProduct[];
};

export type TCollection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: {
    id: string;
    url: string;
  };
};

export type TCollections = {
  collections: TCollection[];
};

export type TProductVariant = {
  id: string;
  title: string;
  image?: { url: string };
  price: {
    amount: string;
    currencyCode: string;
  };
};
