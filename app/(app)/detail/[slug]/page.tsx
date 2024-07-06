import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";

function DetailPage({ params: { slug } }: { params: { slug: string } }) {
  return (
    <main className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="font-bold text-[28px] text-[#222]">
        Top-ranking Products
      </h1>
      {/* <Banner /> */}
      <ProductList slug={slug} />
    </main>
  );
}

export default DetailPage;
