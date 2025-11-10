import AboutHeroSection from '@/components/sections/AboutHeroSection'
import AboutKarlo from '@/components/sections/AboutKarlo'
import AboutTestimonialsSec from '@/components/sections/AboutTestimonialsSec';
import OurStorySection from '@/components/sections/OurStorySection'
import ProductTabsGrid, { Product } from "@/components/sections/ProductTabsGrid";
import Testimonials from '@/components/sections/Testimonials'



import React from 'react'

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
const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <AboutKarlo />
      <OurStorySection/>


              <AboutTestimonialsSec />


                 <section className="container-xl mx-auto px-4 py-10">
                      {/* Section Title */}
                      <h3
                        className="text-[#FF7020] text-[16px] font-medium mb-1 border-b border-gray-200 pb-2 inline-block w-full"
                      >
                        Naši kuharski noževi
                      </h3>
              
                      {/* Section Description */}
                      <p
                        className="text-[#4F4640] font-medium md:text-[28px] text-[20px] leading-[160%] max-w-4xl"
                      >
                        Otkrijte kolekciju ručno kovanih noževa stvorenih za kuhare koji traže više od alata. Svaki model spaja preciznost, dugotrajnost i ljepotu rada iz majstorskih ruku.
                      </p>
                    </section>
              
                    <ProductTabsGrid categories={categories} />

            
    </div>
  )
}

export default AboutPage
