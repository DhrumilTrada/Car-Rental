import { event } from "jquery";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState(new Date().toISOString().split("T")[1].substring(0, 5));
  const today = new Date().toISOString().split("T")[0];
  
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const currentTime = getCurrentTime();
  useEffect(() => {
    setDate("");
    setTime("");
  }, [])
  const isCarsActive =
    location.pathname === "/car_display" ||
    location.pathname === "/details" ||
    location.pathname === "/booking";

  const isPagesActive =
    location.pathname === "/team" ||
    location.pathname === "/testimonials";

  const closeDropdown = (e) => {
    const dropdown = e.target.closest('.dropdown');
    if (dropdown) {
      dropdown.classList.remove('show');
      dropdown.querySelector('.dropdown-menu').classList.remove('show');
    }
  };

  return (
    <>
      {/* Header starts */}
      <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
        <div className="row">
          <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-body pr-3">
                <i className="fa fa-phone-alt mr-2" />
                +012 345 6789
              </a>
              <span className="text-body">|</span>
              <a className="text-body px-3">
                <i className="fa fa-envelope mr-2" />
                info@example.com
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a
                className="text-body px-3"
                href="https://facebook.com/freewebsitecode/"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-body px-3" href="https://freewebsitecode.com/">
                <i className="fab fa-twitter" />
              </a>
              <a className="text-body px-3" href="https://freewebsitecode.com/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-body px-3" href="https://freewebsitecode.com/">
                <i className="fab fa-instagram" />
              </a>
              <a
                className="text-body pl-3"
                href="https://youtube.com/freewebsitecode/"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div className="position-relative px-lg-5" style={{ zIndex: 9 }}>
          <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
            <NavLink to="/" className="navbar-brand">
              <h1 className="text-primary mb-1">DriveHex</h1>
            </NavLink>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                <NavLink
                  exact="true"
                  to="/"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  About
                </NavLink>
                <NavLink
                  to="/service"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  Service
                </NavLink>
                <div className={`nav-item dropdown ${isCarsActive ? "active" : ""}`}>
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    onClick={(e) => e.preventDefault()}
                  >
                    Cars
                  </Link>
                  <div className="dropdown-menu rounded-0 m-0">
                    <NavLink
                      to="/car_display"
                      className="dropdown-item"
                      activeClassName="active"
                      onClick={closeDropdown}
                    >
                      Car Listing
                    </NavLink>
                    <NavLink
                      to="/details"
                      className="dropdown-item"
                      activeClassName="active"
                      onClick={closeDropdown}
                    >
                      Car Detail
                    </NavLink>
                    <NavLink
                      to="/booking"
                      className="dropdown-item"
                      activeClassName="active"
                      onClick={closeDropdown}
                    >
                      Car Booking
                    </NavLink>
                  </div>
                </div>
                <div className={`nav-item dropdown ${isPagesActive ? "active" : ""}`}>
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    onClick={(e) => e.preventDefault()}
                  >
                    Pages
                  </Link>
                  <div className="dropdown-menu rounded-0 m-0">
                    <NavLink
                      to="/team"
                      className="dropdown-item"
                      activeClassName="active"
                      onClick={closeDropdown}
                    >
                      The Team
                    </NavLink>
                    <NavLink
                      to="/testimonials"
                      className="dropdown-item"
                      activeClassName="active"
                      onClick={closeDropdown}
                    >
                      Testimonial
                    </NavLink>
                  </div>
                </div>
                <NavLink
                  to="/contact"
                  className="nav-item nav-link"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* Search Start */}
      <div className="container-fluid bg-white pt-3 px-lg-5">
        <div className="row mx-n2">
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <select
              className="custom-select px-4"
              style={{ height: "40px" }}
            >
              <option defaultValue>Pickup Location</option>
              <option value={1}>Location 1</option>
              <option value={2}>Location 2</option>
              <option value={3}>Location 3</option>
            </select>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <select
              className="custom-select px-4"
              style={{ height: "40px" }}
            >
              <option defaultValue>Drop Location</option>
              <option value={1}>Location 1</option>
              <option value={2}>Location 2</option>
              <option value={3}>Location 3</option>
            </select>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <div className="position-relative">
              <input
                type="date"
                style={{ height: "40px", paddingRight: "40px" }}
                className="form-control px-4"
                placeholder="Pickup Date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onClick={(e) => {
                  if(!e.target.value) setDate(today)
                }}
              />
              <i className="fa fa-calendar-alt position-absolute" style={{ right: "10px", top: "50%", transform: "translateY(-50%)", color: "#3A3A3A"}} />
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <div className="position-relative">
              <input
                type="time"
                style={{ height: "40px", paddingRight: "40px" }}
                className="form-control px-4"
                placeholder="Pickup Time"
                min={currentTime}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onClick={(e) => {
                  if(!e.target.value) setTime(currentTime)
                }}
              />
              <i className="fa fa-clock position-absolute" style={{ right: "10px", top: "50%", transform: "translateY(-50%)", color: "#3A3A3A" }} />
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <select
              className="custom-select px-4"
              style={{ height: "40px" }}
            >
              <option defaultValue>Select A Car</option>
              <option value={1}>Car 1</option>
              <option value={2}>Car 2</option>
              <option value={3}>Car 3</option>
            </select>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <button
              className="btn btn-primary btn-block"
              type="submit"
              style={{ height: "40px" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Header ends */}
    </>
  );
}

export default Header;
