import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getAPI from "@/oneentry";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IPagesEntity } from "oneentry/dist/pages/pagesInterfaces";
import ProductCard from "./ProductCard";

async function CatalogPageCard({ page }: { page: IPagesEntity }) {
  const products = await getAPI().Products.getProductsByPageUrl(
    page.pageUrl,
    undefined,
    "en_US",
    { limit: 3 }
  );

  return (
    <Link href={`/detail/${page.pageUrl}`}>
      <Card className="border-none shadow-none rounded-[8px]">
        <CardHeader className="p-5 flex-row justify-between space-y-0">
          <CardTitle className="font-bold text-xl">
            {page.localizeInfos?.title}
          </CardTitle>
          <ArrowRight className="w-6 h-6" />
        </CardHeader>
        <CardContent className="flex items-center gap-2.5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </CardContent>
      </Card>
    </Link>
  );
}

export default CatalogPageCard;
