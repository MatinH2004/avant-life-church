import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { campuses } from "@/data/campusData";

export default function Locations() {
  return (
    <section id="locations" className="py-8">
      <h2 className="font-semibold text-2xl text-center mb-6">Our Locations</h2>
      <div className="flex justify-center">
        <Image
          src="/home/canada-map.png"
          alt="Locations"
          className=""
          width={700}
          height={400}
        />
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <div
          className="
            flex flex-col md:flex-row
            justify-center items-start md:items-center
            text-lg md:gap-16
            divide-y divide-gray-200 md:divide-y-0
          "
        >
          {campuses.map((campus) => (
            <Link
              key={campus.name}
              href={campus.href}
              className="
                block w-full md:w-auto
                px-4 py-4
                flex justify-between md:justify-center items-center
                hover:font-semibold transition hover:translate-x-[10px]
              "
            >
              <span>{campus.name}</span>

              {/* Icons: mobile = right, desktop = down */}
              <span className="md:hidden">
                <ChevronRight size={18} />
              </span>
              <span className="hidden md:inline">
                <ChevronDown size={18} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}