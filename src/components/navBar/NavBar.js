import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
// import { ReactComponent as Bars } from "../images/bars-solid.svg";
import { MenuItems } from "./MenuItems";

function Header() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <nav className="NavBarItems">
      <a className="NavBar-Logo" href="/">
        <h1>
          React
          <i className="fab fa-react"></i>
        </h1>
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
            <li>
              <NavLink key={index} className={item.cName} to={item.url}>
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
