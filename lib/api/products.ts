import { TCollection, TCollections, TProduct, TProducts } from "@/components/Products/types";

export async function fetchFromMockShopAPI(query: string) {
  const url = "https://mock.shop/api";
  const params = new URLSearchParams({ query });

  const response = await fetch(`${url}?${params.toString()}`, {
    method: "GET",
    headers: {
      "Cache-Control": "public, max-age=600", // Cache for 10 minutes
    },
    // next: { revalidate: 60 }, // Could revalidate every 60 seconds if needed
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  return response.json();
}

export async function getProducts(first: number = 10): Promise<{ data: { products: TProducts } }> {
  const query = `
    {
      products(first: ${first}) {
        edges {
          node {
            id
            title
            description
            featuredImage {
              id
              url
            }
            variants(first: 3) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  return fetchFromMockShopAPI(query);
}

export async function getProduct(productId: string): Promise<{ data: { product: TProduct } }> {
  const query = `
    query {
      product(id: "gid://shopify/Product/${productId}") {
        id
        title
        description
        featuredImage {
          id
          url
        }
        variants(first: 3) {
          edges {
            cursor
            node {
              id
              title
              image {
                url
              }
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  return fetchFromMockShopAPI(query);
}

export async function getCollections(
  first: number = 10
): Promise<{ data: { collections: TCollections } }> {
  const query = `
    {
      collections(first: ${first}) {
        edges {
          cursor
          node {
            id
            handle
            title
            description
            image {
              id
              url
            }
          }
        }
      }
    }
  `;

  return fetchFromMockShopAPI(query);
}

export async function getCollection(
  collectionId: string
): Promise<{ data: { collection: TCollection } }> {
  const query = `
    {
      collection(id: "gid://shopify/Collection/${collectionId}") {
        id
        handle
        title
        description
        image {
          id
          url
        }
      }
    }
  `;

  return fetchFromMockShopAPI(query);
}

export async function getCollectionWithProducts(
  collectionId: string
): Promise<{ data: { collection: TCollection } }> {
  const query = `
    {
      collection(id: "gid://shopify/Collection/${collectionId}") {
        id
        handle
        title
        description
        image {
          id
          url
        }
        products(first: 10) {
          edges {
            node {
              id
              title
              description
              featuredImage {
                id
                url
              }
              variants(first: 3) {
                edges {
                  node {
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  return fetchFromMockShopAPI(query);
}
