const buyingSubMenu = [
  {
    route: "safety",
    label: "Safety Concerns",
    contentPath: "safety_concerns.md"
  },
  {
    route: "style",
    label: "Choosing the Right Bike",
    contentPath: "right_bike.md",
    submenu: [
      {
        route: "types",
        label: "Different Types of Motorcycles",
        contentPath: "motorcycle_types.md",
      },
      {
        route: "terrain",
        label: "Where Do You Want to Ride?",
        contentPath: "terrain.md",
      },
      {
        route: "engine",
        label: "What Size Engine Do You Need?",
        contentPath: "engine.md",
      },
      {
        route: "popular",
        label: "Popular Makes and Models",
        contentPath: "popular.md",
      },
    ],
  },
  {
    route: "new",
    label: "Buying New",
    contentPath: "Buying_New.md",
  },
  {
    route: "used",
    label: "Buying Used",
    contentPath: "Buying_Used.md",
  },
];
const readySubMenu = [
  {
    route: "protection",
    label: "Protective Gear",
    contentPath: "protection.md",
  },
  {
    route: "practice",
    label: "Practice and Training",
    contentPath: "practice.md",
  },
  {
    route: "terrain",
    label: "Tips for Your Terrain",
    contentPath: "tips_for_terrain.md",
  },
  {
    route: "paperwork",
    label: "License and Registration",
    contentPath: "paperwork.md",
  },
];
const careSubMenu = [
  {
    route: "maintenence",
    label: "Routine Maintenance",
    contentPath: "maintenance.md",
  },
  {
    route: "repairs",
    label: "Common Repairs",
    contentPath: "repairs.md",
  },
];

export const Heirarchy = [
  {
    route: "/",
    label: "Home",
    contentPath: "home.md",
  },
  {
    route: "buying",
    label: "Buying Your First Motorcycle",
    submenu: buyingSubMenu,
    contentPath: "buying.md",
  },
  {
    route: "ready",
    label: "Before Your First Ride",
    submenu: readySubMenu,
    contentPath: "before_first_ride.md",
  },
  {
    route: "care",
    label: "Caring for Your Motorcycle",
    submenu: careSubMenu,
    contentPath: "taking_care_of_moto.md",
  },
];
