import Button from "@/components/ui/Button";

interface Sections {
  title?: string; // optional, since some sections may not have titles
  paragraphs: string[];
}

export default function Details() {
  const sections: Sections[] = [
    {
      title: "Who We Are",
      paragraphs: [
        `Avant Life Young Adults is a ministry for ages 18-25 created to help young adults grow in their faith, build meaningful relationships, and find community in a Christ-centered environment.`,
        `It&apos;s a space for those who call Avant Life home and for anyone new who is looking to connect with others and build community in this exciting and formative season of life.`,
      ],
    },
    {
      title: "Join Us",
      paragraphs: [
        `Stay tuned on social for details about upcoming monthly events at a campus near you, or reach out to the <a href="mailto:info@avantlifechurch.com" style="color: blue">Avant Life team</a> directly to get connected.`,
      ],
    },
  ];

  return (
    <>
      <div className="mt-0">
        {sections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            paragraphs={section.paragraphs}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-6">
        <Button text="@avantlifenorthshore" href="https://www.instagram.com/avantlifenorthshore" bg="black" newTab={true} />
        <Button text="@avantlifesquamish_" href="https://www.instagram.com/avantlifesquamish_/" bg="black" newTab={true} />
        <Button text="@avantlifetoronto" href="https://www.instagram.com/avantlifetoronto" bg="black" newTab={true} />
      </div>
    </>
  );
}

function ContentSection({ title, paragraphs }: Sections) {
  return (
    <section className="px-6 py-4 scroll-mt-24">
      {title && (
        <h2 className="text-center text-3xl font-semibold mb-4">{title}</h2>
      )}
      <div className="mx-auto max-w-screen-sm flex justify-center">
        <div className="space-y-4 text-justify">
          {paragraphs.map((text, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </div>
      </div>
    </section>
  );
}
