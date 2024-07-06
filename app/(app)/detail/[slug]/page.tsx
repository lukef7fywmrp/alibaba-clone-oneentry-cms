import PopularProductBanner from "@/components/PopularProductBanner";
import ProductGrid from "@/components/ProductGrid";

function DetailPage({ params: { slug } }: { params: { slug: string } }) {
  return (
    <main className="max-w-7xl mx-auto py-12 px-6 space-y-8">
      <h1 className="font-bold text-[28px] text-[#222]">Top Ranking</h1>
      <PopularProductBanner slug={slug} />
      <ProductGrid slug={slug} />
    </main>
  );
}

export default DetailPage;
