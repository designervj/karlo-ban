
import Hero from "@/components/sections/Hero";
import FeatureTiles from "@/components/sections/FeatureTiles";
import AboutStrip from "@/components/sections/AboutStrip";
import ProductTabsGrid, { Product } from "@/components/sections/ProductTabsGrid";
import AboutKarloBan from "@/components/sections/AboutKarloBan";
import Testimonials from "@/components/sections/Testimonials";

const pettyProducts: Product[] = [
  { id: "p1", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p2", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p3", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p4", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p5", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p6", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p7", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
  { id: "p8", name: "Petty 173mm", priceEUR: 220, image: "/assets/products/product-img.png", size: "173mm" },
];
const categories = [
  { id: "petty", label: "Petty", products: pettyProducts },
  { id: "gyuto", label: "Gyuto", products: pettyProducts.slice(0, 6) },
  { id: "santoku", label: "Santoku", products: pettyProducts.slice(0, 6) },
  { id: "nakiri", label: "Nakiri", products: pettyProducts.slice(0, 6) },
];

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Izuzetna oštrina nadomak ruke"
        subtitle="Autentični, 100% ručno kovani noževi. Izrađeni da nadžive generacije."
        cta={{ label: "Kupi nož" }}
      // bgImage="/assets/hero/hero-knife.jpg"
      />
      <AboutKarloBan />

      {/* <FeatureTiles
        items={[
          { id: "f1", title: "5x jača oštrica", caption: "Bez procijena mekša", image: "/assets/feature/steel.jpg" },
          { id: "f2", title: "Dugotrajna oštrina", caption: "Do 5x duže od klasične", image: "/assets/feature/sparks.jpg" },
          { id: "f3", title: "Ručna izrada", caption: "Majstorski potpis", image: "/assets/feature/master.jpg" },
        ]}
      /> */}
      <AboutStrip/>
      <section className="container-xl mx-auto px-4 py-10">
        {/* Section Title */}
        <h3
          className="text-[#FF7020] text-[16px] font-medium mb-1 border-b border-gray-200 pb-2 inline-block w-full"
        >
          Naši kuharski noževi
        </h3>

        {/* Section Description */}
        <p
          className="text-[#4F4640] font-medium text-[22px] md:text-[28px] leading-[160%] max-w-4xl"
        >
          Otkrijte kolekciju ručno kovanih noževa stvorenih za kuhare koji traže više od alata. Svaki model spaja preciznost, dugotrajnost i ljepotu rada iz majstorskih ruku.
        </p>
      </section>

      <ProductTabsGrid categories={categories} />



      <Testimonials />
    </main>
  );
}
