import Image from "next/image";

export default function Team() {
  return (
    <section className="px-6 py-4 max-w-screen-lg mx-auto">
      <h2 className="text-center font-semibold py-6 text-4xl md:text-5xl">
        TEAM
      </h2>
      <div className="flex flex-col items-center justify-center">
        <Image
          alt="Avant Life Lead Pastors"
          src="/northshore/Pastors_NS_cropped.jpeg"
          width={300}
          height={200}
          className="object-contain rounded-xl"
        />
        <p className="pt-2 text-lg">Pastors Matt &amp; Amanda Giannakos</p>
      </div>
    </section>
  );
}
