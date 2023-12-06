const buyingSubMenu = [
  {
    route: "/safety",
    label: "Safety Concerns",
  },
  {
    route: "/style",
    label: "Choosing the Right Bike",
    submenu: [
      {
        route: "/types",
        label: "Different Types of Motorcycles",
      },
      {
        route: "/terrain",
        label: "Where Do You Want to Ride?",
      },
      {
        route: "/engine",
        label: "What Size Engine Do You Need?",
      },
      {
        route: "/popular",
        label: "Popular Makes and Models",
      },
    ],
  },
  {
    route: "/new",
    label: "Buying New",
  },
  {
    route: "/used",
    label: "Buying Used",
  },
];
const readySubMenu = [
  {
    route: "/protection",
    label: "Protective Gear",
  },
  {
    route: "/practice",
    label: "Practice and Training",
  },
  {
    route: "/terrain",
    label: "Tips for Your Terrain",
  },
  {
    route: "/paperwork",
    label: "License and Registration",
  },
];
const careSubMenu = [
  {
    route: "/maintenence",
    label: "Routine Maintenance",
  },
  {
    route: "/repairs",
    label: "Common Repairs",
  },
];

export const Heirarchy = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/buying",
    label: "Buying Your First Motorcycle",
    submenu: buyingSubMenu,
  },
  {
    route: "/ready",
    label: "Before Your First Ride",
    submenu: readySubMenu,
  },
  {
    route: "/care",
    label: "Caring for Your Motorcycle",
    submenu: careSubMenu,
  },
];
