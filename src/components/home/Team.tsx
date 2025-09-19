import Image from "next/image";

export default function Team() {
  return (
    <section className="max-w-screen-lg mx-auto px-8 py-8">
      <h2 className="text-center font-semibold py-6 text-4xl md:text-5xl">
        LEAD PASTORS
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
          alt="Avant Life Lead Pastors"
          src="/home/bemma.jpg"
          width={300}
          height={200}
          className="object-contain rounded-xl"
        />
        <div className="px-6">
          <p className="my-2">
            Pastors Ben and Emma Narayanan are the Lead Pastors of Avant Life
            Church. As leaders both Ps Ben and Ps Emma are passionate about
            sharing the message of Christ through boldness, innovation and
            creativity.
          </p>
          <p className="my-2">
            After hearing the clear call from God they moved to North Vancouver
            Canada with their three amazing children Levi, Alice and Eden from
            Canberra Australia to pioneer Avant Life Church.
          </p>
          <p className="my-2">
            Their hearts for people, leadership development and community
            engagement has helped establish Avant Life Church as a thriving,
            relevant and transformational Christ centred community.
          </p>
        </div>
      </div>
    </section>
  );
}
