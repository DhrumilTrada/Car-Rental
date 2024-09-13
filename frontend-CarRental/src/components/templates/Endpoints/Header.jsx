import React, { useEffect, useState, useCallback } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import DatePickerC from "../React UI/DatePicker";
import TimePickerC from "../React UI/TimePicker";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { availableCar, availableCars, viewLocations } from '../features/cars_fetch/carSlice';
import { jwtDecode } from "jwt-decode";

function Header() {
  const user = localStorage.getItem("user");
  if(user){
    const access = JSON.parse(user)['access']
    const user_id = jwtDecode(access)['user_id']
  }
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const [date, setDate] = useState(`${year}-${month}-${day}`);
  const [time, setTime] = useState(`${hours}:${minutes}`);
  const [locations_state, setLocationsState] = useState([]);
  const [loc, setLoc] = useState('')
  const [cars_state, setCarsState] = useState([])
  const today = new Date().toISOString().split("T")[0];
  const { carsAtLocation, locations, isLoading, isError, message } = useSelector((state) => state.cars);
        
  useEffect(() => {
    setDate("")
    setTime("")
    dispatch(viewLocations())
    dispatch(availableCar())
  }, [])

  useEffect(() => {
    dispatch(availableCars(loc))
  }, [loc])

  useEffect(() => {
    if(locations && carsAtLocation){
      setLocationsState(locations.map((locations) => locations.name))
      setCarsState(carsAtLocation.map((cars) => cars.model))
    }
  }, [carsAtLocation, locations])

  const isCarsActive =
    location.pathname === "/car_display" ||
    location.pathname === "/details" ||
    location.pathname === "/booking";

  const isPagesActive =
    location.pathname === "/team" || location.pathname === "/testimonials";

  const closeDropdown = (e) => {
    const dropdown = e.target.closest(".dropdown");
    if (dropdown) {
      dropdown.classList.remove("show");
      dropdown.querySelector(".dropdown-menu").classList.remove("show");
    }
  };


  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
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
                  activeclassname="active"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="nav-item nav-link"
                  activeclassname="active"
                >
                  About
                </NavLink>
                <NavLink
                  to="/service"
                  className="nav-item nav-link"
                  activeclassname="active"
                >
                  Service
                </NavLink>
                <div
                  className={`nav-item dropdown ${
                    isCarsActive ? "active" : ""
                  }`}
                >
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
                      activeclassname="active"
                      onClick={closeDropdown}
                    >
                      Car Listing
                    </NavLink>
                    <NavLink
                      to="/details"
                      className="dropdown-item"
                      activeclassname="active"
                      onClick={closeDropdown}
                    >
                      Car Detail
                    </NavLink>
                    <NavLink
                      to="/booking"
                      className="dropdown-item"
                      activeclassname="active"
                      onClick={closeDropdown}
                    >
                      Car Booking
                    </NavLink>
                  </div>
                </div>
                <div
                  className={`nav-item dropdown ${
                    isPagesActive ? "active" : ""
                  }`}
                >
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
                      activeclassname="active"
                      onClick={closeDropdown}
                    >
                      The Team
                    </NavLink>
                    <NavLink
                      to="/testimonials"
                      className="dropdown-item"
                      activeclassname="active"
                      onClick={closeDropdown}
                    >
                      Testimonial
                    </NavLink>
                  </div>
                </div>
                {user ? (
                  <>
                    <NavLink
                      to="/contact"
                      className="nav-item nav-link"
                      activeclassname="active"
                    >
                      Contact
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="nav-item nav-link btn"
                    >
                      SignOut
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink to="/contact" className="nav-item nav-link">
                      Contact
                    </NavLink>
                    <NavLink to="/login" className="nav-item nav-link">
                      Sign In
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container-fluid bg-white pt-3 px-lg-5">
        <div className="row mx-n2">
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <select className="custom-select px-4" style={{ height: "40px" }} onChange={(e) => setLoc(e.target.value)}>
              <option value="">Pickup Location</option>``
              {locations_state.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <select className="custom-select px-4" style={{ height: "40px" }}>
              <option defaultValue>Drop Location</option>
              <option value={1}>Location 1</option>
              <option value={2}>Location 2</option>
              <option value={3}>Location 3</option>
            </select>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <DatePickerC date={date} minDate={today} />
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <TimePickerC time={time} />
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <select className="custom-select px-4" style={{ height: "40px" }}>
              <option defaultValue>Select A Car</option>
              {cars_state.map((car, index) => (
                <option key={index} value={car}>
                  {car}
                </option>
              ))}
            </select>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 px-2 mb-3">
            <button
              className="btn btn-primary btn-block"
              style={{ height: "40px" }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
