"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import { fadeInUp } from "./anim";

// We don't need to import the background image, as it's in the /public folder
// import bgImages from "../../../public/assets/hero/hero-img.png"; // <- REMOVED THIS LINE

const fallbackImg =
  "https://images.unsplash.com/photo-1605902711622-cfb43c4437b8?auto=format&fit=crop&w=1500&q=80";

type HeroProps = {
  title?: string;
  subtitle?: string;
  cta?: { label: string; onClick?: () => void };
  videoUrl?: string;
};

export default function Hero({
  title = "Izuzetna oštrina nadomak ruke",
  subtitle = "Autentični, 100% ručno kovani noževi, izrađeni da nadžive generacije.",
  cta = { label: "Kuharski Noževi" },
  videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4",
}: HeroProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative isolate container-xl mx-auto rounded-2xl overflow-hidden mt-7 shadow-lg">
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        // Use a root-relative path to the image in the /public directory
        style={{ backgroundImage: `url('/assets/hero/hero-img.png')` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/40" /> {/* overlay */}

      {/* 🔹 Main Content */}
      <div className="relative z-10 text-center pb-16 pt-28 sm:py-36 lg:pt-60 lg:pb-16 flex flex-col items-center justify-center">
        {/* ▶️ Play Button */}
        <motion.button
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          onClick={() => setOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center bg-white/20 backdrop-blur-md w-16 h-16 rounded-full border border-none shadow-lg mb-6"
        >
          <FaPlay className="text-white w-4 h-4 text-center" />
        </motion.button>

        {/* 🔹 Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-white text-4xl sm:text-5xl lg:text-[60px] font-medium leading-tight"
        >
          {title}
        </motion.h1>

        {/* 🔹 Subtitle */}
        {subtitle && (
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-2xl text-white/90 text-base italic font-medium"
          >
            {subtitle}
          </motion.p>
        )}

        {/* 🔹 CTA Button */}
        {cta && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mt-12"
          >
            <Button
              onClick={cta.onClick}
              className="px-6 py-3 h-auto bg-[#FF7020] hover:bg-[#FF7020]/90 text-white rounded-full shadow-md"
            >
              {cta.label}
            </Button>
          </motion.div>
        )}
      </div>

      {/* 🔹 Video Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay />
        {/* CHANGED: Replaced <iframe> with <video> tag 
          - Added `controls` to show player controls.
          - Added `autoPlay` to start the video when the modal opens.
          - Used `className="w-full h-auto"` for responsive aspect ratio.
          - Set `bg-black` on content for a better viewing experience.
        */}
        <DialogContent className="max-w-3xl p-0 overflow-hidden border-none rounded-xl bg-black">
          {videoUrl && (
            <video
              className="w-full h-auto"
              controls
              autoPlay
              src={videoUrl}
              title="Video Player"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}