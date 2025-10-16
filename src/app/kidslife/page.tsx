import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/kidslife/Hero";
import Details from "@/components/home/kidslife/Details";

export default function KidsLife() {
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