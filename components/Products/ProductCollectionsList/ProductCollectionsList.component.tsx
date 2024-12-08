import { getCollections } from "@/lib/api/products";
import { TCollection } from "../types";
import CollectionCard from "../ProductCollectionCard/ProductCollectionCard.component";

export default async function ProductCollectionsList() {
  const collectionsData = await getCollections();
  const collections: TCollection[] = collectionsData.data.collections.edges.map(
    (edge: { node: TCollection }) => edge.node
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((collection) => {
          return <CollectionCard collection={collection} key={collection.id} />;
        })}
      </div>
    </div>
  );
}
