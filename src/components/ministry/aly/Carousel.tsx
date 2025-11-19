"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  id: number;
  img: string;
  alt: string;
  text?: string;
};

const slides: CarouselProps[] = [
  {
    id: 1,
    img: "/aly/aly1.jpg",
    alt: "AVANT LIFE YOUTH",
  },
  {
    id: 2,
    img: "/aly/aly2.jpg",
    alt: "AVANT LIFE YOUTH",
  },
  {
    id: 3,
    img: "/aly/aly3.jpg",
    alt: "AVANT LIFE YOUTH",
  },
  {
    id: 4,
    img: "/aly/aly4.jpg",
    alt: "AVANT LIFE YOUTH",
  },
  {
    id: 5,
    img: "/aly/aly5.jpg",
    alt: "AVANT LIFE YOUTH",
  },
  {
    id: 6,
    img: "/aly/aly6.jpg",
    alt: "AVANT LIFE YOUTH",
  },
  {
    id: 7,
    img: "/aly/aly7.jpg",
    alt: "AVANT LIFE YOUTH",
  },
  {
    id: 8,
    img: "/aly/aly8.jpg",
    alt: "AVANT LIFE YOUTH",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="px-2 py-6">
      <div className="relative overflow-hidden bg-none h-[24rem] max-w-screen-lg rounded-3xl mx-auto">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 relative h-[24rem]"
            >
              <Image
                src={slide.img}
                alt={slide.alt}
                fill
                className="object-cover rounded-3xl"
                priority
              />
              {slide.text && (
                <>
                  <div className="absolute inset-0 bg-black/40 rounded-3xl pointer-events-none" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white underline text-5xl font-bold px-8 py-4 rounded-2xl">
                      {slide.text}
                    </span>
                  </span>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/10 hover:bg-black/40 text-white p-3 rounded-full transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/10 hover:bg-black/40 text-white p-3 rounded-full transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label="Carousel Index Dots"
              className={`w-3 h-3 rounded-full transition ${
                idx === current ? "bg-white" : "bg-gray-500/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
