import Button from "@/components/ui/Button";

export default function Details() {
  return (
    <section className="px-6">
      <h1 className="text-center text-2xl font-semibold">21 Days</h1>
      <p className="text-lg text-center mx-auto max-w-lg py-8">
        21 Days is Avant Life Church&apos;s pathway for new believers and your first step after committing to Jesus. 
        Through a simple question-and-answer approach, it addresses common questions you may have or encounter from others.
      </p>
      <div className="flex justify-center items-center">
        <Button text="Sign Up" href="https://avantlife.churchcenter.com/people/forms/828589" bg="black" />
      </div>
    </section>
  );
}