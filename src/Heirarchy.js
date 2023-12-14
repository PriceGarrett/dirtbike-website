import PageContent from "./components/PageContent";
import Home from "./pages/Home";
import MotorcycleTypes from "./pages/MotorcycleTypes";
import PopularModels from "./pages/PopularModels";
import SafetyConcerns from "./pages/SafetyConcerns";
import Terrain from "./pages/Terrain";
import EngineSize from "./pages/EngineSize";
import BuyingNew from "./pages/BuyingNew";
import BuyingUsed from "./pages/BuyingUsed";
import Protection from "./pages/Protection";
import Practice from "./pages/Practice";
import Paperwork from "./pages/Paperwork";
import Maintanence from "./pages/Maintanence";
import Repairs from "./pages/Repairs";

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
        component: <EngineSize/>
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
    component: <BuyingNew/>
  },
  {
    route: "used",
    label: "Buying Used",
    component: <BuyingUsed/>
  },
];
const readySubMenu = [
  {
    route: "protection",
    label: "Protective Gear",
    component: <Protection/>
  },
  {
    route: "practice",
    label: "Practice and Training",
    component: <Practice/>
  },

  {
    route: "paperwork",
    label: "License and Registration",
    component: <Paperwork/>
  },
];
const careSubMenu = [
  {
    route: "maintenance",
    label: "Routine Maintenance",
    component: <Maintanence/>
  },
  {
    route: "repairs",
    label: "Common Repairs",
    component: <Repairs/>
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
