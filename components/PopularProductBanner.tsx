import { getApiInstance } from "@/oneentry";
import { Button } from "./ui/button";

async function PopularProductBanner({ slug }: { slug: string }) {
  const apiInstance = await getApiInstance();
  const page = await apiInstance?.Pages.getPageByUrl(slug);

  return (
    <div className="bg-[#ffc7a1] rounded-[12px] py-10 px-[60px] flex flex-col justify-center">
      <div className="max-w-[750px]">
        <p className="text-sm text-[#222]">Most popular</p>
        <p className="text-[32px] mt-5 text-black font-bold">
          {page?.localizeInfos?.title}
        </p>

        <p className="leading-[22px] mt-5">
          Ranked based on a comprehensive analysis of buyers' interactions
          including communication, inquiries, and orders in the past 90 days.
          Updated daily.
        </p>

        <Button
          size={"lg"}
          variant={"outline"}
          className="bg-transparent mt-5 rounded-[24px] text-base font-semibold border-[#222] hover:bg-[#F1BD99] px-6 h-[48px]"
        >
          More Rankings
        </Button>
      </div>
    </div>
  );
}

export default PopularProductBanner;
