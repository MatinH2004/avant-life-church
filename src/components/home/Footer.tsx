import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "LOCATIONS",
    links: [
      { href: "/", label: "North Shore" },
      { href: "/", label: "Squamish" },
      { href: "/", label: "Toronto" },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { href: "/", label: "Our Team" },
      { href: "/", label: "Our Story" },
      { href: "/", label: "We Believe" },
      { href: "/", label: "About Jesus" },
    ],
  },
  {
    title: "GET CONNECTED",
    links: [
      { href: "/", label: "Praise & Prayer" },
      { href: "/", label: "Join a Life Group" },
      { href: "/", label: "Find a church" },
      { href: "/", label: "Give Online" },
      { href: "/", label: "21 Days Devotional", extraClass: "hover:underline" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between py-8 px-8 mt-8 bg-black text-gray-100 rounded-t-[50px]">
      {/* Render sections dynamically */}
      {footerLinks.map((section) => (
        <div key={section.title} className="mb-6 md:mb-0">
          <h3 className="text-xl mb-2">{section.title}</h3>
          <ul>
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={link.extraClass || ""}
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
