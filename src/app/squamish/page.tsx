import Hero from "@/components/campus/squamish/Hero";
import Carousel from "@/components/ui/Carousel";
import ServiceInfo from "@/components/campus/squamish/ServiceInfo";
import Ministries from "@/components/campus/squamish/Ministries";
import Team from "@/components/campus/squamish/Team";

export default async function SquamishPage() {
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
