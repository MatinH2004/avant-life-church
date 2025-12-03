import Image from "next/image";
import Button from "../ui/Button";

export default function GetConnectedSection() {
  return (
    <section id="get-connected" className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get Connected</h2>

          <p className="text-gray-600">
            Sign up for campus emails, join a Life Group, or connect with our 
            pastoral team for prayer.
          </p>

          <div className="flex flex-col items-start space-y-4 pt-4">
            <Button text="Sign Up" href="https://avantlife.churchcenter.com/people/forms/724215" bg="blue" newTab={true} />
            <Button text="Join a Life Group" href="https://avantlife.churchcenter.com/people/forms/72092" bg="yellow" newTab={true} />
            <Button text="Praise & Prayer" href="https://avantlife.churchcenter.com/people/forms/112752" bg="black" newTab={true} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full h-64 md:h-full relative rounded-xl overflow-hidden">
          <Image
            src="/home/get-connected.JPG"
            alt="Get Connected"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
