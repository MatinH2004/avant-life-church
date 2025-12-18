import Carousel from "@/components/ministry/aly/Carousel";
import FAQ from "@/components/ministry/aly/FAQ";
import JoinUs from "@/components/ministry/aly/JoinUs";

interface Sections {
  title?: string;
  paragraphs: string[];
}

export default function Details() {
  const sections: Sections[] = [
    {
      title: "Who We Are",
      paragraphs: [
        `Avant Life Youth (ALY) is our youth ministry at Avant Life Church. ALY is a youth program designed and facilitated for students in grades 6-12.`,
        `Our desire at ALY is for young people across Avant Life Church, BC and Canada to grow in their own personal faith in Jesus Christ, be empowered by His Holy Spirit, and walk in the fullness of God's calling.`,
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
      <JoinUs />
      <Carousel />
      <FAQ />
    </>
  );
}

function ContentSection({ title, paragraphs }: Sections) {
  return (
    <section className="px-6 py-4 scroll-mt-24">
      {title && (
        <h2 className="text-center text-gray-800 text-3xl font-semibold mb-4">{title}</h2>
      )}
      <div className="mx-auto max-w-screen-sm flex justify-center">
        <div className="space-y-4 text-justify md:text-lg">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{ __html: text }}
              className="text-gray-600"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
