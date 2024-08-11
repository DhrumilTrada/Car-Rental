import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './js/main'
import RelatedCarousel from './RelatedCarousel';
import Carousel from './Carousel';

function Detail() { 
    
    const carItems = [
        {
          imgSrc: 'img/car-rent-1.png',
          model: 'Mercedes Benz R3',
          year: '2015',
          transmission: 'AUTO',
          mileage: '25K',
          price: '$99.00',
        },
        {
          imgSrc: 'img/car-rent-2.png',
          model: 'BMW X5',
          year: '2018',
          transmission: 'AUTO',
          mileage: '30K',
          price: '$120.00',
        },
        {
          imgSrc: 'img/car-rent-3.png',
          model: 'Audi A6',
          year: '2017',
          transmission: 'MANUAL',
          mileage: '20K',
          price: '$110.00',
        },
        {
          imgSrc: 'img/car-rent-4.png',
          model: 'Tesla Model S',
          year: '2020',
          transmission: 'AUTO',
          mileage: '15K',
          price: '$150.00',
        },
      ];
    
      const carouselOptions = {
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      };

      const imageArray = [
        "/img/vendor-1.png",
        "/img/vendor-2.png",
        "/img/vendor-3.png",
        "/img/vendor-4.png",
        "/img/vendor-5.png",
        "/img/vendor-6.png",
        "/img/vendor-7.png",
        "/img/vendor-8.png"
      ];

    const [ date, setDate ] = useState(new Date());
    const [ time, setTime ] = useState(new Date())
    const today = new Date().toISOString().split('T')[0];
    const getCurrentTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    const currentTime = getCurrentTime();

  return (
    <div>
  <meta charSet="utf-8" />
  <title>ROYAL CARS - Car Rental HTML Template</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="Free HTML Templates" name="keywords" />
  <meta content="Free HTML Templates" name="description" />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Rubik&display=swap" rel="stylesheet" /> 
  {/* Font Awesome */}
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet" />
  {/* Libraries Stylesheet */}
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
  {/* Customized Bootstrap Stylesheet */}
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  {/* Template Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
  {/* Topbar Start */}
  <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
    <div className="row">
      <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
        <div className="d-inline-flex align-items-center">
          <a className="text-body pr-3" href><i className="fa fa-phone-alt mr-2" />+012 345 6789</a>
          <span className="text-body">|</span>
          <a className="text-body px-3" href><i className="fa fa-envelope mr-2" />info@example.com</a>
        </div>
      </div>
      <div className="col-md-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
          <a className="text-body px-3" href="https://facebook.com/freewebsitecode/">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="text-body px-3" href="https://freewebsitecode.com/">
            <i className="fab fa-twitter" />
          </a>
          <a className="text-body px-3" href="https://freewebsitecode.com/">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="text-body px-3" href="https://freewebsitecode.com/">
            <i className="fab fa-instagram" />
          </a>
          <a className="text-body pl-3" href="https://youtube.com/freewebsitecode/">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid position-relative nav-bar p-0">
    <div className="position-relative px-lg-5" style={{zIndex: 9}}>
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
        <a href="index.html" className="navbar-brand">
          <h1 className="text-uppercase text-primary mb-1">Royal Cars</h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
          <div className="navbar-nav ml-auto py-0">
            <a href="index.html" className="nav-item nav-link">Home</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link">Service</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle active" data-toggle="dropdown">Cars</a>
              <div className="dropdown-menu rounded-0 m-0">
                <a href="car.html" className="dropdown-item">Car Listing</a>
                <a href="detail.html" className="dropdown-item active">Car Detail</a>
                <a href="booking.html" className="dropdown-item">Car Booking</a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
              <div className="dropdown-menu rounded-0 m-0">
                <a href="team.html" className="dropdown-item">The Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
  {/* Search Start */}
  <div className="container-fluid bg-white pt-3 px-lg-5">
    <div className="row mx-n2">
      <div className="col-xl-2 col-lg-2 col-md-6 px-2">
        <select className="custom-select px-4 mb-3" style={{height: '40px'}}>
          <option selected>Pickup Location</option>
          <option value={1}>Location 1</option>
          <option value={2}>Location 2</option>
          <option value={3}>Location 3</option>
        </select>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-6 px-2">
        <select className="custom-select px-4 mb-3" style={{height: '40px'}}>
          <option selected>Drop Location</option>
          <option value={1}>Location 1</option>
          <option value={2}>Location 2</option>
          <option value={3}>Location 3</option>
        </select>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-6 px-2">
        <div className="date mb-3" id="date" data-target-input="nearest">
        <input
                type="date"
                style={{ height: "40px" }}
                className="form-control p-4"
                placeholder="Pickup Date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onClick={() => setDate(today)}
              />
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-6 px-2">
        <div className="time mb-3" id="time" data-target-input="nearest">
        <input
                type="time"
                style={{ height: "40px" }}
                className="form-control p-4"
                placeholder="Pickup Date"
                min={currentTime}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onClick={() => setTime(currentTime)}
              />
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-6 px-2">
        <select className="custom-select px-4 mb-3" style={{height: '40px'}}>
          <option selected>Select A Car</option>
          <option value={1}>Car 1</option>
          <option value={2}>Car 1</option>
          <option value={3}>Car 1</option>
        </select>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-6 px-2">
        <button className="btn btn-primary btn-block mb-3" type="submit" style={{height: '40px'}}>Search</button>
      </div>
    </div>
  </div>
  {/* Search End */}
  {/* Page Header Start */}
  <div className="container-fluid page-header">
    <h1 className="display-3 text-uppercase text-white mb-3">Car Detail</h1>
    <div className="d-inline-flex text-white">
      <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
      <h6 className="text-body m-0 px-3">/</h6>
      <h6 className="text-uppercase text-body m-0">Car Detail</h6>
    </div>
  </div>
  {/* Page Header Start */}
  {/* Detail Start */}
  <div className="container-fluid pt-5">
    <div className="container pt-5">
      <div className="row">
        <div className="col-lg-8 mb-5">
          <h1 className="display-4 text-uppercase mb-5">Mercedes Benz R3</h1>
          <div className="row mx-n2 mb-3">
            <div className="col-md-3 col-6 px-2 pb-2">
              <img className="img-fluid w-100" src="img/gallery-1.jpg" alt="" />
            </div>
            <div className="col-md-3 col-6 px-2 pb-2">
              <img className="img-fluid w-100" src="img/gallery-2.jpg" alt="" />
            </div>
            <div className="col-md-3 col-6 px-2 pb-2">
              <img className="img-fluid w-100" src="img/gallery-3.jpg" alt="" />
            </div>
            <div className="col-md-3 col-6 px-2 pb-2">
              <img className="img-fluid w-100" src="img/gallery-4.jpg" alt="" />
            </div>
          </div>
          <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
          <div className="row pt-2">
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-car text-primary mr-2" />
              <span>Model: 2015</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-cogs text-primary mr-2" />
              <span>Automatic</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-road text-primary mr-2" />
              <span>20km/liter</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-eye text-primary mr-2" />
              <span>GPS Navigation</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-car text-primary mr-2" />
              <span>Model: 2015</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-cogs text-primary mr-2" />
              <span>Automatic</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-road text-primary mr-2" />
              <span>20km/liter</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-eye text-primary mr-2" />
              <span>GPS Navigation</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-car text-primary mr-2" />
              <span>Model: 2015</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-cogs text-primary mr-2" />
              <span>Automatic</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-road text-primary mr-2" />
              <span>20km/liter</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-eye text-primary mr-2" />
              <span>GPS Navigation</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-5">
          <div className="bg-secondary p-5">
            <h3 className="text-primary text-center mb-4">Check Availability</h3>
            <div className="form-group">
              <select className="custom-select px-4" style={{height: '50px'}}>
                <option selected>Pickup Location</option>
                <option value={1}>Location 1</option>
                <option value={2}>Location 2</option>
                <option value={3}>Location 3</option>
              </select>
            </div>
            <div className="form-group">
              <select className="custom-select px-4" style={{height: '50px'}}>
                <option selected>Drop Location</option>
                <option value={1}>Location 1</option>
                <option value={2}>Location 2</option>
                <option value={3}>Location 3</option>
              </select>
            </div>
            <div className="form-group">
              <div className="date" id="date1" data-target-input="nearest">
              <input
                type="date"
                style={{ height: "40px" }}
                className="form-control p-4"
                placeholder="Pickup Date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onClick={() => setDate(today)}
              />
              </div>
            </div>
            <div className="form-group">
              <div className="time" id="time1" data-target-input="nearest">
              <input
                type="time"
                style={{ height: "40px" }}
                className="form-control px-4 mb-3"
                placeholder="Pickup Time"
                min={currentTime}
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onClick={() => setTime(currentTime)}
              />
              </div>
            </div>
            <div className="form-group">
              <select className="custom-select px-4" style={{height: '50px'}}>
                <option selected>Select Person</option>
                <option value={1}>Person 1</option>
                <option value={2}>Person 2</option>
                <option value={3}>Person 3</option>
              </select>
            </div>
            <div className="form-group mb-0">
              <button className="btn btn-primary btn-block" type="submit" style={{height: '50px'}}>Check Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Detail End */}
  {/* Related Car Start */}
  <div className="container-fluid pb-5">
    <div className="container pb-5">
      <h2 className="mb-4">Related Cars</h2>
      <RelatedCarousel carItems={carItems} carouselOptions={carouselOptions} />
    </div>
  </div>
  {/* Related Car End */}
  {/* Vendor Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <Carousel images={imageArray} />
    </div>
  </div>
  {/* Vendor End */}
  {/* Footer Start */}
  <div className="container-fluid bg-secondary py-5 px-sm-3 px-md-5" style={{marginTop: '90px'}}>
    <div className="row pt-5">
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
        <p className="mb-2"><i className="fa fa-map-marker-alt text-white mr-3" />Location, City, Country</p>
        <p className="mb-2"><i className="fa fa-phone-alt text-white mr-3" />+012 345 67890</p>
        <p><i className="fa fa-envelope text-white mr-3" />info@example.com</p>
        <h6 className="text-uppercase text-white py-2">Follow Us</h6>
        <div className="d-flex justify-content-start">
          <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="https://freewebsitecode.com/"><i className="fab fa-twitter" /></a>
          <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="https://facebook.com/freewebsitecode/"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="https://freewebsitecode.com/"><i className="fab fa-linkedin-in" /></a>
          <a className="btn btn-lg btn-dark btn-lg-square" href="https://youtube.com/freewebsitecode"><i className="fab fa-youtube" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-uppercase text-light mb-4">Usefull Links</h4>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-body mb-2" href="#"><i className="fa fa-angle-right text-white mr-2" />Private Policy</a>
          <a className="text-body mb-2" href="#"><i className="fa fa-angle-right text-white mr-2" />Term &amp; Conditions</a>
          <a className="text-body mb-2" href="#"><i className="fa fa-angle-right text-white mr-2" />New Member Registration</a>
          <a className="text-body mb-2" href="#"><i className="fa fa-angle-right text-white mr-2" />Affiliate Programme</a>
          <a className="text-body mb-2" href="#"><i className="fa fa-angle-right text-white mr-2" />Return &amp; Refund</a>
          <a className="text-body" href="#"><i className="fa fa-angle-right text-white mr-2" />Help &amp; FQAs</a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-uppercase text-light mb-4">Car Gallery</h4>
        <div className="row mx-n1">
          <div className="col-4 px-1 mb-2">
            <a href><img className="w-100" src="img/gallery-1.jpg" alt="" /></a>
          </div>
          <div className="col-4 px-1 mb-2">
            <a href><img className="w-100" src="img/gallery-2.jpg" alt="" /></a>
          </div>
          <div className="col-4 px-1 mb-2">
            <a href><img className="w-100" src="img/gallery-3.jpg" alt="" /></a>
          </div>
          <div className="col-4 px-1 mb-2">
            <a href><img className="w-100" src="img/gallery-4.jpg" alt="" /></a>
          </div>
          <div className="col-4 px-1 mb-2">
            <a href><img className="w-100" src="img/gallery-5.jpg" alt="" /></a>
          </div>
          <div className="col-4 px-1 mb-2">
            <a href><img className="w-100" src="img/gallery-6.jpg" alt="" /></a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="text-uppercase text-light mb-4">Newsletter</h4>
        <p className="mb-4">Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
        <div className="w-100 mb-3">
          <div className="input-group">
            <input type="text" className="form-control bg-dark border-dark" style={{padding: '5px 16px'}} placeholder="Your Email" />
            <div className="input-group-append">
              <button className="btn btn-primary text-uppercase px-3">Sign Up</button>
            </div>
          </div>
        </div>
        <i>Lorem sit sed elitr sed kasd et</i>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark py-4 px-sm-3 px-md-5">
    <p className="mb-2 text-center text-body">© <a href="https://freewebsitecode.com/">Your Site Name</a>. All Rights Reserved.</p>
    <p className="m-0 text-center text-body">Designed by <a href="https://freewebsitecode.com">Free Website Code</a></p>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up" /></a>
  {/* JavaScript Libraries */}
  {/* Template Javascript */}
</div>

  )
}

export default Detail