// components/ui/Card.tsx
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  href: string;
  image: string;
}

export default function Card({ title, href, image }: CardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[5/3]">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text content */}
      <div className="absolute top-4 left-4 text-white z-10">
        <h3 className="text-2xl font-bold">{title}</h3>
        <Link
          href={href}
          className="mt-2 inline-block text-sm uppercase font-medium underline underline-offset-4 hover:opacity-80 transition"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
