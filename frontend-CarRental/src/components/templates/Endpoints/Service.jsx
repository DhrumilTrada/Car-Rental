import React, { useEffect } from "react";
import Carousel, { handleScrollToTop } from "../Carousels/Carousel";
import { Link } from 'react-router-dom'

function Service() {

  return (
    <div>
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Service</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
          <Link to='/' className="text-white">Home</Link>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">Service</h6>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Our Services
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-taxi text-secondary" />
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">01</h1>
                </div>
                <h4 className="text-uppercase mb-3">Car Rental</h4>
                <p className="m-0">
                We offer a wide selection of vehicles for short-term and long-term rentals, catering to your needs and budget.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item active d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-money-check-alt text-secondary" />
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">02</h1>
                </div>
                <h4 className="text-uppercase mb-3">Car Financing</h4>
                <p className="m-0">
                Flexible financing options to help you own your dream car with affordable payment plans.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-car text-secondary" />
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">03</h1>
                </div>
                <h4 className="text-uppercase mb-3">Car Inspection</h4>
                <p className="m-0">
                Comprehensive vehicle inspections to ensure safety and optimal performance before hitting the road.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-cogs text-secondary" />
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">04</h1>
                </div>
                <h4 className="text-uppercase mb-3">Auto Repairing</h4>
                <p className="m-0">
                Expert repair services to keep your car running smoothly and reliably.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-spray-can text-secondary" />
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">05</h1>
                </div>
                <h4 className="text-uppercase mb-3">Auto Painting</h4>
                <p className="m-0">
                Professional auto painting services to restore or upgrade your vehicle's appearance.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-pump-soap text-secondary" />
                  </div>
                  <h1 className="display-2 text-white mt-n2 m-0">06</h1>
                </div>
                <h4 className="text-uppercase mb-3">Auto Cleaning</h4>
                <p className="m-0">
                Complete auto cleaning services to keep your car spotless inside and out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="bg-banner py-5 px-4 text-center">
            <div className="py-5">
              <h1 className="display-1 text-uppercase text-primary mb-4">
                50% OFF
              </h1>
              <h1 className="text-uppercase text-light mb-4">
                Special Offer For New Members
              </h1>
              <p className="mb-4">
                Only for Sunday from 1st Jan to 30th Jan 2045
              </p>
              <a className="btn btn-primary mt-2 py-3 px-5">Register Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
        <Carousel />
        </div>
      </div>
      <button
        onClick={handleScrollToTop}
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up" />
      </button>
    </div>
  );
}

export default Service;
