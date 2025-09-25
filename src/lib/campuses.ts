export const campuses = {
  northshore: {
    name: "North Shore Campus",
    slug: "northshore",
  },
  squamish: {
    name: "Squamish Campus",
    slug: "squamish",
  },
  coquitlam: {
    name: "Toronto Campus",
    slug: "toronto",
  },
} as const;

export type CampusKey = keyof typeof campuses;
