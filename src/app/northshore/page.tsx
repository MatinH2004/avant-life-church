import Hero from "@/components/campus/northshore/Hero";
import Carousel from "@/components/ui/Carousel";
import ServiceInfo from "@/components/campus/northshore/ServiceInfo";
import Ministries from "@/components/campus/northshore/Ministries";
import Team from "@/components/campus/northshore/Team";

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
