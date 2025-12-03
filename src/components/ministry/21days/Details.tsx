import Button from "@/components/ui/Button";

interface Sections {
  title?: string; // optional, since some sections may not have titles
  paragraphs: string[];
}

export default function DetailsText() {
  const sections: Sections[] = [
    {
      title: "21 Days Devotional",
      paragraphs: [
        `Congratulations on making the life-changing decision to follow Jesus and to discover what He has planned and purposed for you. This faith journey may be brand new or something familiar. Wherever you find yourself today, know that where you are, Jesus is also. Whether you&apos;re excited, uncertain, or a mixture of both, Jesus walks with you through every emotion on this journey of faith.`,
        `21 DAYS is designed to guide you along the way, with the hope that it helps answer some of your questions about faith and leads you toward your next steps as a believer.`,
        `Each day includes a question and a short devotional. Take some time to read, pray, and complete the activities at the end. Over these 21 days, we hope you discover answers to many of your questions and find your curiosity sparked about how we&apos;re called to live out our faith in God.`,
        `If you don&apos;t have a Bible yet, you can find one online at <a href="https://www.bible.com" class="underline">www.bible.com</a>.`,
        `If you&apos;d like prayer during the week, you can submit a request through our <a href="https://avantlife.churchcenter.com/people/forms/112752" class="underline">online prayer card</a>.`,
        `For general inquiries about Avant Life Church, contact <a href="mailto:info@avantlifechurch.com" class="underline">info@avantlifechurch.com</a>.`,
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
    <section className="px-6 scroll-mt-24">
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
      <div className="flex justify-center py-6">
        <Button text="Sign Up" href="https://avantlife.churchcenter.com/people/forms/828589" bg="black" />
      </div>
    </section>
  );
}
