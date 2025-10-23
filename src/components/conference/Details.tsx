import Button from "@/components/ui/Button";

export default function Details() {
  return (
    <section className="px-6 py-8 max-w-3xl mx-auto text-center space-y-8">
      {/* Title */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
          We The Free Conference
        </h2>
        <p className="mt-4 italic text-lg text-gray-700">
          “You are the light of the world. A city on a hill cannot be hidden.”<br />
          <span className="not-italic font-semibold">Matthew 5:14</span>
        </p>
      </div>

      {/* Body */}
      <div className="text-left text-gray-800 leading-relaxed space-y-4">
        <p>
          We are so looking forward to We The Free Conference happening on Oct 25 & 26, 2025! 
          We are believing for it to be a significant moment for our church in this season. 
          We will be coming together around the word, in worship, and to hear the vision for the year ahead. 
          If you call Avant Life Church home, you do not want to miss this!
        </p>

        <p>
          You can register now for We The Free Conference by following the link below.
        </p>

        <p>
          <span className="font-semibold">When:</span> Saturday evening, October 25th and all day Sunday, October 26th.<br />
          <span className="font-semibold">Where:</span> Kay Meek Arts Centre
        </p>

        <p>
          If you have any questions regarding We The Free Conference, please let us know by emailing{" "}
          <a
            href="mailto:info@avantlifechurch.com"
            className="text-blue-600 hover:underline"
          >
            info@avantlifechurch.com
          </a>.
        </p>
      </div>

      {/* CTA */}
      <div className="pt-4">
        <Button
          text="Register"
          href="/"
          bg="black"
          bold={true}
        />
      </div>
    </section>
  );
}
