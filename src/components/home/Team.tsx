import Image from "next/image";

export default function Team() {
  return (
    <section className="px-6 py-8 max-w-screen-lg mx-auto">
      <h2 className="text-center font-semibold py-6 text-4xl md:text-5xl">
        LEAD PASTORS
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* IMAGE: full width on mobile, fixed width on md+ */}
        <div className="relative w-full md:w-[390px] flex-none">
          {/* aspect-[39/20] = 390 / 200 = 39/20 to keep same ratio */}
          <div className="relative w-full aspect-[20/19] rounded-xl overflow-hidden">
            <Image
              alt="Avant Life Lead Pastors"
              src="/home/bemma.jpg"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 390px"
              priority
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="px-6">
          <p className="my-2">
            Pastors Ben and Emma Narayanan are the Lead Pastors of Avant Life Church. 
            As leaders, both Ps Ben and Ps Emma are passionate about sharing the message 
            of Christ through boldness, innovation, and creativity.
          </p>
          <p className="my-2">
            After hearing the clear call from God they moved to North Vancouver, Canada with 
            their three amazing children Levi, Alice, and Eden from Canberra, Australia to 
            pioneer Avant Life Church.
          </p>
          <p className="my-2">
            Their hearts for people, leadership development, and community engagement have 
            helped establish Avant Life Church as a thriving, relevant, and transformational 
            Christ-centred community.
          </p>
        </div>
      </div>
    </section>
  );
}
