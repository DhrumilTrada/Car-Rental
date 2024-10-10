import React, { useEffect, useState } from "react";
import Carousel, { handleScrollToTop } from "../Carousels/Carousel";
import { Link } from 'react-router-dom'

function About() {
  
  return (
    <div>
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">About</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <Link to='/' className="text-white">Home</Link>
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
            Welcome To <span className="text-primary">DriveHex</span>
          </h1>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <img className="w-75 mb-4" src="/img/about.png" alt="" />
              <p>
              Drive Hex is a multifaceted car rental platform designed to offer a seamless and convenient vehicle rental experience. With a wide selection of cars ranging from economy to luxury, Drive Hex caters to all types of travelers, from business professionals to vacationers. The website allows users to easily browse, compare, and book cars for short or long-term rentals. Offering features like real-time availability, flexible booking options, and 24/7 customer support, Drive Hex ensures that customers enjoy a hassle-free driving experience tailored to their unique needs.
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
                  Join our team of professional drivers and start your journey today. 
                  </p>
                  <a className="btn btn-primary py-2 px-4">Start Now</a>
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
                  Find the perfect car for your needs with our extensive selection of vehicles.
                  </p>
                  <a className="btn btn-primary py-2 px-4">Start Now</a>
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
      <Carousel />
      </div>
      {/* Back to Top */}
      <button
        onClick={handleScrollToTop}
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up" />
      </button>
    </div>
  );
}

export default About;
