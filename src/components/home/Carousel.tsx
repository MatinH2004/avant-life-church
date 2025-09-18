"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    img: "/images/slide1.jpg",
    text: "Conference 2025",
    cta: "Register Today",
    link: "#",
  },
  {
    id: 2,
    img: "/images/slide2.jpg",
    text: "21 Days",
    cta: "Sign Up",
    link: "#",
  },
  {
    id: 3,
    img: "/images/slide3.jpg",
    text: "Join Alpha",
    cta: "Learn More",
    link: "#",
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
    <section className="px-12 pb-12">
      <div className="relative overflow-hidden bg-black h-[400px] max-w-screen-xl rounded-3xl mx-auto">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 relative h-[400px]"
            >
              <Image
                src={slide.img}
                alt={slide.text}
                fill
                className="object-cover rounded-3xl"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {slide.text}
                </h2>
                <a
                  href={slide.link}
                  className="px-6 py-3 rounded-full text-lg font-semibold bg-white text-black hover:bg-gray-200 transition"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full transition"
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
                idx === current ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
