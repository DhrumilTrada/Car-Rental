import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialCarousel = ({ testimonials }) => {
  const options = {
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    center: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1, margin: 10 },
      600: { items: 2, margin: 15 },
      1000: { items: 3, margin: 20 },
    },
  };

  return (
    <div className="container pb-5">
      <div className="container pb-5">
        <h1 className="display-4 text-uppercase text-center mb-5">Our Client's Say</h1>
        <OwlCarousel className="owl-carousel testimonial-carousel" {...options}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item d-flex flex-column justify-content-center px-4" key={index}>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <img className="img-fluid ml-n4" src={testimonial.image} alt={testimonial.name} />
                <h1 className="display-2 text-white m-0 fa fa-quote-right"></h1>
              </div>
              <h4 className="text-uppercase mb-2">{testimonial.name}</h4>
              <i className="mb-2">{testimonial.profession}</i>
              <p className="m-0">{testimonial.text}</p>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
