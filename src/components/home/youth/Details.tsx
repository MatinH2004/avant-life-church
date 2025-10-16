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
        `Avant Life Youth (ALY) is our youth ministry at Avant Life Church. ALY is a youth program designed and facilitated for students in grades 6 - 12.`,
        `Our desire at ALY is for young people across Avant Life Church, BC and Canada to grow in their own personal faith in Jesus Christ, be empowered by His Holy Spirit and walk in the fullness of God&apos;s calling.`,
        `ALY runs every week on a Wednesday evening from <b>7pm - 9pm</b> at our Avant Life Church <a href="/northshore" style="text-decoration: underline;">North Shore</a> campus.`,
      ],
    },
    
  ];

  return (
    <>
      {sections.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          paragraphs={section.paragraphs}
        />
      ))}
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
