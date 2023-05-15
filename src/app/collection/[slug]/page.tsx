import Collection from "@/components/Collection";

const CollectionPage = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  return <Collection />;
};

export default CollectionPage;
