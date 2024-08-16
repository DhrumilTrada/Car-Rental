import React, { useState } from "react";
import Carousel, { handleScrollToTop } from "./Carousels/Carousel";

function Contact() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const today = new Date().toISOString().split("T")[0];
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
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
    "/img/vendor-8.png",
  ];

  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Contact</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <a className="text-white" >
              Home
            </a>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">Contact</h6>
        </div>
      </div>
      {/* Page Header Start */}
      {/* Contact Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase text-center mb-5">
            Contact Us
          </h1>
          <div className="row">
            <div className="col-lg-7 mb-2">
              <div
                className="contact-form bg-light mb-4"
                style={{ padding: "30px" }}
              >
                <form>
                  <div className="row">
                    <div className="col-6 form-group">
                      <input
                        type="text"
                        className="form-control p-4"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        type="email"
                        className="form-control p-4"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control py-3 px-4"
                      rows={5}
                      placeholder="Message"
                      required="required"
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-2">
              <div
                className="bg-secondary d-flex flex-column justify-content-center px-5 mb-4"
                style={{ height: "325px" }}
              >
                <div className="d-flex mb-3">
                  <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3" />
                  <div className="mt-n1">
                    <h5 className="text-light">Head Office</h5>
                    <p>Location, City, Country</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3" />
                  <div className="mt-n1">
                    <h5 className="text-light">Branch Office</h5>
                    <p>Location, City, Country</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3" />
                  <div className="mt-n1">
                    <h5 className="text-light">Customer Service</h5>
                    <p>customer@example.com</p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3" />
                  <div className="mt-n1">
                    <h5 className="text-light">Return &amp; Refund</h5>
                    <p className="m-0">refund@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
      {/* Vendor Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <Carousel images={imageArray} />
        </div>
      </div>
      {/* Vendor End */}
      {/* Back to Top */}
      <button onClick={handleScrollToTop} className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up" />
      </button>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </div>
  );
}

export default Contact;
