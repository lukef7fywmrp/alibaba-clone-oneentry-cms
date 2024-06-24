import getAPI from "@/oneentry";
import CatalogPageCard from "./CatalogPageCard";

async function CatalogPages() {
  const pages = await getAPI().Pages.getRootPages("en_US");
  // FIXME: Below API is returning 405 Method Not Allowed
  // const pages = await api.Pages.getCatalogPages("en_US");
  const filteredPages = pages.filter((page) => page.type === "forCatalogPages");

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
      {filteredPages.map((page) => (
        <CatalogPageCard key={page.id} page={page} />
      ))}
    </section>
  );
}

export default CatalogPages;
