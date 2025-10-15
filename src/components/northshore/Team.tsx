import Image from "next/image";

export default function Team() {
  return (
    <section className="max-w-screen-lg mx-auto px-8 py-8">
      <h2 className="text-center font-semibold py-6 text-4xl md:text-5xl">
        TEAM
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
          alt="Avant Life Lead Pastors"
          src="/northshore/Pastors_NS_cropped.jpeg"
          width={300}
          height={200}
          className="object-contain rounded-xl"
        />
      </div>
    </section>
  );
}
