import React, { useState } from "react";
import { Play, Layers, Zap, Hammer, Target } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LuUsersRound } from "react-icons/lu";

const AboutSection = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const cards = [
    {
      id: 1,
      title: "O Noževima",
      features: [
        {
          icon: <LuUsersRound className="w-6 h-6 text-[#FD7839]" />,
          text: "3 Sloja čelka",
          sub: "bez prisustva nikla",
        },
        {
          icon: <LuUsersRound className="w-6 h-6 text-[#FD7839]" />,
          text: "Dugotrajna oštrina",
          sub: "& uz niski kut oštrenja",
        },
      ],
      cta: "Više o Noževima",
      image: "/assets/Image/about-img-1.png",
      overlay: "bg-gradient-to-t from-black/85 via-black/60 to-transparent",
      buttonColor: "bg-[#AD1100] hover:bg-[#E73D12]",
      video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    {
      id: 2,
      title: "O Majstoru",
      features: [
        {
          icon: <LuUsersRound className="w-6 h-6 text-[#7893AA]"/>,
          text: "Preko 3500+ iskovanih noževa",
          sub: "uglavnom japanskih vrsta",
        },
        {
          icon: <LuUsersRound className="w-6 h-6 text-[#7893AA]"/>,
          text: "Spoj struke i hobija",
          sub: "u službi visoke kvalitete",
        },
      ],
      cta: "Više o Karlu",
      image: "/assets/Image/about-img.png",
      overlay: "bg-gradient-to-t from-black/85 via-black/60 to-transparent",
      buttonColor: "bg-[#5E6979] hover:bg-[#7893AA]",
      video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
  ];

  return (
    <section className="container-xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl group"
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className={`absolute inset-0 ${card.overlay}`}></div>

            {/* Center Play Button */}
            <button
              onClick={() => setVideoUrl(card.video)}
              className="absolute -top-20 md:top-0 inset-0 flex items-center justify-center"
            >
              <div className="bg-white/25 backdrop-blur-md p-5 rounded-full transition-all hover:bg-white/35">
                <Play className="text-white w-8 h-8" />
              </div>
            </button>

            {/* Text Content */}
               <h2 className="text-[22px] md:text-[30px] sm:text-[28px] font-semibold mb-3 absolute top-6 md:top-6 left-6 text-white">{card.title}</h2>
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-20  text-white flex flex-col justify-end">
           

              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="grid md:flex items-center md:gap-8 gap-3">
                  {card.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0">{f.icon}</div>
                      <div className="flex flex-col  leading-tight">
                        <span className="font-medium text-[16px]">{f.text}</span>
                        <span className="text-[12px] text-white tracking-wide italic mt-1">
                          {f.sub}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`${card.buttonColor} text-white rounded-full px-6 py-2 text-[14px] font-medium shadow-md`}
                >
                  {card.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Dialog */}
      <Dialog open={!!videoUrl} onOpenChange={() => setVideoUrl(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden border-none rounded-xl">
          {videoUrl && (
            <iframe
              width="100%"
              height="400"
              src={videoUrl}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
