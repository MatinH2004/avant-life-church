// import Image from "next/image";
import Button from "../ui/Button";

export default function GetConnectedSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get Connected</h2>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
            eros eget urna vulputate gravida. Praesent id leo eget urna dapibus
            sodales vel sit amet neque.
          </p>

          <div className="flex flex-col items-start space-y-4 pt-4">
            <Button text="Sign Up" href="#" bg="blue" bold={true} />
            <Button text="Join a LifeGroup" href="#" bg="yellow" bold={true} />
            <Button text="Praise & Prayer" href="#" bg="black" bold={true} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full h-64 md:h-full relative">
          <div className="bg-gray-200 w-full h-full rounded-xl flex items-center justify-center text-gray-500 text-lg">
            IMAGE BLOCK
          </div>
        </div>

      </div>
    </section>
  );
}
