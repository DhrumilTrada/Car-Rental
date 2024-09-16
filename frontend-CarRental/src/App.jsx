import React, { useEffect } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import Layout from "./Layout";
import Index from "./components/templates/Endpoints/Index";
import About from "./components/templates/Endpoints/About";
import Booking from "./components/templates/Endpoints/Booking";
import Car from "./components/templates/Endpoints/Car";
import Contact from "./components/templates/Endpoints/Contact";
import Detail from "./components/templates/Endpoints/Detail";
import Login from "./components/templates/Authentication/Login";
import Service from "./components/templates/Endpoints/Service";
import Team from "./components/templates/Endpoints/Team";
import Testimonial from "./components/templates/Endpoints/Testimonial";
import LoginPage from "./components/templates/Authentication/Login1";
import RegisterPage from "./components/templates/Authentication/RegisterPage";
import ActivatePage from "./components/templates/Authentication/ActivatePage";
import ResetPasswordPage from "./components/templates/Authentication/ResetPasswordPage"
import ResetPasswordPageConfirm from "./components/templates/Authentication/ResetPasswordPageConfirm"
import { ToastContainer } from"react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import $ from "jquery";

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
          <Route path="booking" element={<Booking />} />
          <Route path="car_display" element={<Car />} />
          <Route path="details" element={<Detail />} />
          <Route path="service" element={<Service />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonials" element={<Testimonial />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/activate/:uid/:token" element={<ActivatePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordPageConfirm />} />
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
