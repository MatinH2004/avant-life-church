import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Details() {
  return (
    <section className="px-6 py-8 mx-auto text-center space-y-12 text-gray-800">
      {/* Title */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
          What is Alpha?
        </h2>
      </div>

      {/* Introduction */}
      <div className="space-y-4 text-left leading-relaxed max-w-3xl mx-auto">
        <p>
          We believe that everyone should have the opportunity to ask the big
          questions of life. What is my purpose? What happens when I die? Why is
          there suffering?
        </p>

        <p>
          Alpha is a chance to ask these big questions and explore the Christian
          faith in a fun, low-pressure environment. Each session includes a short
          film and a discussion where you can share what you think with a small
          group of people just like you. Alpha is meant to be a space for people
          who wouldn&apos;t typically go to church, where no question is off limits.
          And it&apos;s all completely free!
        </p>

        <div className="py-4 flex justify-center">
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/DCck-cySK7I?si=ybkUYsfCLup3qRuo"
              title="YouTube video player"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

      </div>

      {/* Subsection: In Every Session */}
      <div className="text-left">
        <h3 className="text-2xl md:text-3xl font-bold uppercase text-center mb-8">
          In Every Session You Will:
        </h3>

        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 md:px-8">
          {/* Reusable section style */}
          {[
            {
              img: "/alpha/connect.jpg",
              title: "Connect.",
              desc: "Every session will begin with a time to connect, relax and build friendships. Alpha is about creating a safe space to speak openly, and that starts with building trust.",
            },
            {
              img: "/alpha/watch.jpg",
              title: "Watch.",
              desc: "Each week, there will be a short film that unpacks the basics of the Christian faith, exploring questions like “Why did Jesus die?”, “Why and how do I pray?”, and “How can I have faith?”. For a full list of topics, scroll down below.",
            },
            {
              img: "/alpha/discuss.jpg",
              title: "Discuss.",
              desc: "After watching the short film, there will be time for discussion around that week's topic and any other questions you may have. This is a chance to bring up your honest thoughts and questions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex-1 mx-auto md:mx-0 text-center md:text-left"
            >
              <div className="w-full h-64 relative mb-3">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold uppercase mb-2">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      {/* CTA */}
      <div className="pt-4 space-y-8">
        <h3 className="text-2xl md:text-3xl font-bold uppercase">
          Interested in Doing Alpha?
        </h3>
        <Button 
          text="Register Interest"
          href="https://avantlife.churchcenter.com/registrations"
          bg="black"
          bold={true}
        />
      </div>
    </section>
  );
}
