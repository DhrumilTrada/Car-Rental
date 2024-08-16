import React from "react";
import Carousel, { handleScrollToTop } from "./Carousels/Carousel";

const HomeCarousel = ({
  items,
  prevControlStyle = { width: "42px", height: "42px" },
  nextControlStyle = { width: "42px", height: "42px" },
  carouselId = "header-carousel",
  containerStyle = { marginBottom: "90px" },
}) => {
  return (
    <div className="container-fluid p-0" style={containerStyle}>
      <div id={carouselId} className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {items.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img className="w-100" src={item.imageSrc} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                  <h4 className="text-white text-uppercase mb-md-3">
                    {item.title}
                  </h4>
                  <h1 className="display-1 text-white mb-md-4">
                    {item.subtitle}
                  </h1>
                  <a
                    href={item.buttonLink}
                    className="btn btn-primary py-md-3 px-md-5 mt-2"
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href={`#${carouselId}`}
          data-slide="prev"
        >
          <div className="btn btn-dark" style={prevControlStyle}>
            <span className="carousel-control-prev-icon mb-n3 mr-n2 ml-n2" />
          </div>
        </a>
        <a
          className="carousel-control-next"
          href={`#${carouselId}`}
          data-slide="next"
        >
          <div className="btn btn-dark" style={nextControlStyle}>
            <span className="carousel-control-next-icon mb-n3 mr-n2 ml-n2" />
          </div>
        </a>
      </div>
    </div>
  );
};

function Index() {
  const carouselItems = [
    {
      imageSrc: "img/carousel-1.jpg",
      title: "Rent A Car",
      subtitle: "Best Rental Cars In Your Location",
      buttonText: "Reserve Now",
      buttonLink: "#",
    },
    {
      imageSrc: "img/carousel-2.jpg",
      title: "Rent A Car",
      subtitle: "Quality Cars with Unlimited Miles",
      buttonText: "Reserve Now",
      buttonLink: "#",
    },
  ];

  return (
    <div>
      <HomeCarousel items={carouselItems} />
      <button
        onClick={handleScrollToTop}
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="fa fa-angle-double-up" />
      </button>
    </div>
  );
}

export default Index;
