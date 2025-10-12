import Image from "next/image";
import Button from "../ui/Button";

export default function WatchOnline() {
  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Text + Buttons */}
        <div className="px-12 md:pl-18 max-w-xl md:max-w-2xl mx-auto md:mx-0 md:flex-1">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Join us from anywhere around the world
          </h2>
          <p className="py-4">
            We&apos;d love for you to join us every Sunday at 11:30 AM PST for our weekly service. 
            Missed a week? Watch past sermons and learn more about our ministries on our YouTube channel.
          </p>
          <div className="flex flex-col items-start py-4">
            <Button href="https://www.youtube.com/c/AvantLifeChurch" text="YOUTUBE CHANNEL" bg="red" bold={false} />
            <Button href="https://avantlifechurch.online.church" text="WATCH LIVE" bg="blue" bold={false} />
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-auto md:flex-1 flex justify-end mt-8 md:mt-0">
          <Image
            src="/home/laptop.png"
            alt="Avant Life Church YouTube"
            width={650}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
