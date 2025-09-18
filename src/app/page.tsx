import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/Hero";
import Carousel from "@/components/home/Carousel";
import Locations from "@/components/home/Locations";
import WatchOnline from "@/components/home/WatchOnline";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Carousel />
      <Locations />
      <WatchOnline />
    </>
  );
}