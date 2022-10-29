import React, { useState } from "react";
import "./Navbar.css";
import oneworld from "../assets/oneworld.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  let activeStyle = { color: 'white', textDecoration: 'underline' };
  return (
    <section class="navbar">
      <div>
        <NavLink to="/">
          <img src={oneworld} alt="one world logo"></img>
        </NavLink>
      </div>
      <div class= {(hiddenMenu ? "hidden" : "") + " navtab"}>
        <NavLink className="linked" to="/About.js" style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>
        <NavLink className="linked" to="/Contact.js" style={({ isActive }) => isActive ? activeStyle : undefined}>Contact</NavLink>
        <NavLink className="linked" to="/Users.js" style={({ isActive }) => isActive ? activeStyle : undefined}>Users</NavLink>
      </div>
      <span class= "menu" onClick={() => setHiddenMenu(!hiddenMenu)}>
        {hiddenMenu ? "| | |" : "X"}
      </span>
    </section>
  );
}

export default Navbar;
