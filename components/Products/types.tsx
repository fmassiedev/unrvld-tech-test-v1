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
  edges: Array<{
    node: TProduct;
  }>;
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
  products: TProducts;
};

export type TCollections = {
  edges: Array<{
    cursor: string;
    node: TCollection;
  }>;
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
