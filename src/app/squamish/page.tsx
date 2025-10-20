import Hero from "@/components/squamish/Hero";
import Carousel from "@/components/ui/Carousel";
import ServiceInfo from "@/components/squamish/ServiceInfo";
import Ministries from "@/components/squamish/Ministries";
import Team from "@/components/squamish/Team";

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
