import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
// import { ReactComponent as InstagramLogo } from "../../images/instagram-brands.svg";
// import { ReactComponent as LinkedInLogo } from "../images/linkedin-brands.svg";
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
      <ul className={clicked ? "Nav-Menu Active" : "Nav-Menu"}>
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
    // <nav className="navBar">
    //   <ul>
    //     <li className="navLi navLiBtn">

    //     </li>
    //     <div className="navToggle">
    //       <li className="navLi">
    //         <NavLink className="link link--metis" to="/">
    //           Home
    //         </NavLink>
    //       </li>
    //       <li className="navLi">
    //         <NavLink className="link link--metis" to="/education">
    //           Education
    //         </NavLink>
    //       </li>
    //       <li className="navLi">
    //         <NavLink className="link link--metis" to="/work-experience">
    //           Work Experience
    //         </NavLink>
    //       </li>
    //       <li className="navLi">
    //         <NavLink className="link link--metis" to="/contact">
    //           Contact
    //         </NavLink>
    //       </li>
    //       <li className="navLi">
    //         <a
    //           href="https://www.instagram.com/marcusolrik/"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <InstagramLogo className="navImage " />
    //         </a>
    //       </li>
    //       <li className="navLi">
    //         <a
    //           href="https://www.linkedin.com/in/marcusolrik/"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <LinkedInLogo className="navImage " />
    //         </a>
    //       </li>
    //     </div>
    //   </ul>
    // </nav>
  );
}

export default Header;
