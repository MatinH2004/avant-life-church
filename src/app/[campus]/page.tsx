import { campuses } from "@/lib/campuses";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/northshore/Hero";
import Carousel from "@/components/home/Carousel";
import ServiceInfo from "@/components/northshore/ServiceInfo";
import Ministries from "@/components/northshore/Ministries";
import Team from "@/components/northshore/Team";
import Footer from "@/components/home/Footer";

export default async function CampusPage({ params }: { params: Promise<{ campus: string }> }) {
  const { campus: campusKey } = await params;

  const campus = campuses[campusKey as keyof typeof campuses];

  // Todo: create dedicated 404 page
  if (!campus) {
    return <h1>404 - Campus not found</h1>;
  }

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
