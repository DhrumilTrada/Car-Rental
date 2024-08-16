import React, { useEffect } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from "./components/templates/About";
import Car from "./components/templates/Car";
import Service from "./components/templates/Service";
import Detail from "./components/templates/Detail";
import Contact from "./components/templates/Contact";
import Testimonial from "./components/templates/Testimonial";
import Booking from "./components/templates/Booking";
import Team from "./components/templates/Team";
import Index from "./components/templates/Index";
import $ from "jquery";
import Layout from "./Layout";

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
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Index />} />
        <Route path='about' element={<About />} />
        <Route path='booking' element={<Booking />} />
        <Route path='car_display' element={<Car />} />
        <Route path='details' element={<Detail />} />
        <Route path='service' element={<Service />} />
        <Route path='team' element={<Team />} />
        <Route path='testimonials' element={<Testimonial />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  )
  return(
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
