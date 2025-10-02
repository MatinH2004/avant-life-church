import Navbar from "@/components/home/Navbar";
import Hero from "@/components/squamish/Hero";
import Carousel from "@/components/home/Carousel";
import ServiceInfo from "@/components/squamish/ServiceInfo";
import Ministries from "@/components/squamish/Ministries";
import Team from "@/components/squamish/Team";
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
