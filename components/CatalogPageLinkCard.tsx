import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IPagesEntity } from "oneentry/dist/pages/pagesInterfaces";
import ProductCard from "./ProductCard";
import { getApiInstance } from "@/oneentry";

async function CatalogPageLinkCard({ page }: { page: IPagesEntity }) {
  const apiInstance = await getApiInstance();
  const products = await apiInstance?.Products.getProductsByPageUrl(
    page.pageUrl,
    undefined,
    "en_US",
    { limit: 3 }
  );

  return (
    <Link href={`/detail/${page.pageUrl}`}>
      <Card className="border-none shadow-none rounded-[8px] bg-[#F8F8F8]">
        <CardHeader className="p-5 flex-row justify-between space-y-0">
          <CardTitle className="font-bold text-base text-[#222222]">
            {page.localizeInfos?.title}
          </CardTitle>
          <ArrowRight className="w-5 h-5" />
        </CardHeader>
        <CardContent className="flex items-center gap-2.5">
          {products?.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </CardContent>
      </Card>
    </Link>
  );
}

export default CatalogPageLinkCard;
