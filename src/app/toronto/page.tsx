import Navbar from "@/components/home/Navbar";
import Hero from "@/components/toronto/Hero";
import Carousel from "@/components/home/Carousel";
import ServiceInfo from "@/components/toronto/ServiceInfo";
import Ministries from "@/components/toronto/Ministries";
import Team from "@/components/toronto/Team";
import Footer from "@/components/home/Footer";

export default async function SquamishPage() {
  return (
    <>
      <Navbar showOnScroll/>
      <main>
        <Hero />
        <Carousel />
        <ServiceInfo />
        <Ministries />
        <Team />
      </main>
      <Footer />
    </>
  );
}
