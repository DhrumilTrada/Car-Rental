import React, { useState } from "react";
import RelatedCarousel from "../Carousels/RelatedCarousel";
import Carousel, { handleScrollToTop } from "../Carousels/Carousel";
import { Link } from 'react-router-dom'

function Detail() {
  const carItems = [
    {
      imgSrc: "img/car-rent-1.png",
      model: "Mercedes Benz R3",
      year: "2015",
      transmission: "AUTO",
      mileage: "25K",
      price: "$99.00",
    },
    {
      imgSrc: "img/car-rent-2.png",
      model: "BMW X5",
      year: "2018",
      transmission: "AUTO",
      mileage: "30K",
      price: "$120.00",
    },
    {
      imgSrc: "img/car-rent-3.png",
      model: "Audi A6",
      year: "2017",
      transmission: "MANUAL",
      mileage: "20K",
      price: "$110.00",
    },
    {
      imgSrc: "img/car-rent-4.png",
      model: "Tesla Model S",
      year: "2020",
      transmission: "AUTO",
      mileage: "15K",
      price: "$150.00",
    },
  ];

  const carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

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

  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">Car Detail</h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
          <Link to='/' className="text-white">Home</Link>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">Car Detail</h6>
        </div>
      </div>
      {/* Page Header Start */}
      {/* Detail Start */}
      <div className="container-fluid pt-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <h1 className="display-4 text-uppercase mb-5">
                Mercedes Benz R3
              </h1>
              <div className="row mx-n2 mb-3">
                <div className="col-md-3 col-6 px-2 pb-2">
                  <img
                    className="img-fluid w-100"
                    src="img/gallery-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-3 col-6 px-2 pb-2">
                  <img
                    className="img-fluid w-100"
                    src="img/gallery-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-3 col-6 px-2 pb-2">
                  <img
                    className="img-fluid w-100"
                    src="img/gallery-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-md-3 col-6 px-2 pb-2">
                  <img
                    className="img-fluid w-100"
                    src="img/gallery-4.jpg"
                    alt=""
                  />
                </div>
              </div>
              <p>
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
              <div className="row pt-2">
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-car text-primary mr-2" />
                  <span>Model: 2015</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-cogs text-primary mr-2" />
                  <span>Automatic</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-road text-primary mr-2" />
                  <span>20km/liter</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-eye text-primary mr-2" />
                  <span>GPS Navigation</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-car text-primary mr-2" />
                  <span>Model: 2015</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-cogs text-primary mr-2" />
                  <span>Automatic</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-road text-primary mr-2" />
                  <span>20km/liter</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-eye text-primary mr-2" />
                  <span>GPS Navigation</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-car text-primary mr-2" />
                  <span>Model: 2015</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-cogs text-primary mr-2" />
                  <span>Automatic</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-road text-primary mr-2" />
                  <span>20km/liter</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-eye text-primary mr-2" />
                  <span>GPS Navigation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="bg-secondary p-5">
                <h3 className="text-primary text-center mb-4">
                  Check Availability
                </h3>
                <div className="form-group">
                  <select
                    className="custom-select px-4"
                    style={{ height: "50px" }}
                  >
                    <option defaultValue>Pickup Location</option>
                    <option value={1}>Location 1</option>
                    <option value={2}>Location 2</option>
                    <option value={3}>Location 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    className="custom-select px-4"
                    style={{ height: "50px" }}
                  >
                    <option defaultValue>Drop Location</option>
                    <option value={1}>Location 1</option>
                    <option value={2}>Location 2</option>
                    <option value={3}>Location 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <div className="date" id="date1" data-target-input="nearest">
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
                <div className="form-group">
                  <div className="time" id="time1" data-target-input="nearest">
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
                <div className="form-group">
                  <select
                    className="custom-select px-4"
                    style={{ height: "50px" }}
                  >
                    <option defaultValue>Select Person</option>
                    <option value={1}>Person 1</option>
                    <option value={2}>Person 2</option>
                    <option value={3}>Person 3</option>
                  </select>
                </div>
                <div className="form-group mb-0">
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    style={{ height: "50px" }}
                  >
                    Check Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Detail End */}
      {/* Related Car Start */}
      <div className="container-fluid pb-5">
        <div className="container pb-5">
          <h2 className="mb-4">Related Cars</h2>
          <RelatedCarousel
            carItems={carItems}
            carouselOptions={carouselOptions}
          />
        </div>
      </div>
      {/* Related Car End */}
      {/* Vendor Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <Carousel />
        </div>
      </div>
      {/* Vendor End */}
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

export default Detail;
