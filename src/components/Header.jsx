import NavBar from "./NavBar.jsx";

import { Heirarchy } from "../Heirarchy.js";

let menuItems = Heirarchy;

export default function Header() {
  return (
    <header>
      <div className="nav-area">
        <div className="logo-container">
          <img href="/" className="logo" src="./motoicon.png" />
        </div>

        <NavBar menuItemsData={menuItems} />
      </div>
    </header>
  );
}
