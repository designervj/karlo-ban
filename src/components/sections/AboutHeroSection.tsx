"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";
import ReactPlayer from "react-player";
import { fadeInUp } from "./anim";
import bgImages from "../../../public/assets/hero/about-hero.png"
import { FaPlay } from "react-icons/fa";

// ✅ Public demo background + fallback
const bgImage =
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1500&q=80";
const fallbackImg =
  "https://images.unsplash.com/photo-1605902711622-cfb43c4437b8?auto=format&fit=crop&w=1500&q=80";

type HeroProps = {
  title?: string;
  subtitle?: string;
  cta?: { label: string; onClick?: () => void };
  videoUrl?: string;
};

export default function AboutHeroSection({
  title = "i 3000 noževa kasnije...",
  subtitle = "Od hobia do majstorskog rada, koji nosi njegovo ime.",
  cta = { label: "Kuharski Noževi" },
  videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4", // ✅ sample video
}: HeroProps) {
  const [open, setOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative isolate container-xl mx-auto rounded-2xl overflow-hidden mt-7 shadow-lg">
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${bgImages})` }}
        aria-hidden
      />
      <div className="absolute inset-0" />

      {/* 🔹 Main Content */}
      <div className="relative z-10 text-center py-20 sm:py-28 lg:py-56 flex flex-col items-center justify-center">
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
                <FaPlay className="text-white w-4 h-4 text-center " />
      
        </motion.button>


        {/* 🔹 Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-white text-4xl sm:text-5xl lg:text-[60px] font-semibold leading-tight"
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
        {/* {cta && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="mt-6"
          >
            <Button
              onClick={cta.onClick}
              className="px-6 py-3 h-auto bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-md"
            >
              {cta.label}
            </Button>
          </motion.div>
        )} */}
      </div>

      {/* 🔹 Video Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40" />
        <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-xl bg-black relative z-50">
          <div className="relative aspect-video bg-black">
            {videoError ? (
              <img
                src={fallbackImg}
                alt="Fallback"
                className="w-full h-full object-cover"
              />
            ) : (
              <ReactPlayer
                // url={videoUrl}
                width="100%"
                height="100%"
                controls
                playing
                muted
                loop
                onError={() => setVideoError(true)}
                className="absolute top-0 left-0"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
