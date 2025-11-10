"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useRef, useEffect } from "react"; // useEffect bhi import kiya

type Knife = {
  id: string;
  name: string;
  thumb: string;
  hero: string;
  gallery: string[]; // first 5 images used in the collage
};

const knives: Knife[] = [
  {
    id: "petty",
    name: "Petty",
    thumb: "/assets/Image/Pety-img.png",
    hero: "/assets/Image/productImage.png",
    gallery: [
      "/assets/Image/pro-image (2).png",
      "/assets/Image/pro-image (1).png",
      "/assets/Image/pro-image (3).png",
      "/assets/Image/pro-image (4).png",
      "/assets/Image/pro-image (3).png",
    ],
  },
  {
    id: "gyutto",
    name: "Gyutto",
    thumb: "/assets/Image/Pety-img.png",
    hero: "/images/knives/gyutto-hero-1.jpg",
    gallery: [
      "/assets/Image/pro-image (2).png",
      "/assets/Image/pro-image (1).png",
      "/assets/Image/pro-image (3).png",
      "/assets/Image/pro-image (4).png",
      "/assets/Image/pro-image (5).png",
    ],
  },
  {
    id: "suntoku",
    name: "Suntoku",
    thumb: "/assets/Image/Pety-img.png",
    hero: "/images/knives/suntoku-hero-1.jpg",
    gallery: [
      "/assets/Image/pro-image (2).png",
      "/assets/Image/pro-image (1).png",
      "/assets/Image/pro-image (3).png",
      "/assets/Image/pro-image (4).png",
      "/assets/Image/pro-image (3).png",
    ],
  },
  {
    id: "nakiri",
    name: "Nakiri",
    thumb: "/assets/Image/Pety-img.png",
    hero: "/images/knives/nakiri-hero-1.jpg",
    gallery: [
      "/assets/Image/pro-image (2).png",
      "/assets/Image/pro-image (1).png",
      "/assets/Image/pro-image (3).png",
      "/assets/Image/pro-image (4).png",
      "/assets/Image/pro-image (3).png",
    ],
  },
  {
    id: "deba",
    name: "Deba",
    thumb: "/assets/Image/Pety-img.png",
    hero: "/images/knives/nakiri-hero-1.jpg",
    gallery: [
      "/assets/Image/pro-image (2).png",
      "/assets/Image/pro-image (1).png",
      "/assets/Image/pro-image (3).png",
      "/assets/Image/pro-image (4).png",
      "/assets/Image/pro-image (3).png",
    ],
  },
  {
    id: "yanagiba",
    name: "Yanagiba",
    thumb: "/assets/Image/Pety-img.png",
    hero: "/images/knives/nakiri-hero-1.jpg",
    gallery: [
      "/assets/Image/pro-image (2).png",
      "/assets/Image/pro-image (1).png",
      "/assets/Image/pro-image (3).png",
      "/assets/Image/pro-image (4).png",
      "/assets/Image/pro-image (3).png",
    ],
  },
  {
    id: "usuba",
    name: "Usuba",
    thumb: "/assets/Image/Pety-img.png",
    hero: "/images/knives/nakiri-hero-1.jpg",
    gallery: [
      "/assets/Image/pro-image (2).png",
      "/assets/Image/pro-image (1).png",
      "/assets/Image/pro-image (3).png",
      "/assets/Image/pro-image (4).png",
      "/assets/Image/pro-image (5).png",
    ],
  },
];

