import NavBar from './NavBar.jsx';

import {Heirarchy} from '../Heirarchy.js';

let menuItems = Heirarchy;

export default function Header() {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          Logo
        </a>
        <NavBar menuItemsData={menuItems}/>
      </div>
    </header>
  );
};