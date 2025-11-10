"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const testimonials = [
  {
    id: 1,
    name: "Marin Medak",
    text: `Apsolutna preporuka za Karla Bana! Još 2015. godine, Karlu sam povjerio izradu nekoliko noževa po mjeri. Danas, deset godina kasnije, ti su noževi još uvijek u aktivnoj upotrebi i prezadovoljan sam s njima.

Kvaliteta izrade, oštrica i samog materijala je nevjerojatna — izdržali su test vremena i intenzivno korištenje bez ikakvog kompromisa. Svaki nož bio je napravljen točno prema mojim potrebama, a ono što Karla izdvaja je njegova sposobnost da te potrebe pretoči u savršen format noža.
Ako tražite kovača koji spaja vrhunsko majstorstvo, izdržljivost i estetski užitak, Karl Ban je prava adresa.`,
    image: "/assets/Image/testimonials-img.png",
    thumbnails: [
      "/assets/Image/testimonials-img-1.png",
      "/assets/Image/testimonials-img-2.png",
    ],
  },
  {
    id: 2,
    name: "Petar Novak",
    text: `Karlovi noževi su čudo! Svaki put kad ih koristim, osjećam razliku u preciznosti i balansu. Nevjerojatno iskustvo.`,
    image: "/assets/Image/testimonials-img.png",
    thumbnails: [
      "/assets/Image/testimonials-img-2.png",
      "/assets/Image/testimonials-img-1.png",
    ],
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="container-xl mx-auto px-4 py-16 relative">
      <h3 className="text-[#FF7020] text-[16px] font-medium mb-1 border-b border-gray-200 pb-2 inline-block w-full">
        Što drugi kažu o Karlu
      </h3>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // ✅ attach buttons before swiper initializes
            // (fixes “arrows not working” issue)
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex + 1)}
          className="mt-10"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT SIDE */}
                <div>
                  <p className="text-[#4F4640] text-[16px] leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                  <p className="mt-6 font-semibold text-[#4F4640]">
                    {item.name}
                  </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex flex-col items-center justify-center">
                  <BiSolidQuoteAltLeft
                    size={45}
                    className="absolute top-16 md:left-80 left-64 -translate-x-1/2 text-gray-200"
                  />

                  <div className="flex items-end justify-center gap-4 flex-wrap">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-[300px] object-cover rounded-2xl shadow-md"
                      />
                    </div>

                    <div className="gap-4 flex">
                      {item.thumbnails.map((thumb, index) => (
                        <img
                          key={index}
                          src={thumb}
                          alt="thumb"
                          className="w-[120px] h-[120px] object-cover rounded-xl opacity-70 hover:opacity-100 transition-all duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            ref={prevRef}
            className="flex items-center justify-center md:w-40 w-24 h-10 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            ref={nextRef}
            className="flex items-center justify-center md:w-40 w-24 h-10 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination Index */}
        <span className="text-[#636B78] text-[11px] font-medium flex justify-center italic mt-3">
          {activeIndex} / {testimonials.length}
        </span>
      </div>
    </section>
  );
};

export default Testimonials;