export const SingleProduct: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("petty");
  const [currentGallerySlide, setCurrentGallerySlide] = useState<number>(1); // Renamed for clarity
  const [currentTabIdx, setCurrentTabIdx] = useState<number>(0); // Current active tab's 0-based index

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll tabs to center the active tab (desktop only)
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeTabElement = scrollContainerRef.current.children[currentTabIdx] as HTMLElement;
      if (activeTabElement) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const scrollLeft = activeTabElement.offsetLeft - (containerWidth / 2) + (activeTabElement.offsetWidth / 2);
        scrollContainerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [currentTabIdx]);


  const handleTabScroll = (scrollOffset: number) => {
    scrollContainerRef.current?.scrollBy({ left: scrollOffset, behavior: "smooth" });
  };

  const activeKnife = knives.find((k) => k.id === activeId)!;
  const totalGallerySlides = activeKnife.gallery.length;

  const goGalleryPrev = () => {
    setCurrentGallerySlide((prev) => (prev === 1 ? totalGallerySlides : prev - 1));
  };

  const goGalleryNext = () => {
    setCurrentGallerySlide((prev) => (prev === totalGallerySlides ? 1 : prev + 1));
  };

  // Image gallery slider ka logic
  const currentGalleryIndex = currentGallerySlide - 1;
  const gallery = activeKnife.gallery;
  const img1 = gallery[currentGalleryIndex];
  const img2 = gallery[(currentGalleryIndex + 1) % totalGallerySlides];
  const img3 = gallery[(currentGalleryIndex + 2) % totalGallerySlides];
  const img4 = gallery[(currentGalleryIndex + 3) % totalGallerySlides];

  return (
    <section className="bg-white py-12 sm:py-16 md:px-0 px-6">
      <div className="md:max-w-7xl max-w-6xl mx-auto md:me-0 md:ms-auto ">
        {/* Label (ab akela hai) */}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 mb-4">
          Ukratko o noževima u ponudi:
        </p>

        {/* Wrapper for Tabs, Arrows and Pagination */}
        <div className="relative"> {/* relative for absolute positioned arrows */}
          {/* Tabs Slider Container */}
          <div
            ref={scrollContainerRef}
            className="flex flex-nowrap items-center gap-4 overflow-hidden pb-2"
          >
            {knives.map((knife, idx) => {
              const isActive = knife.id === activeId;

              return (
                <button
                  key={knife.id}
                  onClick={() => {
                    setActiveId(knife.id);
                    setCurrentGallerySlide(1);
                    setCurrentTabIdx(idx); // Update active tab index
                  }}
                  className={[
                    "flex flex-shrink-0 w-40 sm:w-44 md:w-48 flex-col items-center rounded-2xl border py-3 text-sm transition-all",
                    "bg-white shadow-sm",
                    isActive
                      ? "border-orange-500 ring-1 ring-orange-200"
                      : "border-zinc-200 hover:border-orange-400/70",
                  ].join(" ")}
                >
                  <div className="mb-2 flex h-20 w-full items-center justify-center">
                    <img src={knife.thumb} alt={knife.name} className="" />
                  </div>
                  <span
                    className={
                      isActive
                        ? "text-lg font-semibold text-orange-500 text-end w-full pe-3"
                        : "text-lg font-medium text-zinc-700 text-end w-full pe-3"
                    }
                  >
                    {knife.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 🌟 **FIX: Tab arrows aur Pagination (Image 2 design)** */}
          <div className="absolute right-28 -bottom-16 top-6 flex flex-col justify-end items-center gap-1.5 hidden md:flex">
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => handleTabScroll(-200)}
                title="Previous Tab"
                className="flex items-center justify-center w-28 h-8 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleTabScroll(200)}
                title="Next Tab"
                className="flex items-center justify-center w-28 h-8 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            {/* Tab Pagination Number */}
            <span className="text-[14px] text-zinc-500">
              {currentTabIdx + 1} / {knives.length}
            </span>
          </div>
        </div>

        {/* 🌟 **FIX: Tabs ke neeche Progress Bar (Image 1 design)** */}
        {/* Isko tabs ke theek neeche rakha hai */}
        {/* <div className="mt-4 h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-zinc-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((currentTabIdx + 1) / knives.length) * 100}%` }}
          ></div>
        </div> */}


        {/* Content */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 ">
          {/* Left text column */}
          <div className="space-y-5">
            <h2 className="text-[26px] md:text-[32px] font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              {activeKnife.name}
            </h2>

            <p className="max-w-xl text-xl leading-relaxed text-[#4F4640]">
              Kombinacija kompaktnosti i visoke oštrine čini petty nož
              dugotrajnim saveznikom u kuhinji – alat koji možeš koristiti svaki
              dan, i to onaj koji ne primijetiš dok radiš, ali znaš da je tu.
            </p>

            <div className="space-y-4 text-md leading-relaxed text-[#4F4640]">
              <p>
                Petty nož (ili &quot;petit&quot;) je nenametljivi junak svake
                ozbiljne kuhinje – kompaktan, precizan i prisutan uvijek kad
                veći nož postane neprikladan. Japanski petty noževi tipično
                dolaze in dužinama od oko 150 mm do 220 mm – što ih čini
                savršenima za guljenje, sitno rezanje, obradu začinskog bilja i
                trimanje sitnog mesa i ribe.
              </p>
              <p>
                Zbog oblika oštrice, nož se lako kontrolira u ruci,
                omogućujući finije pokrete bez zamora – idealan izbor kad
                preciznost odlučuje (a ne snaga).
              </p>
              <p>
                Kod visokokvalitetnih noževa, koristi se troslojna konstrukcija
                čelika koja osigurava zadržavanje oštrine i bolju mogućnost
                oštrenja bez da se oštrica lako oštećuje.
              </p>
            </div>
          </div>

          {/* Right gallery column */}
          <div className="flex flex-col items-center pt-11 gap-4 ml-auto">
            {/* Collage (Dynamic) */}
            <div className="grid grid-cols-[1.3fr_1fr] grid-rows-2 gap-4">
              {/* big top-left */}
              <div className="relative overflow-hidden rounded-md bg-zinc-100 aspect-[4/3]">
                <img
                  src={img1}
                  alt={`${activeKnife.name} detail 1`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* tall right */}
              <div className="row-span-2 relative overflow-hidden rounded-md bg-zinc-100 aspect-[3/4]">
                <img
                  src={img2}
                  alt={`${activeKnife.name} detail 2`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* bottom-left small */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                <div className="relative overflow-hidden rounded-md bg-zinc-100 aspect-[4/3]">
                  <img
                    src={img3}
                    alt={`${activeKnife.name} detail 3`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="relative overflow-hidden rounded-md bg-zinc-100 aspect-[4/3]">
                  <img
                    src={img4}
                    alt={`${activeKnife.name} detail 4`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Gallery Slider controls (Ye gallery ke hain, already sahi the) */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={goGalleryPrev}
                  className="flex items-center justify-center md:w-36 w-24 h-10 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={goGalleryNext}
                  className="flex items-center justify-center md:w-36 w-24 h-10 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <span className="text-[14px] text-zinc-500">
                {currentGallerySlide} / {totalGallerySlides}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};