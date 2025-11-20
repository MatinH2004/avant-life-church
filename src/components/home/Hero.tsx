"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;

    v.play().catch((err) => {
      console.warn("Autoplay prevented, will wait for interaction:", err);
    });

    const tryPlay = () => {
      if (v.paused) {
        v.play().catch(() => {});
      }
    };

    document.addEventListener("click", tryPlay, { once: true });
    document.addEventListener("mousemove", tryPlay, { once: true });

    return () => {
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("mousemove", tryPlay);
    };
  }, []);

  return (
    <section id="top">
      <div className="relative h-[42rem] overflow-hidden">
        <Image
          src="/home/hero-fallback.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"

          className="absolute inset-0 w-full h-full object-cover user-select-none pointer-events-none"
        >
          <source
            src="/home/video/hero-bg2.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <Image
            src="/global/avant-logo-white.png"
            alt="Avant Life Church Logo"
            width={180}
            height={180}
            priority
            className="mt-[-3em]"
          />
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <Button href="#get-connected" text="Connect" />
            <Button href="/about" text="About Us" />
            <Button href="/give" text="Give" />
          </div>
          <div className="hidden mt-4 md:flex md:flex-row gap-4">
            <Button href="#locations" text="Locations" />
            <Button href="/events" text="Events" />
            <Button href="/kidslife" text="KidsLife" />
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1758140629 absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
