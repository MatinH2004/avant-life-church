import { campuses } from "./campusData";

export const footerData = [
  {
    title: "GET CONNECTED",
    items: [
      { 
        label: "Connect & Engage",
        href: "https://avantlife.churchcenter.com/people/forms/724215"
      },
      { 
        label: "Praise & Prayer",
        href: "https://avantlife.churchcenter.com/people/forms/112752?open-in-church-center-modal=true",
      },
      { 
        label: "Join a Life Group",
        href: "https://avantlife.churchcenter.com/people/forms/72092?open-in-church-center-modal=true"
      },
      {
        label: "YouTube Channel",
        href: "https://www.youtube.com/c/AvantLifeChurch"
      },
      { 
        label: "Give Online",
        href: "/give", 
      },
      { 
        label: "21 Days Devotional",
        href: "/21days",
      },
      { 
        label: "General Inquiries",
        href: "mailto:info@avantlifechurch.com",
      },
    ],
  },
  {
    title: "ABOUT US",
    items: [
      { 
        label: "Our Mission",
        href: "/about/#our-mission",
      },
      { 
        label: "The Church We See",
        href: "/about/#the-church-we-see",
      },
      { 
        label: "Our Belief",
        href: "/about/#our-belief",
      },
      {
        label: "A Culture of Serving",
        href: "/about/#a-culture-of-serving",
      },
      { 
        label: "Created to Worship",
        href: "/about/#created-to-worship",
      },
      {
        label: "Women in Leadership",
        href: "/about/#women-in-leadership",
      },
    ],
  },
  {
    title: "MINISTRIES",
    items: [
      {
        label: "Avant Life Youth",
        href: "/youth",
      },
      {
        label: "KidsLife",
        href: "/kidslife",
      },
      {
        label: "Try Alpha",
        href: "/alpha",
      },
      // {
      //   label: "Mission Partners",
      //   href: "/",
      // },
    ],
  },
  {
    title: "LOCATIONS",
    items: campuses.map(campus => {
      return { 
        href: campus.href, 
        label: campus.name 
      }
    }),
  },
];