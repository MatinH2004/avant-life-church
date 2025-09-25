import Footer from "@/components/home/Footer";
import GivingDetails from "@/components/home/give/GivingDetails";
import GivingMethods from "@/components/home/give/GivingMethods";
import Hero from "@/components/home/give/Hero";
import Navbar from "@/components/home/Navbar";

export default function GivingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GivingMethods />
        <GivingDetails />
      </main>
      <Footer />
    </>
  );
}