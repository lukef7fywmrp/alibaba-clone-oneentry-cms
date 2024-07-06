import { getApiInstance } from "@/oneentry";
import CatalogPageLinkCard from "./CatalogPageLinkCard";

async function CatalogPageGrid() {
  const apiInstance = await getApiInstance();
  const pages = await apiInstance?.Pages.getRootPages("en_US");
  const filteredPages = pages?.filter(
    (page) => page.type === "forCatalogPages"
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 pb-12">
      {filteredPages?.map((page) => (
        <CatalogPageLinkCard key={page.id} page={page} />
      ))}
    </section>
  );
}

export default CatalogPageGrid;
