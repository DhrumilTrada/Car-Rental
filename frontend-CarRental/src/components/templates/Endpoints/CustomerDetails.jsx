import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerDetails = () => {
    const [customerData, setCustomerData] = useState(null);
    const [userDetails, setUser] = useState({});
    const access = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).access
    : "";
  const refresh = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).refresh
    : "";

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
        getUserInfo(access);
    }, []); 

    const [bookingInfo, setBookingInfo] = useState({})

    const getBookingInfo = async (token) => {
        const response = await axios.post("http://127.0.0.1:8000/customer-booking/", {"customer_email":userDetails.email}, {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        setBookingInfo(response.data)
    }

    useEffect(() => {
        getBookingInfo(access);
    }, [userDetails])

    console.log(bookingInfo)
    console.log(userDetails)

    if (!bookingInfo) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="profile-page">
            <div className="profile-card">
                <div className="profile-header">
                    <img src='https://www.svgrepo.com/show/350417/user-circle.svg' alt="Profile" className="profile-img" />

                    {console.log(customerData)}
                    {/* <p className="designation">{customerData.firstname+" "+customerData.lastname}</p> */}
                </div>

                <div className="profile-info">
                    <h2>Contact Information</h2>
                    {/* <p><strong>Email:</strong> {customerData.email}</p> */}
                    {/* <p><strong>Phone:</strong> {customerData.customer.phone_number}</p> */}

                    <h2>Address</h2>
                    {/* <p>{customerData.customer.address}</p> */}

                    <h2>Driving License</h2>
                    {/* <p><strong>Number:</strong> {customerData.customer.driving_license_number}</p> */}
                    {/* <p><strong>Expiry:</strong> {customerData.customer.license_expiry_date}</p> */}

                    <h2>City & Pincode</h2>
                    {/* <p>{customerData.customer.city+" "+ customerData.customer.pincode}</p> */}

                    {/* Social Icons */}
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetails;
