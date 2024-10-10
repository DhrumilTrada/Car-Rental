import React, { useEffect, useState } from "react";
import Carousel, { handleScrollToTop } from "../Carousels/Carousel";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomDatePicker from "../React UI/DatePicker";
import { getCar, reset } from "../features/cars_fetch/carSlice";
import { toast } from "react-toastify";
import axios from "axios";

function Booking() {
  const access = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).access
    : "";
  const refresh = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).refresh
    : "";
  const dispatch = useDispatch();
  const [userDetails, setUser] = useState({});
  const { carById, locations, isLoading, isError, message } = useSelector(
    (state) => state.cars
  );
  const navigate = useNavigate();
  const car_id = useLocation();
  const { carIndex, pickup_date } = car_id.state ? car_id.state : "";
  const [car, setCar] = useState({});
  const [booking, setBooking] = useState({
    email: null,
    phone_number: null,
    address: null,
    driving_license_number: null,
    license_expiry_date: null,
    car_name: null,
    pickup_date: null,
    end_date: null,
    total_price: null,
    status: null,
  });
  const [formdata, setFormData] = useState({
    phone_number: null,
    address: null,
    driving_license_number: null,
    license_expiry_date: null,
  });
  const [date, setDate] = useState("");

  const { phone_number, address, driving_license_number, license_expiry_date } =
    formdata;
  console.log(date);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const getUserInfo = async (token) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user-details/",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      if (refresh) {
        try {
          const newToken = await axios.post(
            "http://127.0.0.1:8000/api/v1/auth/jwt/refresh/",
            { refresh: refresh },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const newAccessToken = newToken.data.access;
          localStorage.setItem(
            "user",
            JSON.stringify({ refresh: refresh, access: newAccessToken })
          );
          toast.success("Generated a new access token for login.");
          const retryResponse = await axios.post(
            "http://127.0.0.1:8000/user-details/",
            {},
            {
              headers: {
                Authorization: `Bearer ${newAccessToken}`,
              },
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
    if (carById) {
      dispatch(reset());
    }
    if (carIndex) {
      dispatch(getCar(carIndex));
    } else {
      dispatch(getCar(6));
    }
    getUserInfo(access);
  }, []);

  useEffect(() => {
    if (carById) {
      setCar(carById);
    }
  }, [dispatch, carById]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{message}</h1>;
  }

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleBooking = () => {
    setBooking({
      email: userDetails.email,
      phone_number: phone_number,
      address: address,
      driving_license_number: driving_license_number,
      license_expiry_date: license_expiry_date,
      car_name: car.model,
      pickup_date: pickup_date,
      end_date: date,
      total_price: 500,
      status: "Confirmed",
    });
    const book = Object.values(booking).every(
      (val) => val !== null && val !== ""
    );
    if (book) {
      console.log("In if block")
      const bookCar = async () => {
        try {
          const response = await axios.post(
            "http://localhost:8000/customer-booking-create/",
            booking,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          toast.success("Booking confirmed successfully");
          navigate("/")
        } catch (error) {
          if (error.response) {
            toast.error(error.response.data.detail);
          } else {
            console.log("Failed to book car:", error);
          }
        }
      };
      bookCar();
      console.log("done");
    }
  };

  // console.log(booking);
  // console.log(formdata);

  return (
    <div>
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">
          Car Booking
        </h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <Link to="/" className="text-white">
              Home
            </Link>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">Car Booking</h6>
        </div>
      </div>
      {!isLoading && car ? (
        <div className="container-fluid pt-5">
          <div className="container pt-5 pb-3">
            <h1 className="display-4 text-uppercase mb-5">{car.model}</h1>
            <div className="row align-items-center pb-2">
              <div className="col-lg-6 mb-4">
                <img className="img-fluid" src={car.image} alt="" />
              </div>
              <div className="col-lg-6 mb-4">
                <h1 className="mb-2">{car.brand}</h1>
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
                <p style={{ textAlign: "justify" }}>{car.description}</p>
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
      ) : (
        <h1>Loading</h1>
      )}
      <div className="container-fluid pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="mb-4 text-center">Personal Details</h2>
              <div className="mb-5">
                {userDetails ? (
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
                        <span className="tooltip-text">
                          This field is disabled
                        </span>
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
                        <span className="tooltip-text">
                          This field is disabled
                        </span>
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
                        <span className="tooltip-text">
                          This field is disabled
                        </span>
                      </div>
                      <div className="col-6 form-group">
                        <input
                          type="text"
                          className="form-control p-4"
                          placeholder="Mobile Number"
                          value={phone_number ? phone_number : ""}
                          onChange={handleChange}
                          name="phone_number"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 form-group">
                        <input
                          type="text"
                          className="form-control p-4"
                          placeholder="Your Driving License Number"
                          value={
                            driving_license_number ? driving_license_number : ""
                          }
                          onChange={handleChange}
                          name="driving_license_number"
                          required
                        />
                      </div>
                      <div className="col-6 form-group">
                        <input
                          type="text"
                          className="form-control p-4"
                          placeholder="Your Driving License Expiry"
                          value={license_expiry_date ? license_expiry_date : ""}
                          onChange={handleChange}
                          name="license_expiry_date"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 form-group">
                        <input
                          type="text"
                          className="form-control p-4"
                          placeholder="Your Driving License Expiry"
                          value={`Pickup Date: ${pickup_date}`}
                          disabled
                        />
                      </div>
                      <div className="col-6 form-group">
                        <CustomDatePicker
                          minDate={pickup_date}
                          onDateChange={handleDateChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="address"
                        className="form-control py-3 px-4"
                        placeholder="Address: "
                        required="required"
                        value={address || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                ) : (
                  ""
                )}

                <h2 className="mb-4 text-center">Booking Details</h2>
                <div className="mb-5">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-6 mb-2">
                      <div className="service-item active d-flex flex-column px-4 mb-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <div
                            className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                            style={{ width: "80px", height: "80px" }}
                          >
                            <i className="fa fa-2x fa-car text-secondary" />
                          </div>
                          <h3 className="text-uppercase text-light mb-3">
                            {car.model}
                          </h3>
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
                              <span className="font-weight-bold">
                                Transmission
                              </span>
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
                              <span className="font-weight-bold">
                                Price: {car.price_per_day}{" "}
                                <span className="text-muted ml-2">
                                  (inc of all taxes)
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <button
                  className="btn btn-block btn-primary py-3"
                  onClick={handleBooking}
                >
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
