
import React from 'react'
import HomePage from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import Header from '@/components/sections/Header'
import Footer from "@/components/sections/Footer";
import { Route, Routes } from 'react-router-dom';
import SingleProductPage from './pages/SingleProductPage';
import AboutPage from './pages/AboutPage';



export default function App(){
  const [view, setView] = React.useState<'home'|'product'>('home')
  const leftNav = [
    {
      label: "Noževi",
      children: [
        { label: "Petty", href: "/petty" },
        { label: "Gyuto", href: "/gyuto" },
        { label: "Santoku", href: "/santoku" },
        { label: "Nakiri", href: "/nakiri" },
      ],
    },
    { label: "O Noževima", href: "/o-nozevima" },
    { label: "O Karlo Banu", href: "/o-karlo-banu" },
    { label: "Što drugi kažu", href: "/recenzije" },
  ];
  return (
    <div className="text-brand-text">
      <Header
        leftNav={leftNav}
        phoneText="Kontaktirajte nas"
        phoneHref="tel:+385000000"
        cartCount={4}
        currentLang="hr"
        languages={[
          { code: "hr", label: "Hr" },
          { code: "en", label: "En" },
        ]}
      />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/single-product' element={<SingleProductPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
   
      <Footer />
    </div>
  )
}
