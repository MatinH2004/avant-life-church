import Hero from "@/components/campus/toronto/Hero";
import Carousel from "@/components/ui/Carousel";
import ServiceInfo from "@/components/campus/toronto/ServiceInfo";
import Ministries from "@/components/campus/toronto/Ministries";
import Team from "@/components/campus/toronto/Team";

export default async function TorontoPage() {
  return (
    <>
      <Hero />
      <Carousel />
      <ServiceInfo />
      <Ministries />
      <Team />
    </>
  );
}
