import React from "react";
import "./components.css";
import logo from "../components/Images/hamza.png";

import { NavLink, Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div className="container" style={{ fontSize: "20px" }}>
        <div className="row">
          <div className="col-12">
            <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
              <div className="container-fluid  ">
                <Link className="navbar-brand" to="/">
                  <img width={50} src={logo} alt="" srcset="" />
                </Link>
                <button
                  className="navbar-toggler "
                  id="toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <div className="bar bar-1"></div>
                  <div className="bar bar-2"></div>
                  <div className="bar bar-3"></div>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  align-items-sm-center align-items-center ms-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-1">
                      <NavLink
                        exact
                        style={{
                          color: props.mode === "dark" ? "#F9F6EE" : "black",
                        }}
                        activeclassname="active"
                        className="nav-link"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item mx-1">
                      <NavLink
                        exact
                        style={{
                          color: props.mode === "dark" ? "#F9F6EE" : "black",
                        }}
                        activeclassname="active"
                        className="nav-link"
                        to="/projects"
                      >
                        Projects
                      </NavLink>
                    </li>

                    <li className="nav-item mx-1">
                      <NavLink
                        exact
                        style={{
                          color: props.mode === "dark" ? "#F9F6EE" : "black",
                        }}
                        activeclassname="active"
                        className="nav-link "
                        to="/blogs"
                      >
                        Blogs
                      </NavLink>
                    </li>

                    <li className="nav-item mx-1">
                      <NavLink
                        exact
                        style={{
                          color: props.mode === "dark" ? "#F9F6EE" : "black",
                        }}
                        activeclassname="active"
                        className="nav-link "
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>

                    <li className="nav-item mx-1">
                      <button
                        onClick={props.toggleMode}
                        className="border-0  icon-btn"
                      >
                        <img width={30} id="moon" src={props.modeIcon} alt="" />
                        {/* <img width={30} id='sun' src={props.modeIcon} alt=""  /> */}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
