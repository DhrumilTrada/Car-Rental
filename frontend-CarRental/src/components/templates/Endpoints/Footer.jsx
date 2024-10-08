import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Footer start */}
      <div
        className="container-fluid bg-secondary py-5 px-sm-3 px-md-5"
        style={{ marginTop: "90px" }}
      >
        <div className="row pt-5">
          {/* Get In Touch */}
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-white mr-3" />
              Ahmedabad, India
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt text-white mr-3" />
              +91 7405810278
            </p>
            <p>
              <i className="fa fa-envelope text-white mr-3" />
              drivehex0422@gmail.com
            </p>
            <h6 className="text-uppercase text-white py-2">Follow Us</h6>
            <div className="d-flex justify-content-start">
              <a
                className="btn btn-lg btn-dark btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-lg btn-dark btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-lg btn-dark btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-lg btn-dark btn-lg-square"
                href="#"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">Useful Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Private Policy
              </a>
              <a className="text-body mb-2" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Terms & Conditions
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
                Return & Refund
              </a>
              <a className="text-body" href="#">
                <i className="fa fa-angle-right text-white mr-2" />
                Help & FAQs
              </a>
            </div>
          </div>

          {/* Car Gallery */}
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">Car Gallery</h4>
            <div className="row mx-n1">
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="img/gallery-1.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="img/gallery-2.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="img/gallery-3.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="img/gallery-4.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="img/gallery-5.jpg" alt="" />
                </a>
              </div>
              <div className="col-4 px-1 mb-2">
                <a>
                  <img className="w-100" src="img/gallery-6.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
            <h4 className="text-uppercase text-light mb-4">Newsletter</h4>
            <p className="mb-4 text-justify">
            Are you ready for your next adventure? We've got the perfect car for you. Sign up for our newsletter and stay updated on the latest deals, exclusive offers, and travel tips!
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
                  <Link to="/login" className="btn btn-primary text-uppercase px-3">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="container-fluid bg-dark py-4 px-sm-3 px-md-5">
        <p className="mb-2 text-center text-body">
          © <a href="#">DriveHex CarRentals</a>. All
          Rights Reserved.
        </p>
        <p className="m-0 text-center text-body">
          Designed by{" "}
          <a href="https://github.com/DhrumilTrada">Dhrumil Trada</a>
        </p>
      </div>
      {/* Footer ends */}
    </>
  );
}

export default Footer;
