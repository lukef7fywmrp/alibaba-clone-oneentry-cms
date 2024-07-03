import ProductSummaryCard from "@/components/ProductSummaryCard";
import { Product } from "@/lib/definitions";
import api from "@/oneentry";
import { Star } from "lucide-react";
import Image from "next/image";

async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = (await api.Products.getProductById(
    parseInt(id)
  )) as unknown as Product;

  const productTitle = product.attributeValues?.producttitle.value.htmlValue;
  const productPrice = product.attributeValues?.productprice.value;
  const productImage = product.attributeValues?.productimage.value;
  const productDescription = product.attributeValues?.productdescription.value;
  const productSubtitle = product.attributeValues?.productsubtitle.value;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 p-5 sm:p-10 gap-10 lg:gap-20">
      <div className="col-span-2 lg:col-span-3 max-w-[800px]">
        <div
          className="text-[#222] text-[18px] font-semibold"
          dangerouslySetInnerHTML={{
            __html: productTitle!,
          }}
        />
        <div className="hidden sm:flex items-center gap-x-1 text-sm text-[#222] mt-1.5">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} strokeWidth={0} fill="#f60" size={16} />
            ))}
            <span className="mx-1">5.0</span>
            <span className="underline cursor-pointer">(1 review)</span>
          </div>
          <div>
            · <span>2 sold</span>
          </div>
          <div>
            · <span className="font-semibold">#{id}</span>
            <span className="underline cursor-pointer ml-1">
              Most popular in{" "}
              {product.attributeSetIdentifier
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </span>
          </div>
        </div>

        {productImage && (
          <div className="bg-black/5 rounded-[12px] flex items-center justify-center mt-8">
            <Image
              src={productImage.downloadLink}
              alt={productImage.filename}
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        )}
      </div>

      <ProductSummaryCard
        item={{
          id: product.id,
          name: productTitle,
          description: productDescription?.htmlValue,
          price: productPrice,
          image: productImage?.downloadLink,
          quantity: 1,
        }}
      />
    </div>
  );
}

export default ProductPage;
