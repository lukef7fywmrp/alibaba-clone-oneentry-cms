import { getApiInstance } from "@/oneentry";
import ProductCard from "./ProductCard";

async function ProductList({ slug }: { slug: string }) {
  const apiInstance = await getApiInstance();
  const products = await apiInstance?.Products.getProductsByPageUrl(slug);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center items-center">
      {products?.map((product, i) => (
        <ProductCard key={product.id} index={i} product={product} detailPage />
      ))}
    </section>
  );
}

export default ProductList;
