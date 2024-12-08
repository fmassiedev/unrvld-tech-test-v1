export type TProduct = {
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
