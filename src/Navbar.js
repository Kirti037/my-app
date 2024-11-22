import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        {/* Brand or Logo */}
        <Link className="navbar-brand" to="/">
          BGMI World
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left Navigation Items */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/videos">
                Videos
              </Link>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() =>
                document.getElementById("dropdown-menu").classList.add("show")
              }
              onMouseLeave={() =>
                document
                  .getElementById("dropdown-menu")
                  .classList.remove("show")
              }
            >
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                aria-expanded="false"
              >
                More
              </Link>
              <ul
                id="dropdown-menu"
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/updates">
                    Upcoming
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/released">
                    Released
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>

          {/* Search Form */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
