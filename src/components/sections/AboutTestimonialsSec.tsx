"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavigationOptions } from "swiper/types";

const testimonials = [
  {
    id: 1,
    name: "Marin Medak, Vlasnik restorana Ružmarin, Zagreb",
    text: `Još 2015. godine, Karlu sam  povjerio izradu nekoliko noževa po mjeri. Danas, deset godina kasnije, ti su noževi još uvijek u aktivnoj upotrebi, kvaliteta izrade, oštrica i samog materijala je nevjerojatna – izdržali su test  vremena i intenzivno korištenje bez ikakvog kompromisa.

Svaki nož bio je napravljen točno prema mojim potrebama, a ono što Karla izdvaja je  njegova sposobnost da te potrebe pretoči u savršen format noža. 

Ako  tražite kovača koji spaja vrhunsko majstorstvo, izdržljivost i estetski  užitak, Karl Ban je prava adresa. Dugovječnost i besprijekornost  njegovih noževa govore same za sebe!" `,
    image: "/assets/Image/testimonials-img.png",
    thumbnails: [
      "/assets/Image/testimonials-img-1.png",
      "/assets/Image/testimonials-img-2.png",
    ],
  },
  {
    id: 2,
    name: "Iva Trbović",
    text: `2017. sam imala priliku isprobati Karlov nož. Trebala sam savršen poklon.

    Tražila sam hrvatsku proizvodnju, visoku kvalitetu i vizualnu privlačnost, i sve sam to pronašla u njemu. A funkcionalnost … 🤯 Samo ga pazite i njegujte i trajat će vam duže nego neki odnosi 😹`,
    image: "/assets/Image/testimonials-user-img.png",
    thumbnails: [
      "/assets/Image/user-testimonials-img.png",
      "/assets/Image/testimonials-img-1.png",
    ],
  },
  {
    id: 3,
    name: "Marko Cirimotić",
    text: `Karlov odnos prema kovini, oštrici i obliku nije samo zanatski. Svaki njegov nož, detalj, nosi njegov rukopis – spoj tradicije, osjećaj za materijal i preciznosti koja dolazi iz poštovanja prema poslu koji radi. 

    On nije samo vrstan majstor; on je i visoko obrazovan čovjek, s dubokim razumijevanjem materijala, obrade i estetike. Ponosan sam što ga mogu zvati prijateljem i još ponosniji što mogu svjedočiti njegovom rastu, radu i stvaranju koje nadilazi čisti zanat.

Tko god odluči naručiti ili kupiti Karlov nož, ne kupuje samo alat – kupuje priču, trud i iskreno majstorstvo.`,
    image: "/assets/Image/testimonials-user-image1.png",
    thumbnails: [
      "/assets/Image/user-testimonials-img.png",
      "/assets/Image/testomonials-img.png",
    ],
  },
  {
    id: 4,
    name: "Bruno Kašpar",
    text: `Dugo poznanstvo od prve kupnje i želja koje sam ubrzo morao i sam izlupat u čeliku se nastavlja i dan danas. 

    Preporučujem Karlove noževe svakom tko pita za kvalitetnu oštricu bilo kakve namjene. Od kuhinjskih noževa, skandinavskih pukko dragulja, pa sve do, za one hrabre, japanskih kamisoria za old school brijačinu :)
    
    Ponosni sam vlasnik preko nekoliko uradaka sa samih početaka gospodinovog majstorstva koje i redovno s guštom koristim. `,
    image: "/assets/Image/user-testimonials-img.png",
    thumbnails: [
      "/assets/Image/testomonials-img.png",
      "/assets/Image/Marin-Medak-1.png",
    ],
  },
  {
    id: 5,
    name: "Nenad Ilić",
    text: `Noževe Karla Bana koristim godinama i mogu reći da su postali dio svakog mog kuhanja. Prvi koji sam uzeo bio je manji, deblji nož, pravi mali tenk. Reže sve, od sušene slanine i kobasica do tvrdih sireva. Čvrst, nepoderiv i nakon više godina izgleda kao prvog dana, oštar poput britve, kvalitetan bez dileme. Svaki odlazak Karlu i samo kovanje noža su posebna avantura. Nakon uspješnog posla uvijek se nešto brzinski ispeklo da se utaži glad, a nakon dobre klope neizostavna je piva ispred lokalnog dućana, legendarna ‘dućanuša’.

    Kod Karla odradiš i mini tečaj ispravnog brušenja, uz savjet koji japanski kamen kupiti i gdje, naravno bez dodatnog plaćanja. Jedva čekam proširiti ovu kolekciju i dodati još koji Karlov komad, ideja već ima, samo treba vremena i pive! `,
    image: "/assets/Image/testomonials-img.png",
    thumbnails: [
      "/assets/Image/Marin-Medak-1.png",
      "/assets/Image/Marin-Medak-2.png",
    ],
  },
  {
    id: 6,
    name: "Danijel Odak",
    text: `Moje druženje s Karlom započelo je daaaavne ’21, u mojoj potrazi i istraživanju djedova nauka – kovanja! Kakva slučajnost da naiđem na kovača u istom selu u kojem je i moj djed bio kovač nekad davno, a i Karlov djed! Te iste ’21 mi je pomogao iskovati moj prvi nož a od te iste godine sam ponosni vlasnik njegovog Sanmai Kiritsukea, koji je u svakodnevnoj upotrebi. 
    Jedan Karlov Kiritsuke sam poslao čak u Kinu, dobrom prijatelju i velikom ljubitelju noževa koji je bio oduševljen izvedbom i kvalitetom.   

   Treba li dalje o kvaliteti kad oduševiš postojbinu izrade noževa! Jedva čekam sljedeće druženje i sljedećeg oštrog ljubimca.`,
    image: "/assets/Image/Marin-Medak-1.png",
    thumbnails: [
      "/assets/Image/Marin-Medak-2.png",
      "/assets/Image/Marin-Medak-3.png",
    ],
  },
];

