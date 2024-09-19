import React, { useEffect, useState } from "react";
import Carousel, { handleScrollToTop } from "../Carousels/Carousel";
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCar, reset } from '../features/cars_fetch/carSlice';
import axios from "axios";

function Booking() {
  const access = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).access : ""
  const refresh = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).refresh : ""
  const dispatch = useDispatch();
  const [userDetails, setUser] = useState({})
  const { carById, locations, isLoading, isError, message } = useSelector((state) => state.cars);
  const car_id = useLocation();
  const { carIndex, pickup_date } = car_id.state ? car_id.state : ""
  const [car, setCar] = useState({})
  const [booking, setBooking] = useState({
    "customer_email": null,
    "car_id": null,
    "pickup_date": null,
    "end_date": null,
    "total_price": null,
    "status": null
  })

  const getUserInfo = async (token) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user-details/",{},{
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );
      setUser(response.data)
    } catch (error) {
      if (refresh) {
        try {
          const newToken = await axios.post(
            "http://127.0.0.1:8000/api/v1/auth/jwt/refresh/",{"refresh":refresh},{
              headers: {
                "Content-Type": "application/json",
              }
            }
          );
          const newAccessToken = newToken.data.access;
          localStorage.setItem(
            "user",
            JSON.stringify({refresh:refresh, access: newAccessToken })
          );
          toast.success("Generated a new access token for login.");
          const retryResponse = await axios.post(
            "http://127.0.0.1:8000/user-details/",{},{
              headers: {
                "Authorization": `Bearer ${newAccessToken}`
              }
            }
          );  
          return retryResponse.data;
        } catch (refreshError) {
          console.error("Failed to refresh token:", refreshError);
          toast.error("Unable to refresh the access token.");
        }
      } else {
        toast.error("No refresh token found.");
      }
    }
  };
  
  useEffect(() => {
    if(carById){
      dispatch(reset())
    }
    if(carIndex){
      dispatch(getCar(carIndex))
    }else{
      dispatch(getCar(1))
    }
    getUserInfo(access)
  }, [])

  useEffect(() => {
    if (carById) {
      setCar(carById)
    }
  }, [dispatch, carById])
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{message}</h1>;
  }

  const handleBooking = () => {
    setBooking({
      customer_email: userDetails.email,
      car_name: car.id,
      pickup_date: pickup_date ? pickup_date : "",
      end_date: null,
      total_price: car.price_per_day,
      status: "Confirmed"
    })
  }

  console.log(booking)

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
      {((!isLoading && car)) ? 
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
            <p style={{textAlign: "justify"}}>
              {car.description}
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
            <span>{car.mileage}km/liter</span>
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
                {userDetails ? 
                <>
                  <div className="row">
                <div className="col-6 form-group tooltip-container">
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="First Name"
                    defaultValue={userDetails.first_name || ""}
                    disabled
                    readOnly
                  />
                  <span className="tooltip-text">This field is disabled</span>
                </div>
                <div className="col-6 form-group tooltip-container">
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="Last Name"
                    defaultValue={userDetails.last_name || ""}
                    disabled
                    readOnly
                  />
                  <span className="tooltip-text">This field is disabled</span>
                </div>
              </div>
              <div className="row">
                <div className="col-6 form-group tooltip-container">
                  <input
                    type="email"
                    className="form-control p-4"
                    placeholder="Your Email"
                    defaultValue={userDetails.email || ""}
                    disabled
                    readOnly
                  />
                  <span className="tooltip-text">This field is disabled</span>
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
                </> : ""}
                <div className="row">
                <div className="col-6 form-group">
                  <input
                    type="email"
                    className="form-control p-4"
                    placeholder="Your Driving Licence Expiry"
                    value={""}
                  />
                </div>
                <div className="col-6 form-group text-right">
                  <input
                    type="button"
                    className="btn btn-primary mt-4"
                    value="Save Customer"
                  />
                </div>
              </div>
              </div>
              <h2 className="mb-4">Booking Detail</h2>
              <div className="mb-5">
                <div className="row">
                <div className="col-6 mb-2">
              <div className="service-item active d-flex flex-column px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="fa fa-2x fa-car text-secondary" />
                  </div>
                  <h3 className="text-uppercase text-light mb-3">{car.model}</h3>
                </div>
                  <div className="table">
                    <div className="row mb-2">
                      <div className="col-6 border-bottom border-top border-left border-right text-center">
                        <span className="font-weight-bold">Model</span>
                      </div>
                      <div className="col-6 border-bottom border-top border-left border-right text-center">
                        <span>{car.model}</span>
                      </div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span className="font-weight-bold">Brand</span>
                      </div>
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span>{car.brand}</span>
                      </div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span className="font-weight-bold">Year</span>
                      </div>
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span>{car.year}</span>
                      </div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span className="font-weight-bold">Mileage</span>
                      </div>
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span>{car.mileage}</span>
                      </div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span className="font-weight-bold">Type</span>
                      </div>
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span>{car.type}</span>
                      </div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span className="font-weight-bold">Transmission</span>
                      </div>
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span>{car.transmission}</span>
                      </div>
                    </div>

                    <div className="row mb-2">
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span className="font-weight-bold">Fuel</span>
                      </div>
                      <div className="col-6 border-bottom border-left border-right text-center">
                        <span>{car.fuel_type}</span>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-12 border-bottom border-left border-right text-center">
                        <span className="font-weight-bold">Price: {car.price_per_day} <span className="text-muted ml-2">(inc of all taxes)</span></span>
                      </div>
                    </div>
                  </div>
                </div>
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
                <button className="btn btn-block btn-primary py-3" onClick={handleBooking}>
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
