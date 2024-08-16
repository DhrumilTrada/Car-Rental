import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../../css/carousel.css';


export class Carousel extends Component {
  render() {
    const images = [
      "/img/vendor-1.png",
      "/img/vendor-2.png",
      "/img/vendor-3.png",
      "/img/vendor-4.png",
      "/img/vendor-5.png",
      "/img/vendor-6.png",
      "/img/vendor-7.png",
      "/img/vendor-8.png",
    ];

    return (
      <div>
        <div className="container-fluid">
          <OwlCarousel items={6} autoplay autoplayTimeout={3000} smartSpeed={1500} margin={30} dots loop center className="owl-theme">
            {images.map((image, index) => (
              <div key={index} style={{padding:10, backgroundColor:"aliceblue"}}>
                <img className="img" src={image} alt={`Vendor ${index + 1}`} />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Carousel;

export const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};