import Image from "next/image";
import Link from "next/link";

export default function Locations() {
  return (
    <section id="locations" className="py-8">
      <h2 className="font-semibold text-2xl text-center">Our Locations</h2>
      <div className="flex justify-center">
        <Image
          src="/home/canada-map.png"
          alt="Locations"
          className=""
          width={700}
          height={400}
        />
      </div>
      <div className="flex justify-center items-center py-4 text-lg gap-18 md:gap-36">
        <Link className="hover:underline transition" href="?campus=northshore">North Shore</Link>
        <Link className="hover:underline transition" href="?campus=squamish">Squamish</Link>
        <Link className="hover:underline transition" href="?campus=toronto">Toronto</Link>
      </div>
    </section>
  );
}