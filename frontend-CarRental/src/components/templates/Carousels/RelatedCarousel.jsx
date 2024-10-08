import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import RentItem from './RentItem';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../css/style.css'

const RelatedCarousel = ({ carItems, carouselOptions, onCarouselButtonClick }) => {

  return (
    <div className="related-carousel position-relative" style={{ padding: '0 30px' }}>
      <OwlCarousel className="owl-theme" {...carouselOptions}>
        {carItems.map((car, index) => (
          <RentItem
            key={car.id}
            imgSrc={car.imgSrc}
            model={car.model}
            year={car.year}
            transmission={car.transmission}
            mileage={car.mileage}
            price={car.price}
            cars={car.id}
          />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default RelatedCarousel;
