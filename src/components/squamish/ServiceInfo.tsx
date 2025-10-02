import Image from "next/image";
import Button from "../ui/Button";

export default function ServiceInfo() {
  return (
    <section className="w-full">
      <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
        <div className="relative h-[420px] md:h-[520px]">
          {/* Background image */}
          <Image
            src="/northshore/northshore.jpg"
            alt="North Shore Location"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Top curve */}
          <div className="absolute top-0 left-0 right-0 pointer-events-none z-20">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-20 md:h-36"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0,120 C300,0 900,0 1200,120 L1200,0 L0,0 Z"
                fill="#ffffff"
              />
            </svg>
          </div>

          {/* Centered content */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="max-w-3xl text-center px-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold my-6">Sunday Service</h2>
              <p className="mt-2">9:00am &amp; 11:30am</p>
              <p className="mt-2 mb-10">4840 Capilano Road, North Vancouver, BC</p>
              <Button text="Directions" href="https://maps.app.goo.gl/zt6WAU7e9MH1RmHZA" bg="white" bold={false} />
            </div>
          </div>

          {/* Bottom curve also arcing up */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-20 md:h-36"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
