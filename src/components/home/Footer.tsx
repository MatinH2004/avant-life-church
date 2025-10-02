import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/data/footerData";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between py-8 px-8 mt-8 bg-black text-gray-100 rounded-t-[50px]">
      {/* Render sections dynamically */}
      {footerData.map((section) => (
        <div key={section.title} className="mb-6 md:mb-0">
          <h3 className="text-xl mb-2">{section.title}</h3>
          <ul>
            {section.items.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Logo / Branding */}
      <div className="flex flex-col justify-center items-center">
        <Link href="#top">
          <Image
            alt="Avant Life Church"
            className="object-contain"
            width={150}
            height={150}
            src="/global/avant-logo-white.png"
          />
        </Link>
        <p className="text-sm">® {new Date().getFullYear()} Avant Life Church</p>
      </div>
    </footer>
  );
}
