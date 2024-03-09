import React, { useState } from "react";

export default function NavBar(props) {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropDownOpen);
  };

  const closeDropdownWithDelay = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1500);
  };


  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  let timeoutId;

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        onMouseEnter={() => clearTimeout(timeoutId)}
        onMouseLeave={closeDropdownWithDelay}
      >
        <a className="navbar-brand" href="/">
          TexTer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={toggleNavbar}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${
            isNavbarOpen ? "show" : ""
          }`}id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className={`nav-item dropdown  text-${props.mode} `}>
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isDropDownOpen ? "true" : "false"}
              >
                Dropdown
              </a>
              <div
                className={`dropdown-menu ${isDropDownOpen ? "show" : ""} bg-${
                  props.mode
                } `}
                aria-labelledby="navbarDropdown"
              >
                <a className={`dropdown-item `} href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
          </ul>

          <div
            className={`custom-control custom-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              onClick={props.toggleMode}
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              {props.Btn}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
