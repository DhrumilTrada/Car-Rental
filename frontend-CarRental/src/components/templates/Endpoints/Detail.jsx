import React, { useState, useEffect, useRef } from "react";
import RelatedCarousel from "../Carousels/RelatedCarousel";
import Carousel, { handleScrollToTop } from "../Carousels/Carousel";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allCarsDisplay } from "../features/cars_fetch/carSlice";

function Detail() {
  const carItems = [];
  const [car, setCar] = useState({})
  const dispatch = useDispatch();
  const { allCars, isLoading, isError, message } = useSelector((state) => state.cars);
  const carId = useLocation();
  const { cars } = carId.state || {};

  const fetch = () => {
    dispatch(allCarsDisplay());
  }

  useEffect(() => {
    fetch()    
  }, [dispatch])

  useEffect(() => {
    if(allCars){
      if(!cars){
        setCar(allCars[0])
      }else{
        const selectedCar = allCars.find((car) => car.id === cars);
        if (selectedCar) {
          setCar(selectedCar);
        }
      }
    }
  }, [cars, allCars])

  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  if(allCars){
    allCars.map((cars) => {
      const item = {
        imgSrc: "img/car-rent-1.png",
        model: cars.model,
        year: cars.year,
        transmission: cars.transmission,
        mileage: (cars.kms_driven/1000)+"K",
        price: cars.price_per_day,
        id: cars.id
      }
      carItems.push(item)
    })
  }

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

  const today = new Date().toISOString().split("T")[0];
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const currentTime = getCurrentTime();
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const [date, setDate] = useState(`${year}-${month}-${day}`);
  const [time, setTime] = useState(`${hours}:${minutes}`);

  return (
    <div>
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
      <div className="container-fluid pt-5" id="main-container" ref={sectionRef}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <h1 className="display-4 text-uppercase mb-5">
                {car.model}
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
              <p style={{textAlign: "justify"}}>
                {car.description}
              </p>
              <div className="row pt-2">
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-car text-primary mr-2" />
                  <span>Model: {car.year}</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-cogs text-primary mr-2" />
                  <span>{car.transmission}</span>
                </div>
                <div className="col-md-3 col-6 mb-2">
                  <i className="fa fa-road text-primary mr-2" />
                  <span>{car.mileage}km/liter</span>
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
      <div className="container-fluid pb-5">
        {(!isLoading && allCars) ? 
        <div className="container pb-5">
        <h2 className="mb-4">Related Cars</h2>
        <RelatedCarousel
          carItems={carItems}
          carouselOptions={carouselOptions}
        />
      </div> : <h1>Loading....</h1> }
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

export default Detail;
