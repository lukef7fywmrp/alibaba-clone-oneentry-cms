import getSession from "@/actions/getSession";
import Image from "next/image";
import banner from "@/app/banner.png";
import CatalogPages from "@/components/CatalogPages";
import CatalogHeader from "@/components/CatalogHeader";
import { Suspense } from "react";

export default async function Home() {
  const session = await getSession();

  return (
    <main className="bg-[#F2F2F2] min-h-screen">
      <Image src={banner} alt="Banner" className="h-[220px] object-cover" />

      <div className="space-y-4 max-w-6xl mx-auto">
        <CatalogHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogPages />
        </Suspense>
      </div>
    </main>
  );
}
