import { Button } from "@/components/ui/button";
import { Eye, Star } from "lucide-react";

export default function ProductHeader() {
  return (
    <div className="w-full border-b border-gray-200 pb-6">
      {/* Title and View Count */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-3xl font-semibold text-[#3B302A]">
          Petty Classic 170mm
        </h1>
        <div className="flex items-center text-sm text-gray-500">
          <Eye className="w-4 h-4 mr-1" />
          <span>
            <strong className="text-[#3B302A]">1,4k</strong> Viewed
          </span>
        </div>
      </div>

      {/* Price + Rating */}
      <div className="flex items-center justify-between mt-4 border-b pb-6">
        <div>
          <div className="md:text-[22px] sm:text-[20px] text-[18px] font-bold text-[#FF7020]">
            EUR 220,00
          </div>
          <div className="text-xs italic text-[#4F4640]">25% VAT Included</div>
        </div>

        <div className="text-right">
          <div className="flex items-baseline justify-end gap-1">
            <span className="text-[#FF7020] md:text-4xl sm:text-3xl text-2xl font-bold">5.0</span>
            <span className="text-gray-500">/5</span>
          </div>
          <div className="flex justify-end mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-[#FF7020] fill-[#FF7020]"
              />
            ))}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            223 Reviews from Petty Owners
          </div>
        </div>
      </div>

      {/* Add To Bag */}

      <div className="md:flex sm:flex justify-between grid grid-cols-[40%_60%] w-full pt-1 items-center">
      <div className="mt-8 mb-6">
        <Button className="bg-[#FF7020] hover:bg-[#e25f15] text-white md:px-20 py-3 text-[10px] px-10 rounded-md md:text-[15px] md:py-4 font-semibold shadow-none" 
        >
          Add To Bag
        </Button>
      </div>

      {/* Shipping Info */}
      <div className="md:text-sm text-[12px] text-gray-600 leading-relaxed  text-end">
        <span className="text-[#FF7020] italic font-medium">
          Available immediately!
        </span>
        <br />
        Free{" "}
        <span className="text-[#FF7020] font-medium">Shipping</span> within
        Croatia
        <br />
        Delivery time: <strong>1–5 working days</strong>{" "}
        <span className="text-xs text-gray-500">(Shipments may differ)</span>
      </div>

</div>

    </div>
  );
}
