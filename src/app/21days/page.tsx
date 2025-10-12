import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/21days/Hero";
import Details from "@/components/home/21days/Details";
import Footer from "@/components/home/Footer";

export default function TwentyOneDaysPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Details />
      </main>
      <Footer />
    </>
  );
}