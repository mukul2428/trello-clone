const imagePath = "../images";

type Image = {
  image: string;
  alt: string;
};

type Images = {
  [key: string]: Image;
};

export const IMAGES: Images = {
  logo: { image: `${imagePath}/logo.svg`, alt: "logo image" },
  down_arrow: { image: `${imagePath}/down_arrow.svg`, alt: "down arrow image" },
  //features
  views: { image: `${imagePath}/views.jpg`, alt: "views image" },
  automation: { image: `${imagePath}/automation.jpg`, alt: "automation image" },
  powerups: { image: `${imagePath}/powerups.jpg`, alt: "powerups image" },
  templates: { image: `${imagePath}/templates.jpg`, alt: "templates image" },
  integration: {
    image: `${imagePath}/integrations.jpg`,
    alt: "integration image",
  },
  //solutions
  marketing_teams: {
    image: `${imagePath}/marketing_teams.`,
    alt: "marketing_teams image",
  },
  product_management: {
    image: `${imagePath}/product_management.jpg`,
    alt: "product_management image",
  },
  engineeering_teams: {
    image: `${imagePath}/engineering_teams.jpg`,
    alt: "engineeric_teams image",
  },
  design_teams: {
    image: `${imagePath}/design_teams.jpg`,
    alt: "design teams image",
  },
  startups: { image: `${imagePath}/startups.jpg`, alt: "startups image" },
  remote_teams: {
    image: `${imagePath}/remote_teams.jpg`,
    alt: "remote teams image",
  },
};

export const NAVITEMS = [
  {
    id: 0,
    itemName: "Features",
  },
  {
    id: 1,
    itemName: "Solutions",
  },
  {
    id: 2,
    itemName: "Plans",
  },
  {
    id: 3,
    itemName: "Pricing",
  },
  {
    id: 4,
    itemName: "Resources",
  },
];
