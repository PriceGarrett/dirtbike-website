import PageContent from "./components/PageContent";
import Home from "./pages/Home";
import MotorcycleTypes from "./pages/MotorcycleTypes";
import PopularModels from "./pages/PopularModels";
import SafetyConcerns from "./pages/SafetyConcerns";
import Terrain from "./pages/Terrain";

const buyingSubMenu = [
  {
    route: "safety",
    label: "Safety Concerns",
    component: <SafetyConcerns/>
  },
  {
    route: "style",
    label: "Choosing the Right Bike",
    contentPath: "right_bike.md",
    submenu: [
      {
        route: "types",
        label: "Different Types of Motorcycles",
        component: <MotorcycleTypes/>
      },
      {
        route: "terrain",
        label: "Where Do You Want to Ride?",
        component: <Terrain/>
      },
      {
        route: "engine",
        label: "What Size Engine Do You Need?",
        contentPath: "engine.md",
      },
      {
        route: "popular",
        label: "Popular Makes and Models",
        component: <PopularModels/>,
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
    route: "paperwork",
    label: "License and Registration",
    contentPath: "paperwork.md",
  },
];
const careSubMenu = [
  {
    route: "maintenance",
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
    component: <Home/>,
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
