"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutKarlo() {
  const images = [
    "/assets/Image/about-img2.png",
    "/assets/Image/about-img3.png",
    "/assets/Image/about-img2.png",
    "/assets/Image/about-img3.png",
  ];

  const paginationRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-white py-20 mt-6">
      <div className="max-w-7xl md:px-0 px-6 overflow-hidden ms-auto grid grid-cols-1 md:grid-cols-[30%_70%] gap-12 items-center ">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="md:text-3xl text-2xl font-semibold text-zinc-900">O majstoru</h2>
          <p className="text-zinc-700 md:text-[22px] text-[20px]">
            Po struci inženjer strojarstva, Karlo Ban već više od deset godina
            slijedi svoju strast prema čeliku i kovačkom zanatu.
          </p>
          <p className="text-zinc-700 text-[16px] leading-relaxed">
            U zagorskom selu Jelenjak kraj Desinića, Karlo u svojoj kovačnici
            svaki nož izrađuje od početka do kraja ručno, spajajući tehničko
            znanje i umjetničku preciznost. Kao istaknuti hrvatski majstor
            ("bladesmith"), u malim je serijama i po narudžbi iskovao preko 3000
            noževa.
          </p>
          <p className="text-zinc-700 text-[16px] leading-relaxed">
            Njegovi kuhinjski i lovački noževi često se rade prema japanskim i
            skandinavskim principima: troslojno, jednostavne konstrukcije,
            kvalitetni visokougljični čelici bez prisustva nikla, uz majstorsko
            kaljenje i popuštanje čelika.
          </p>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="relative w-full">
         <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={24}
  slidesPerView={2}
  loop={true}
  speed={700}
  onInit={(swiper) => {
    // @ts-ignore
    swiper.params.navigation.prevEl = prevRef.current;
    // @ts-ignore
    swiper.params.navigation.nextEl = nextRef.current;
    // @ts-ignore
    swiper.params.pagination.el = paginationRef.current;

    swiper.navigation.init();
    swiper.navigation.update();
    swiper.pagination.init();
    swiper.pagination.update();
  }}
  pagination={{
    type: "fraction",
  }}
  breakpoints={{
    0: {
      slidesPerView: 1, // 👈 mobile: 1 slide
    },
    768: {
      slidesPerView: 2, // 👈 tablet & up: 2 slides
    },
  }}
  className="rounded-xl swiper-about"
>
  {images.map((src, index) => (
    <SwiperSlide key={index}>
      <div className="overflow-hidden rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-500 bg-white">
        <img
          src={src}
          alt={`Slide ${index + 1}`}
          className="w-full h-[380px] object-cover rounded-2xl"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>


          {/* ✅ Bottom Controls */}
          <div className="flex flex-col items-center justify-center mt-8 gap-3">
            <div className="flex items-center gap-6">
              <button
                ref={prevRef}
                className="flex items-center justify-center md:w-36 w-24 h-10 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300"
              >

                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                ref={nextRef}
                className="flex items-center justify-center md:w-36 w-24 h-10 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Pagination fraction below arrows */}
            <div
              ref={paginationRef}
              className="text-[13px] text-gray-600 font-medium italic text-center"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
