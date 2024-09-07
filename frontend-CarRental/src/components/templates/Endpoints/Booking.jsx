import React, { useEffect, useState } from "react";
import Carousel, { handleScrollToTop } from "../Carousels/Carousel";
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCar } from '../features/cars_fetch/carSlice';

function Booking() {
  const dispatch = useDispatch();
  const { cars, isLoading, isError, message } = useSelector((state) => state.cars);
  const car_id = useLocation();
  const { carIndex } = car_id.state
  const [car, setCar] = useState({})
  
  useEffect(() => {
    dispatch(getCar(carIndex))
    if(cars){
      setCar(cars)
    }
  }, [])
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{message}</h1>;
  }
  
  return (
    <div>
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">
          Car Booking
        </h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
          <Link to='/' className="text-white">Home</Link>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">Car Booking</h6>
        </div>
      </div>
      {((!isLoading && cars)) ? 
      <div className="container-fluid pt-5">
      <div className="container pt-5 pb-3">
        <h1 className="display-4 text-uppercase mb-5">{car.model}</h1>
        <div className="row align-items-center pb-2">
          <div className="col-lg-6 mb-4">
            <img className="img-fluid" src="img/bg-banner.jpg" alt="" />
          </div>
          <div className="col-lg-6 mb-4">
            <h4 className="mb-2">{car.price_per_day}/Day</h4>
            <div className="d-flex mb-3">
              <h6 className="mr-2">Rating:</h6>
              <div className="d-flex align-items-center justify-content-center mb-1">
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star-half-alt text-primary mr-1" />
                <small>(250)</small>
              </div>
            </div>
            <p>
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
              dolor diam ipsum et, tempor voluptua sit consetetur sit.
              Aliquyam diam amet diam et eos sadipscing labore. Clita erat
              ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
              clita duo justo et tempor consetetur takimata eirmod, dolores
              takimata consetetur invidunt
            </p>
            <div className="d-flex pt-1">
              <h6>Share on:</h6>
              <div className="d-inline-flex">
                <a className="px-2">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="px-2">
                  <i className="fab fa-twitter" />
                </a>
                <a className="px-2">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a className="px-2">
                  <i className="fab fa-pinterest" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-n3 mt-lg-0 pb-4">
          <div className="col-md-3 col-6 mb-2">
            <i className="fa fa-car text-primary mr-2" />
            <span>{car.year}</span>
          </div>
          <div className="col-md-3 col-6 mb-2">
            <i className="fa fa-cogs text-primary mr-2" />
            <span>{car.transmission}</span>
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
    </div>
    : <h1>Loading</h1>}
      <div className="container-fluid pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4">Personal Detail</h2>
              <div className="mb-5">
                <div className="row">
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="First Name"
                      required="required"
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="Last Name"
                      required="required"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 form-group">
                    <input
                      type="email"
                      className="form-control p-4"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="Mobile Number"
                      required="required"
                    />
                  </div>
                </div>
              </div>
              <h2 className="mb-4">Booking Detail</h2>
              <div className="mb-5">
                <div className="row">
                  <div className="col-6 form-group">
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
                  <div className="col-6 form-group">
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
                </div>
                <div className="row">
                  <div className="col-6 form-group">
                    <div
                      className="date"
                      id="date2"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control p-4 datetimepicker-input"
                        placeholder="Pickup Date"
                        data-target="#date2"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                  <div className="col-6 form-group">
                    <div
                      className="time"
                      id="time2"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control p-4 datetimepicker-input"
                        placeholder="Pickup Time"
                        data-target="#time2"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 form-group">
                    <select
                      className="custom-select px-4"
                      style={{ height: "50px" }}
                    >
                      <option defaultValue>Select Adult</option>
                      <option value={1}>Adult 1</option>
                      <option value={2}>Adult 2</option>
                      <option value={3}>Adult 3</option>
                    </select>
                  </div>
                  <div className="col-6 form-group">
                    <select
                      className="custom-select px-4"
                      style={{ height: "50px" }}
                    >
                      <option defaultValue>Select Child</option>
                      <option value={1}>Child 1</option>
                      <option value={2}>Child 2</option>
                      <option value={3}>Child 3</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control py-3 px-4"
                    rows={3}
                    placeholder="Special Request"
                    required="required"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-secondary p-5 mb-5">
                <h2 className="text-primary mb-4">Payment</h2>
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="paypal"
                    />
                    <label className="custom-control-label" htmlFor="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="directcheck"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="directcheck"
                    >
                      Direct Check
                    </label>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="banktransfer"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="banktransfer"
                    >
                      Bank Transfer
                    </label>
                  </div>
                </div>
                <button className="btn btn-block btn-primary py-3">
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container py-5">
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

export default Booking;
