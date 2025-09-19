import Image from "next/image";

export default function Hero() {
  return (
    <section id="top">
      <div className="relative bg-black h-170 w-full">
        {/* BG Image */}
        <Image
          src="/home/give-hero.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/global/avant-logo-white.png"
            alt="Avant Life Church Logo"
            width={180}
            height={180}
            priority
            className="mt-[-3em]"
          />
          <h1 className="text-white font-bold text-4xl md:text-5xl">GIVING</h1>
        </div>
        {/* Shape Divider */}
        <div className="custom-shape-divider-bottom-1758140629">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}