import React, { useEffect } from "react";
import About from "./components/templates/About";
import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer";
import Car from "./components/templates/Car";
import Service from "./components/templates/Service";
import Detail from "./components/templates/Detail";
import Contact from "./components/templates/Contact";
import Testimonial from "./components/templates/Testimonial";
import Booking from "./components/templates/Booking";
import Team from "./components/templates/Team";
import Index from "./components/templates/Index";
import $ from "jquery";

function App() {
  useEffect(() => {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    });
  }, []);
  return (
    <>
      <Header />
      <Car />
      <Footer />
    </>
  );
}

export default App;
