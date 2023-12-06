import { useState } from "react";
import { Link } from "react-router-dom";

//https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/#multi-level-menu-vs-mega-menu

export default function NavBar({ menuItemsData }) {
  const depthLevel = 0;
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
}

function MenuItems({ items, depthLevel }) {
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  return (
    <li
      className="menu-items"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <Link
            role="button"
            aria-haspopup="menu"
            to={items.route}
            aria-expanded={dropdown ? "true" : "false"}
          >
            {items.label}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </Link>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <Link to={items.route}>{items.label}</Link>
      )}
    </li>
  );
}

function Dropdown({ submenus, dropdown, depthLevel }) {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
}
