import React from "react";
import TestimonialCarousel from "./Carousels/TestimonialCarousel";
import Carousel, { handleScrollToTop } from "./Carousels/Carousel";

function Testimonial() {
  const testimonials = [
    {
      image: "img/testimonial-1.jpg",
      name: "Client Name 1",
      profession: "Profession 1",
      text: "Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed",
    },
    {
      image: "img/testimonial-2.jpg",
      name: "Client Name 2",
      profession: "Profession 2",
      text: "Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed",
    },
    {
      image: "img/testimonial-3.jpg",
      name: "Client Name 3",
      profession: "Profession 3",
      text: "Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed",
    },
    {
      image: "img/testimonial-4.jpg",
      name: "Client Name 4",
      profession: "Profession 4",
      text: "Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed",
    },
  ];

  return (
    <div>
      {/* Page Header Start */}
      <div className="container-fluid page-header">
        <h1 className="display-3 text-uppercase text-white mb-3">
          Testimonial
        </h1>
        <div className="d-inline-flex text-white">
          <h6 className="text-uppercase m-0">
            <a className="text-white">Home</a>
          </h6>
          <h6 className="text-body m-0 px-3">/</h6>
          <h6 className="text-uppercase text-body m-0">Testimonial</h6>
        </div>
      </div>
      {/* Page Header Start */}
      {/* Testimonial Start */}
      <TestimonialCarousel testimonials={testimonials} />
      <Carousel />
      {/* Testimonial End */}
      {/* Back to Top */}
      <button
        onClick={handleScrollToTop}
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up" />
      </button>
    </div>
  );
}

export default Testimonial;
