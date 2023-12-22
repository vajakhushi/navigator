import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <Link class="navbar-brand mr-5" to={"/nav"}>
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active mr-3">
              <Link to={"/"}>Home</Link>
            </li>
            <li class="nav-item mr-3">
              <Link to={"/about"}>About</Link>
            </li>
            <li class="nav-item mr-3">
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li class="nav-item">
              <Link to={"/ourwork"}>Work</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
