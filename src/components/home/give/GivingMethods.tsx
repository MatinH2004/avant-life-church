import Image from "next/image";
import Button from "@/components/ui/Button";

export default function GivingMethods() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl text-center font-bold mb-8">
        WAYS TO GIVE ONLINE
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Interac */}
        <div className="flex flex-col items-center items-center justify-center text-center max-w-md">
          <Image
            src="/home/interac.png"
            alt="Interac eTransfer image"
            width={180}
            height={200}
            className="object-contain mb-4"
          />
          <p className="mb-4">
            Interac e-Transfer is the preferred way to give as all of the funds
            go towards our mission and cuts out payment processor fees.
          </p>
          <p className="font-semibold">giving@avantlifechurch.com</p>
        </div>
        {/* Pushpay / Other methods */}
        <div className="flex flex-col items-center text-center max-w-md md:mt-24">
          <Image
            src="/home/payoptions.png"
            alt="Pushpay giving"
            width={350}
            height={200}
            className="object-contain mb-4"
          />
          <p className="mb-4">
            You can also give securely online through Pushpay, supporting our
            mission in a simple and convenient way.
          </p>
          <Button text="Give via PushPay" href="https://pushpay.com/g/avantlifechurch?src=hpp" bg="black"/>
        </div>
      </div>
    </section>
  );
}
