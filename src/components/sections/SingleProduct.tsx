import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

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
            "/assets/Image/pro-image (5).png",
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
            "/assets/Image/pro-image (5).png",
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
            "/assets/Image/pro-image (5).png",
        ],
    },
];

export const SingleProduct: React.FC = () => {
    const [activeId, setActiveId] = useState<string>("petty");
    const [currentSlide, setCurrentSlide] = useState<number>(1);

    const activeKnife = knives.find((k) => k.id === activeId)!;
    const totalSlides = activeKnife.gallery.length;

    const goPrev = () => {
        setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
    };

    const goNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
    };

    // convenience
    const [img1, img2, img3, img4, img5] = activeKnife.gallery;

    return (
        <section className="bg-white py-12 sm:py-16 md:px-0 px-6">
            <div className=" md:max-w-7xl max-w-6xl mx-auto md:me-0 md:ms-auto ">
                {/* Small label */}
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
                    Ukratko o noževima u ponudi:
                </p>

                {/* Tabs */}
                <div className="mt-4 md:flex grid grid-cols-2 items-center gap-4 overflow-x-auto pb-2">
                    {knives.map((knife) => {
                        const isActive = knife.id === activeId;

                        return (
                            <button
                                key={knife.id}
                                onClick={() => {
                                    setActiveId(knife.id);
                                    setCurrentSlide(1);
                                }}
                                className={[
                                    "flex w-40 md:w-48 sm:w-44 flex-col items-center rounded-2xl border py-3 text-sm transition-all",
                                    "bg-white shadow-sm",
                                    isActive
                                        ? "border-orange-500 ring-1 ring-orange-200"
                                        : "border-zinc-200 hover:border-orange-400/70",
                                ].join(" ")}
                            >
                                <div className="mb-2 flex h-20 w-full items-center justify-center">
                                    <img
                                        src={knife.thumb}
                                        alt={knife.name}
                                        className=""
                                    />
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
                            <p >
                                Petty nož (ili &quot;petit&quot;) je nenametljivi junak svake
                                ozbiljne kuhinje – kompaktan, precizan i prisutan uvijek kad
                                veći nož postane neprikladan. Japanski petty noževi tipično
                                dolaze u dužinama od oko 150 mm do 220 mm – što ih čini
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
                    {/* Right gallery column */}
                    <div className="flex flex-col items-center pt-11 gap-4  ml-auto">
                        {/* Collage */}
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

                            {/* bottom-middle – two stacked images */}
                            <div className="grid grid-cols-1 gap-4">

                                {/* <div className="relative overflow-hidden rounded-2xl bg-zinc-100 aspect-[4/3]">
        <img
          src={img5}
          alt={`${activeKnife.name} detail 5`}
          className="h-full w-full object-cover"
        />
      </div> */}
                            </div>
                        </div>

                        {/* Slider controls exactly like design */}
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex items-center justify-center gap-3">
                                <button
                                    onClick={goPrev}
                                   className="flex items-center justify-center md:w-40 w-24 h-10 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300"
                                >
                                       <ChevronLeft className="w-5 h-5" />
                                </button>

                                {/* dots */}
                                {/* <div className="flex items-center gap-2">
                                    {Array.from({ length: totalSlides }).map((_, idx) => (
                                        <span
                                            key={idx}
                                            className={`inline-flex h-2 rounded-full transition-all ${currentSlide === idx + 1
                                                    ? "w-5 bg-orange-400"
                                                    : "w-4 bg-zinc-200"
                                                }`}
                                        />
                                    ))}
                                </div> */}

                                <button
                                    onClick={goNext}
                                    className="flex items-center justify-center md:w-40 w-24 h-10 bg-[#EDEDED] rounded-full text-[#FF7020] hover:bg-[#FFE8D9] transition-all duration-300"
                                >
                                 <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            <span className="text-[14px] text-zinc-500">
                                {currentSlide} / {totalSlides}
                            </span>
                        </div>
                    </div>




                </div>
            </div>
        </section>
    );
};
