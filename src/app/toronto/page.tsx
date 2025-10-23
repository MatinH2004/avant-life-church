import Hero from "@/components/toronto/Hero";
import Carousel from "@/components/ui/Carousel";
import ServiceInfo from "@/components/toronto/ServiceInfo";
import Ministries from "@/components/toronto/Ministries";
import Team from "@/components/toronto/Team";

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
