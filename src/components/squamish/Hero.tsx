"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram, FaSpotify, FaSoundcloud, FaApple } from "react-icons/fa";

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
          src="/squamish/SQ_Cover.webp"
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
            src="/squamish/SQ_Cover_720p.webm"
            type="video/webm"
          />
        </video>

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

          <Image
            src="/global/avant-logo-white.png"
            alt="Avant Life Church Logo"
            width={180}
            height={180}
            priority
            className="mt-[-6em]"
          />
          <h1 className="text-white font-bold text-5xl md:text-5xl mt-5">SQUAMISH</h1>

          <div className="flex flex-wrap justify-center space-x-6 mt-6 text-white text-2xl">
            <a href="https://www.facebook.com/avantlifesquamish" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://www.youtube.com/c/AvantLifeChurch" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="hover:text-red-500 transition-colors" />
            </a>
            <a href="https://www.instagram.com/avantlifesquamish/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://open.spotify.com/show/6Osh174jPUdX9CS9GJyy72" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
              <FaSpotify className="hover:text-green-500 transition-colors" />
            </a>
            <a href="https://podcasts.apple.com/ca/podcast/avant-life-church/id1480171888" target="_blank" rel="noopener noreferrer" aria-label="Apple Podcasts">
              <FaApple className="hover:text-gray-300 transition-colors" />
            </a>
            <a href="https://on.soundcloud.com/jODjRt93LyBS2hAqGL" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud">
              <FaSoundcloud className="hover:text-orange-500 transition-colors" />
            </a>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1758140629">
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
