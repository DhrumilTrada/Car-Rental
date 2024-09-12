import React from 'react';
import { Link } from 'react-router-dom';

const RentItem = ({ imgSrc, model, year, transmission, mileage, price, cars }) => {
  return (
    <div className="rent-item">
      <img className="img-fluid mb-4" src={imgSrc} alt={model} />
      <h4 className="text-uppercase mb-4">{model}</h4>
      <div className="d-flex justify-content-center mb-4">
        <div className="px-2">
          <i className="fa fa-car text-primary mr-1" />
          <span>{year}</span>
        </div>
        <div className="px-2 border-left border-right">
          <i className="fa fa-cogs text-primary mr-1" />
          <span>{transmission}</span>
        </div>
        <div className="px-2">
          <i className="fa fa-road text-primary mr-1" />
          <span>{mileage}</span>
        </div>
      </div>
      <Link className="btn btn-primary px-3" state={{ cars, scrollTo: "main-container" }} to={{ pathname: "/details" }}>
        {price}/Day
      </Link>
    </div>
  );
};

export default RentItem;
