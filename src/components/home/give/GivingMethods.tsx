import Image from "next/image";

export default function GivingMethods() {
  return (
    <section>
      <h2 className="text-3xl text-center font-bold">WAYS TO GIVE ONLINE</h2>
      <div className="flex flex-col md:flex-row justify-center align-center px-8">
        <div className="flex flex-col justify-center align-center">
          <div className="mx-auto py-4">
            <Image
              src="/home/interac.png"
              alt="Interac eTransfer image"
              width={180}
              height={200}
              className="object-fit"
            />
          </div>
          <div>
            <p className="max-w-screen-sm text-center mb-4">
              Interac eTransfer is the preferred way to give as all of the 
              funds go towards our mission and cuts out payment processor fees.
            </p>
            <p className="font-semibold text-center">giving@avantlifechurch.com</p>
          </div>
        </div>

        <div>
        {/* other pay options via push pay */}
        </div>
      </div>
    </section>
  );
}