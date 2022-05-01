import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { MenuItems } from "./MenuItems";
import { ReactComponent as Logo } from "../../images/sun-initials-logo.svg";


function Header() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <nav className="NavBarItems">
      <a className="NavBar-Logo" href="/">
        <h1 className="LogoTitle">Marcus Olrik</h1>
        <Logo className="svgSunLetterLogo" />
      </a>
      <div className="Menu-Icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul
        className={clicked ? "Nav-Menu Active" : "Nav-Menu"}
        onClick={handleClick}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className={item.cName} to={item.url}>
                <b>{item.title}</b>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Header;
