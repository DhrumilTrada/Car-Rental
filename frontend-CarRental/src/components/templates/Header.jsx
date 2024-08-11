import React from "react";
import { useState } from "react";

function Header() {
    const [ date, setDate ] = useState(new Date());
    const [ time, setTime ] = useState(new Date())
    const today = new Date().toISOString().split('T')[0];
    const getCurrentTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };
    const currentTime = getCurrentTime();
  return (
    <>
    {/* Header starts */}
      <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
        <div className="row">
          <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-body pr-3" href>
                <i className="fa fa-phone-alt mr-2" />
                +012 345 6789
              </a>
              <span className="text-body">|</span>
              <a className="text-body px-3" href>
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
            <a href="index.html" className="navbar-brand">
              <h1 className=" text-primary mb-1">DriveHex</h1>
            </a>
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
                <a href="index.html" className="nav-item nav-link">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link active">
                  Service
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Cars
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <a href="car.html" className="dropdown-item">
                      Car Listing
                    </a>
                    <a href="detail.html" className="dropdown-item">
                      Car Detail
                    </a>
                    <a href="booking.html" className="dropdown-item">
                      Car Booking
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <a href="team.html" className="dropdown-item">
                      The Team
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
      {/* Search Start */}
      <div className="container-fluid bg-white pt-3 px-lg-5">
        <div className="row mx-n2">
          <div className="col-xl-6 col-lg-2 col-md-6 px-2">
            <select
              className="custom-select px-4 mb-3"
              style={{ height: "40px" }}
            >
              <option selected>Pickup Location</option>
              <option value={1}>Location 1</option>
              <option value={2}>Location 2</option>
              <option value={3}>Location 3</option>
            </select>
          </div>
          <div className="col-xl-6 col-lg-2 col-md-6 px-2">
            <select
              className="custom-select px-4 mb-3"
              style={{ height: "40px" }}
            >
              <option selected>Drop Location</option>
              <option value={1}>Location 1</option>
              <option value={2}>Location 2</option>
              <option value={3}>Location 3</option>
            </select>
          </div>
          <div className="col-xl-6 col-lg-2 col-md-6 px-2">
            <div className="date mb-3" id="date" data-target-input="nearest">
              <input
                type="date"
                style={{ height: "40px" }}
                className="form-control p-4"
                placeholder="Pickup Date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onClick={() => setDate(today)}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-2 col-md-6 px-2">
            <div className="time mb-3" id="time" data-target-input="nearest">
              <input
                type="time"
                style={{ height: "40px" }}
                className="form-control px-4 mb-3"
                placeholder="Pickup Time"
                min={currentTime}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onClick={() => setTime(currentTime)}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-2 col-md-6 px-2">
            <select
              className="custom-select px-4 mb-3"
              style={{ height: "40px" }}
            >
              <option selected>Select A Car</option>
              <option value={1}>Car 1</option>
              <option value={2}>Car 1</option>
              <option value={3}>Car 1</option>
            </select>
          </div>
          <div className="col-xl-6 col-lg-2 col-md-6 px-2">
            <button
              className="btn btn-primary btn-block mb-3"
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