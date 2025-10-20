import Hero from "@/components/northshore/Hero";
import Carousel from "@/components/ui/Carousel";
import ServiceInfo from "@/components/northshore/ServiceInfo";
import Ministries from "@/components/northshore/Ministries";
import Team from "@/components/northshore/Team";

export default async function NorthshorePage() {
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
