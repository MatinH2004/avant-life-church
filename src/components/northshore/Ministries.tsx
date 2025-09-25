import Card from "../ui/Card";

const cards = [
  {
    title: "Alpha",
    href: "/alpha",
    image: "/home/ALPHA.jpeg",
  },
  {
    title: "Young Adults",
    href: "#",
    image: "/home/YA.jpg",
  },
  {
    title: "Avant Life Youth",
    href: "/aly",
    image: "/youth/youth.webp",
  },
  {
    title: "KidsLife",
    href: "/kidslife",
    image: "/kidslife/KL.webp",
  },
];

export default function Ministries() {
  return (
    <section className="container mx-auto px-6 py-8">
      <h2 className="text-center text-3xl font-semibold py-4">MINISTRIES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            href={card.href}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
}
