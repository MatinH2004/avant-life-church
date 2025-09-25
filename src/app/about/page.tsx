import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/about/Hero";
import Footer from "@/components/home/Footer";
import AboutText from "@/components/home/about/AboutText";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutText />
      </main>
      <Footer />
    </>
  )
}