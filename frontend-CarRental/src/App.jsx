import React, { useEffect } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import Layout from "./Layout";
import Index from "./components/templates/Endpoints/Index";
import About from "./components/templates/Endpoints/About";
import Booking from "./components/templates/Endpoints/Booking";
import Car from "./components/templates/Endpoints/Car";
import Contact from "./components/templates/Endpoints/Contact";
import Detail from "./components/templates/Endpoints/Detail";
import Service from "./components/templates/Endpoints/Service";
import Team from "./components/templates/Endpoints/Team";
import Testimonial from "./components/templates/Endpoints/Testimonial";
import LoginPage from "./components/templates/Authentication/Login1";
import ResetPasswordPage from "./components/templates/Authentication/ResetPassword";
import ResetPasswordConfirm from "./components/templates/Authentication/ResetPasswordConfirm";
import Protected from "./components/templates/Authentication/Protected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import $ from "jquery";
import CustomerDetails from "./components/templates/Endpoints/CustomerDetails";
import ActivationPage from "./components/templates/Authentication/Activation";

function App() {
  useEffect(() => {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".back-to-top").css("visibility", "visible").fadeIn("slow");
      } else {
        $(".back-to-top").css("visibility", "hidden").fadeOut("slow");
      }
    });
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Protected Component={Booking} />} />
          <Route path="car_display" element={<Car />} />
          <Route path="details" element={<Detail />} />
          <Route path="service" element={<Service />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonials" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detailss" element={<CustomerDetails />} />
        <Route path="/activate/:uid/:token" element={<ActivationPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
