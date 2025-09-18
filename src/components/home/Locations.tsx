import Image from "next/image";

export default function Locations() {
  return (
    <section id="locations" className="py-8">
      <h2 className="font-semibold text-2xl text-center">Our Locations</h2>
      <div className="flex justify-center align-center">
        <Image
          src="/home/canada-map.png"
          alt="Locations"
          className=""
          width={700}
          height={400}
        />
      </div>
      <div className="flex justify-around align-center py-4 text-lg max-w-screen-2xl">
        <a className="hover:underline transition" href="#">North Shore</a>
        <a className="hover:underline transition" href="#">Squamish</a>
        <a className="hover:underline transition" href="#">Toronto</a>
      </div>
    </section>
  );
}