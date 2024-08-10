import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import './css/bootstrap.min.css'
import './js/main'
import Carousel from "./Carousel";


function About() {
    const [ date, setDate ] = useState(new Date());
    const [ time, setTime ] = useState(new Date().toLocaleTimeString())
    const today = new Date().toISOString().split('T')[0];
    const getCurrentTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };
    const currentTime = getCurrentTime();
    const imageArray = [
      "/img/vendor-1.png",
      "/img/vendor-2.png",
      "/img/vendor-3.png",
      "/img/vendor-4.png",
      "/img/vendor-5.png",
      "/img/vendor-6.png",
      "/img/vendor-7.png",
      "/img/vendor-8.png"
    ];
    
  return (
    <div>
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
          <nav className="navbar navbar-expand-sm bg-secondary navbar-dark py-6 py-lg-0 pl-3 pl-lg-5">
            <a href="index.html" className="navbar-brand">
              <h1 className="text-uppercase text-primary mb-1">Royal Cars</h1>
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
                <a href="about.html" className="nav-item nav-link active">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link">
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
              <option defaultValue>Pickup Location</option>
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
              <option defaultValue>Drop Location</option>
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
              <option defaultValue>Select A Car</option>
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
      {/* Search End */}
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">About</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <a className="text-white">
              Home
            </a>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">About</h6>
        </div>
      </div>
      {/* Page Header Start */}
      {/* About Start */}
      <div className="container py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Welcome To <span className="text-primary">Royal Cars</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <img className="w-75 mb-4" src="/img/about.png" alt="" />
              <p>
                Justo et eos et ut takimata sed sadipscing dolore lorem, et
                elitr labore labore voluptua no rebum sed, stet voluptua amet
                sed elitr ea dolor dolores no clita. Dolores diam magna clita ea
                eos amet, amet rebum voluptua vero vero sed clita accusam
                takimata. Nonumy labore ipsum sea voluptua sea eos sit justo, no
                ipsum sanctus sanctus no et no ipsum amet, tempor labore est
                labore no. Eos diam eirmod lorem ut eirmod, ipsum diam
                sadipscing stet dolores elitr elitr eirmod dolore. Magna elitr
                accusam takimata labore, et at erat eirmod consetetur tempor
                eirmod invidunt est, ipsum nonumy at et.
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center bg-light p-4 mb-4"
                style={{ height: "150px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fa fa-2x fa-headset text-secondary" />
                </div>
                <h4 className="text-uppercase m-0">24/7 Car Rental Support</h4>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center bg-secondary p-4 mb-4"
                style={{ height: "150px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fa fa-2x fa-car text-secondary" />
                </div>
                <h4 className="text-light text-uppercase m-0">
                  Car Reservation Anytime
                </h4>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div
                className="d-flex align-items-center bg-light p-4 mb-4"
                style={{ height: "150px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4"
                  style={{ width: "100px", height: "100px" }}
                >
                  <i className="fa fa-2x fa-map-marker-alt text-secondary" />
                </div>
                <h4 className="text-uppercase m-0">Lots Of Pickup Locations</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Banner Start */}
      <div className="container py-5">
        <div className="container py-5">
          <div className="row mx-0">
            <div className="col-lg-6 px-0">
              <div
                className="px-5 bg-secondary d-flex align-items-center justify-content-between"
                style={{ height: "350px" }}
              >
                <img
                  className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4"
                  src="/img/banner-left.png"
                  alt=""
                />
                <div className="text-right">
                  <h3 className="text-uppercase text-light mb-3">
                    Want to be driver?
                  </h3>
                  <p className="mb-4">
                    Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                  </p>
                  <a className="btn btn-primary py-2 px-4">
                    Start Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 px-0">
              <div
                className="px-5 bg-dark d-flex align-items-center justify-content-between"
                style={{ height: "350px" }}
              >
                <div className="text-left">
                  <h3 className="text-uppercase text-light mb-3">
                    Looking for a car?
                  </h3>
                  <p className="mb-4">
                    Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                  </p>
                  <a className="btn btn-primary py-2 px-4">
                    Start Now
                  </a>
                </div>
                <img
                  className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4"
                  src="/img/banner-right.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}
      {/* Vendor Start */}
      <div className="container py-5">
        <Carousel images={imageArray}/>
      </div>
      {/* Vendor End */}
      {/* Footer Start */}
      <div
        className="container-fluid bg-secondary py-5 px-sm-3 px-md-5"
        style={{ marginTop: "90px" }}
      >
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-white mr-3" />
              Location, City, Country
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt text-white mr-3" />
              +012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope text-white mr-3" />
              info@example.com
            </p>
            <h6 className="text-uppercase text-white py-2">Follow Us</h6>
            <div className="d-flex justify-content-start">
              <a
                className="btn btn-lg btn-dark btn-lg-square mr-2"
                href="https://freewebsitecode.com/"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-lg btn-dark btn-lg-square mr-2"
                href="https://facebook.com/freewebsitecode/"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-lg btn-dark btn-lg-square mr-2"
                href="https://freewebsitecode.com/"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-lg btn-dark btn-lg-square"
                href="https://youtube.com/freewebsitecode"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">Usefull Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Private Policy
              </a>
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Term &amp; Conditions
              </a>
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                New Member Registration
              </a>
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Affiliate Programme
              </a>
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Return &amp; Refund
              </a>
              <a className="text-body" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Help &amp; FQAs
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">Car Gallery</h4>
            <div className="row mx-n1">
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="/img/gallery-1.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="/img/gallery-2.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="/img/gallery-3.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="/img/gallery-4.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="/img/gallery-5.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="/img/gallery-6.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">Newsletter</h4>
            <p className="mb-4">
              Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
              lorem sit sed elitr sed kasd et
            </p>
            <div className="w-100 mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-dark border-dark"
                  style={{ padding: "5px 16px" }}
                  placeholder="Your Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary text-uppercase px-3">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <i>Lorem sit sed elitr sed kasd et</i>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark py-4 px-sm-3 px-md-5">
        <p className="mb-2 text-center text-body">
          © <a href="https://freewebsitecode.com/">Your Site Name</a>. All
          Rights Reserved.
        </p>
        <p className="m-0 text-center text-body">
          Designed by{" "}
          <a href="https://freewebsitecode.com">Free Website Code</a>
        </p>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </div>
  );
}

export default About;
