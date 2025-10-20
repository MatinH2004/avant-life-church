import Hero from "@/components/home/Hero";
import Carousel from "@/components/ui/Carousel";
import Locations from "@/components/home/Locations";
import WatchOnline from "@/components/home/WatchOnline";
import Team from "@/components/home/Team";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Carousel />
      <Locations />
      <WatchOnline />
      <Team />
    </>
  );
}