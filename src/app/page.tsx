import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/Hero";
import Carousel from "@/components/home/Carousel";
import Locations from "@/components/home/Locations";
import WatchOnline from "@/components/home/WatchOnline";
import Team from "@/components/home/Team";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Carousel />
      <Locations />
      <WatchOnline />
      <Team />
      <Footer />
    </>
  );
}