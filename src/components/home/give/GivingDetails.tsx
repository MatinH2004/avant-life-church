export default function GivingDetails() {
  const details = [
    {
      heading: "We Believe in Giving Out of Conviction and Not Out of Compulsion",
      text: `A tithe simply means a "tenth". Tithing is our tangible way of bringing to God that which belongs to Him anyway. 
      It’s our obedient response to His clear command to bring the first tenth of our income into the storehouse. 
      God’s promise is that our obedience brings us divine protection. We don’t tithe to "get" – we tithe to obey.`,
    },
    {
      heading: "What About Offerings",
      text: `Offerings are our free-will giving, over and above the tithe. God speaks about the principles of sowing and reaping, 
      and free-will offerings, in every area of our lives, and this includes our finances. Please prayerfully, intentionally, 
      and responsibly consider the offerings you give – according to your personal conviction and the measure of your 
      relationship with God. We don’t advise people to go into debt to give offerings, but this is between you and God.`,
    },
    {
      heading: "What Are the Consequences Either Way?",
      text: `Avant Life Church doesn’t differentiate in our care for anyone based on giving. Giving is a personal matter between you and God. 
      Whether you follow this or decide against it, that is between you and Him. We will continue to love and support every person 
      who wants to be part of our church, without regard to whether they give, or not, and how much they give.`,
    },
  ];

  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      {details.map((item, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl text-center font-bold mb-4">{item.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </section>
  );
}
