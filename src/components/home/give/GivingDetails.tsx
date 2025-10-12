export default function GivingDetails() {
  const details = [
    {
      heading: "Tithes & Offerings",
      text: `At Avant Life Church, we believe in the biblical principle of tithes and offerings. Giving is not just about money, 
      it’s about obedience, faith, and generosity. Tithing teaches us discipline and trust in God’s provision, while offerings flow 
      from a heart that longs to see His Kingdom advance. As followers of Jesus, we are called to build His Church not only with our 
      time and talents but also with our finances. Every gift sown makes a way for lives to be transformed, communities to be reached, 
      and the message of Jesus to impact generations.`,
    },
    {
      heading: "How We Give",
      text: `At Avant Life Church, we don’t pause our services to take up tithes and offerings. Instead, we encourage everyone to seek 
      the Lord throughout the week and give out of prayerful obedience, faith, and generosity. To make it simple and intentional, we 
      provide several ways to give - online through e-transfer ( giving@avantlifechurch.com ), our website, or in person at one of our 
      giving stations. We believe generosity is a lifestyle, and every gift makes a difference in building the Church and advancing God’s Kingdom.`,
    },
  ];

  return (
    <section className="max-w-2xl mx-auto px-6 py-8">
      {details.map((item, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl text-center font-bold mb-4">{item.heading}</h2>
          <p className="text-gray-700 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </section>
  );
}
