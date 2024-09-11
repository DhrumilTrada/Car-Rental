import React, { useEffect, useState } from "react";
import Carousel, { handleScrollToTop } from "../Carousels/Carousel";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { availableAtDate, viewLocations, reset } from '../features/cars_fetch/carSlice';

function Car() {
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
  const { carsAtDate, locations, isLoading, isError, message } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(viewLocations());
    dispatch(availableAtDate(currentDate));
  }, [dispatch, currentDate]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{message}</h1>;
  }
  
  return (
    <>
      <div>
        <div className="container-fluid page-header">
          <h1 className="display-3 text-uppercase text-white mb-3">
            Car Listing
          </h1>
          <div className="d-inline-flex text-white">
            <h6 className="text-uppercase m-0">
              <Link to="/" className="text-white">
                Home
              </Link>
            </h6>
            <h6 className="text-body m-0 px-3">/</h6>
            <h6 className="text-uppercase text-body m-0">Car Listing</h6>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container pt-5 pb-3">
            <h1 className="display-4 text-uppercase text-center mb-5">
              Find Your Car
            </h1>
            <div className="row">
              {(!isLoading && carsAtDate && carsAtDate.available && locations) ? carsAtDate.available.map((car) => (
                <div className="col-lg-4 col-md-6 mb-2" key={car.id}>
                  <div className="rent-item mb-4">
                    <img
                      className="img-fluid mb-4"
                      src="img/car-rent-5.png"
                    />
                    <h4 className="text-uppercase mb-2">{car.model}</h4>
                    {locations.filter((loc) => loc.id === car.pickup_location)?.map((loc) => (  
                      <h4 key={loc.id} className="text-uppercase mb-3" style={{fontSize:"12px"}}>Location: {loc.name}</h4>
                    ))}
                    <div className="d-flex justify-content-center mb-4">
                      <div className="px-2">
                        <i className="fa fa-car text-primary mr-1" />
                        <span>{car.year}</span>{" "}
                      </div>
                      <div className="px-2 border-left border-right">
                        <i className="fa fa-cogs text-primary mr-1" />
                        <span>{car.transmission}</span>{" "}
                      </div>
                      <div className="px-2">
                        <i className="fa fa-road text-primary mr-1" />
                        <span>{car.kms_driven/1000}K</span>{" "}
                      </div>
                    </div>
                    <Link to='/booking' state={{ carIndex: car.id }}  className="btn btn-primary px-3">
                      {car.price_per_day}/Day
                    </Link>{" "}
                  </div>
                </div>
              )) : <h1>Fetching Data</h1>}
              {(!isLoading && carsAtDate && carsAtDate.unavailable && locations) ? carsAtDate.unavailable.map((car) => (
                  <div className="col-lg-4 col-md-6 mb-2 unavailable" key={car.id}>
                  <div className="rent-item mb-4">
                    <img
                      className="img-fluid mb-4"
                      src="img/car-rent-5.png"
                    />
                    <h4 className="text-uppercase mb-2 model-text">{car.model}</h4>
                    {locations.filter((loc) => loc.id === car.pickup_location)?.map((loc) => (  
                      <h4 key={loc.id} className="text-uppercase mb-3" style={{fontSize:"12px"}}>Location: {loc.name}</h4>
                    ))}
                    <div className="d-flex justify-content-center mb-4">
                      <div className="px-2">
                        <i className="fa fa-car text-primary mr-1" />
                        <span>{car.year}</span>{" "}
                      </div>
                      <div className="px-2 border-left border-right">
                        <i className="fa fa-cogs text-primary mr-1" />
                        <span>{car.transmission}</span>{" "}
                      </div>
                      <div className="px-2">
                        <i className="fa fa-road text-primary mr-1" />
                        <span>{car.kms_driven/1000}K</span>{" "}
                      </div>
                    </div>
                    <a className="btn btn-primary px-3">
                      Booked
                    </a>{" "}
                  </div>
                </div>
              )) : <h1>Fetching Data</h1>}
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row mx-0">
              <div className="col-lg-6 px-0">
                <div
                  className="px-5 bg-secondary d-flex align-items-center justify-content-between"
                  style={{ height: "350px" }}
                >
                  <img
                    className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4"
                    src="img/banner-left.png"
                    alt=""
                  />
                  <div className="text-right">
                    <h3 className="text-uppercase text-light mb-3">
                      Want to be driver?
                    </h3>
                    <p className="mb-4">
                      Lorem justo sit sit ipsum eos lorem kasd, kasd labore
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
                      Lorem justo sit sit ipsum eos lorem kasd, kasd labore
                    </p>
                    <a className="btn btn-primary py-2 px-4">Start Now</a>
                  </div>
                  <img
                    className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4"
                    src="img/banner-right.png"
                    alt=""
                  />
                </div>
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
    </>
  );
}

export default Car;