const AboutTestimonialsSec: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="container-xl mx-auto px-4 py-16 relative">
      <h3 className="text-[#FF7020] text-[16px] font-medium mb-1 border-b border-gray-200 pb-2 inline-block w-full">
        Što drugi kažu o Karlu 
      </h3>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          loop={false}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex + 1)}
       onBeforeInit={(swiper) => {
  const navigation = swiper.params.navigation as NavigationOptions;
  navigation.prevEl = ".prev-btn";
  navigation.nextEl = ".next-btn";
}}


          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          className="mt-10"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* LEFT SIDE */}
                <div className="relative">
                  <p className="text-[#4F4640] text-[16px] leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                  <p className="mt-6 font-semibold text-[#4F4640]">
                    {item.name}
                  </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative flex flex-col items-center justify-center">
                  {/* Quote icon */}
                  <BiSolidQuoteAltLeft
                    size={40}
                    className="absolute top-16 md:left-80 left-64 -translate-x-1/2 text-gray-200"
                  />
                  <div className="grid sm:flex md:flex items-end justify-center gap-4">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-[260px] md:h-[300px] object-cover rounded-2xl shadow-md"
                      />
                    </div>
                    <div className="gap-4 flex">
                      {item.thumbnails.map((thumb, index) => (
                        <img
                          key={index}
                          src={thumb}
                          alt={`${item.name} thumbnail ${index + 1}`}
                          className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] object-cover rounded-xl opacity-70 hover:opacity-100 transition-all duration-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination + Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button className="prev-btn flex items-center justify-center md:w-40 w-24 h-10 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button className="next-btn flex items-center justify-center md:w-40 w-24 h-10 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <span className="text-[#636B78] text-[11px] font-medium flex justify-center italic mt-3">
          {activeIndex} / {testimonials.length}
        </span>
      </div>
    </section>
  );
};

export default AboutTestimonialsSec;
