// StoryBanner.tsx
"use client";

export default function OurStorySection() {
  return (
    <section className="w-full flex justify-center px-4 ">
      {/* card wrapper */}
      <div
        className="
          relative w-full md:max-w-[63%] max-w-[87%]
          rounded-xl
          bg-[#F6F4F2]
          py-10 md:py-24
          px-6 md:px-48
          flex items-center justify-center
          text-center
          overflow-hidden
        "
      >
        {/* subtle world map background */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            bg-center bg-cover
          "
          style={{ backgroundImage: "url('/assets/Image/banner-img.png')" }}
        />

        {/* text */}
        <p className="relative text-[15px] md:text-[20px] leading-relaxed text-[#4A4037]">
          Ono što je počelo kao eksperiment i ljubav prema čeliku postalo je
          životni poziv. Danas njegovi noževi nisu samo alati – oni nose priču
          i tradiciju na gotovo svim kontinentima.
        </p>
      </div>
    </section>
  );
}
