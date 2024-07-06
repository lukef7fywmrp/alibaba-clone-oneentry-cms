import banner from "@/app/banner.png";
import CatalogPageGrid from "@/components/CatalogPageGrid";
import SpinnerLoader from "@/components/StaggeredFadeLoader";
import TabSelector from "@/components/TabSelector";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="bg-white min-h-screen space-y-8">
      <Image src={banner} alt="Banner" className="h-[220px] object-cover" />

      <div className="space-y-4 max-w-6xl mx-auto">
        <TabSelector />
        <Suspense fallback={<SpinnerLoader />}>
          <CatalogPageGrid />
        </Suspense>
      </div>
    </main>
  );
}
