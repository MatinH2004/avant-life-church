import Image from "next/image";

interface Sections {
  title?: string; // optional, since some sections may not have titles
  paragraphs: string[];
}

export default function Details() {
  const sections: Sections[] = [
    {
      title: "Who We Are",
      paragraphs: [
        `KidsLife is an innovative children&apos;s ministry that exists to love, care for and serve children and families. We believe in raising children that love Jesus with their whole heart and teaching them how to live in such a way that honours and worships Him through every area of their life.`,
        `At KidsLife, we foster the fun, limitless and natural faith that children possess. We  provide a safe and nurturing environment, where children can encounter the love of Jesus through praise and worship, prayer, communion, giving, teaching the Bible and lots of fun games and activities.`,
        `We seek to make following Jesus a fun and exciting journey that everyone wants to be a part of!`,
      ],
    },
    {
      title: "Who It's For",
      paragraphs: [
        `<b>We have two age group programs:</b>`,
        `- Ages 1 (and walking) to 4 years`,
        `- Ages 5 to 12 years`,
        `<b>Our KidsLife programs run alongside all of our Sunday services.</b>`,
        `- North Shore @ 9:00am & 11:30am`,
        `- Squamish @ 10:00am`,
        `- Toronto @ 9:30am`,
        `If you&apos;d like to register your child, you can do so at the check in desk on Sundays.`,
      ],
    },
  ];

  return (
    <div className="mt-18">
      {sections.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          paragraphs={section.paragraphs}
        />
      ))}
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-12">
        <div>
          <h2 className="text-center font-semibold mt-6 text-3xl md:text-4xl">KidsLife Pastor</h2>
          <p className="text-center">Pastor Alycia Findlay</p>
          <div className="flex justify-center">
            <Image
              src="/kidslife/PS_Alycia.jpg"
              width={300}
              height={300}
              alt="Kid's Life Pastor"
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
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
