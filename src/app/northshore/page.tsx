import Navbar from "@/components/home/Navbar";
import Hero from "@/components/northshore/Hero";
import Carousel from "@/components/home/Carousel";
import ServiceInfo from "@/components/northshore/ServiceInfo";
import Ministries from "@/components/northshore/Ministries";
import Team from "@/components/northshore/Team";
import Footer from "@/components/home/Footer";

export default async function NorthshorePage() {
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
