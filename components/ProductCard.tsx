import Image from "next/image";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";
import React from "react";
import gold from "@/app/gold.png";
import silver from "@/app/silver.png";
import bronze from "@/app/bronze.png";
import silverLight from "@/app/silverLight.png";
import { cn } from "@/lib/utils";
import Link from "next/link";

function ProductCard({
  product,
  index,
  detailPage,
}: {
  product: IProductsEntity;
  index: number;
  detailPage?: boolean;
}) {
  const renderContent = () => {
    return (
      <>
        <div
          className={cn(
            "bg-black/[0.04] z-10 relative overflow-hidden",
            detailPage
              ? "rounded-[12px] w-[230.4px] h-[230.4px]"
              : "rounded-[8px]  h-[110px] w-[110px]"
          )}
        >
          <Image
            src={product.attributeValues?.productimage?.value?.downloadLink}
            alt={product.localizeInfos?.title}
            fill
            className={cn("object-cover mix-blend-multiply p-0.5")}
          />
          <div className="absolute top-0 left-0 w-[32px] h-[32px] flex items-center justify-center">
            <Image
              src={
                index === 0
                  ? gold
                  : index === 1
                  ? silver
                  : index === 2
                  ? bronze
                  : silverLight
              }
              alt="Rank"
              width={32}
              height={32}
              className="object-cover absolute w-full h-full"
            />
            <span
              className={cn(
                "z-10 text-[13px] font-bold -mt-1",
                index > 2 ? "text-[#222]" : "text-white"
              )}
            >
              #{index + 1}
            </span>
          </div>
        </div>
        {detailPage && (
          <p className="text-sm text-[#222] line-clamp-2 my-2">
            Best sell Smartphone for S23 Ultra+ 5G cellphones unlocked original
            Android 12 16GB+1TB mobile phones
          </p>
        )}
        <p
          className={cn(
            "text-[#222] font-bold",
            detailPage ? "text-xl" : "text-sm"
          )}
        >
          AED {product.attributeValues?.productprice?.value}{" "}
        </p>
        <p className="text-sm">Min. order: 1 piece</p>
      </>
    );
  };

  return detailPage ? (
    <Link href={`/product/${product.id}`}>{renderContent()}</Link>
  ) : (
    <div className="space-y-2 mx-auto">{renderContent()}</div>
  );
}

export default ProductCard;
