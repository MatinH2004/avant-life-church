import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/youth/Hero";
import Details from "@/components/home/youth/Details";

export default function Youth() {
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