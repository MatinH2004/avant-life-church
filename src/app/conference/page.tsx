import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/conference/Hero";
import Details from "@/components/home/conference/Details";
import Footer from "@/components/home/Footer";

export default function ConferencePage() {
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