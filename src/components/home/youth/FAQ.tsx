"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I register?",
    answer: `
      You can register at our Youth Night! Just come by at <strong>7:00 PM</strong> 
      and bring a parent or guardian to fill out the registration form. 
      We&apos;ll take care of everything when you arrive, and you&apos;ll be ready 
      to join in on all the fun that night!
    `,
  },
  {
    question: "Should I bring anything?",
    answer: `
      Bring your friends — the more the merrier! We ask everyone to bring 
      <strong>$5</strong> to cover food and snacks for the evening. 
      Other than that, just bring your energy and be ready for a great time!
    `,
  },
  {
    question: "How to contact us?",
    answer: `
      You can reach out to our Youth Pastor
      <a href="mailto:henry.s@avantlifechurch.com" class="text-blue-500 hover:underline">
        Henry Shelton
      </a> directly for any questions or concerns.
    `,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-2xl mx-auto py-8 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left text-gray-600 font-bold focus:outline-none"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-300" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-300" />
              )}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out text-gray-500 ${
                openIndex === index
                  ? "max-h-60 opacity-100 p-5 pt-0"
                  : "max-h-0 opacity-0 p-0"
              } overflow-hidden`}
            >
              <div
                className="text-gray-500 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
