"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { Check } from "lucide-react";

export default function GivingMethods() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    const text = "giving@avantlifechurch.com";

    // modern clipboard API
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return;
    } catch {
      // fallback to exec command
    };

    // fallback for older browsers
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    } finally {
      document.body.removeChild(ta);
    }
  };

  return (
    <section className="px-6 py-4">
      <h2 className="text-3xl text-center font-bold mb-8 md:mb-0">
        WAYS TO GIVE ONLINE
      </h2>

      <div className="flex flex-col md:flex-row justify-center md:items-end items-center gap-8">
        {/* Interac */}
        <div className="flex flex-col items-center items-center justify-center text-center max-w-md">
          <Image
            src="/home/interac.png"
            alt="Interac eTransfer image"
            width={120}
            height={100}
            className="object-contain mb-4"
          />
          <p className="mb-4 text-sm max-w-sm">
            Interac e-Transfer is the preferred way to give as all of the funds go towards our mission and cuts out payment processor fees.
          </p>
          <button
            className={`
              bg-black hover:bg-gray-800
              text-white
              font-semibold
              inline-block
              rounded-full
              py-3
              px-8
              min-w-[240px]
              mb-4
              shadow
              transition
              flex items-center justify-center
            `}

            onClick={copyEmail}
          >
            {copied ? (
              <span className="inline-flex items-center gap-2">
                <span>Copied</span>
                <Check className="w-4 h-4" />
              </span>
            ) : (
              "giving@avantlifechurch.com"
            )}
          </button>
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
          <p className="md:mb-10 mb-4 text-sm max-w-sm">
            You can also give securely online through Pushpay, supporting our
            mission in a simple and convenient way.
          </p>
          <Button text="Give Online" href="https://pushpay.com/g/avantlifechurch?src=hpp" bg="black"/>
        </div>
      </div>
    </section>
  );
}
