import React from 'react'
import Carousel from './Carousels/Carousel'
import TeamCarousel from './Carousels/TeamCarousel';

function Team() {

    const imageArray = [
        "/img/vendor-1.png",
        "/img/vendor-2.png",
        "/img/vendor-3.png",
        "/img/vendor-4.png",
        "/img/vendor-5.png",
        "/img/vendor-6.png",
        "/img/vendor-7.png",
        "/img/vendor-8.png",
      ];

      const teamMembers = [
        {
          imgSrc: 'img/team-1.jpg',
          name: 'John Doe',
          designation: 'CEO',
          socialLinks: {
            twitter: '#',
            facebook: '#',
            linkedin: '#',
          },
        },
        {
          imgSrc: 'img/team-2.jpg',
          name: 'Jane Smith',
          designation: 'CTO',
          socialLinks: {
            twitter: '#',
            facebook: '#',
            linkedin: '#',
          },
        },
        {
          imgSrc: 'img/team-3.jpg',
          name: 'Mike Johnson',
          designation: 'CFO',
          socialLinks: {
            twitter: '#',
            facebook: '#',
            linkedin: '#',
          },
        },
        {
          imgSrc: 'img/team-4.jpg',
          name: 'Sara Williams',
          designation: 'COO',
          socialLinks: {
            twitter: '#',
            facebook: '#',
            linkedin: '#',
          },
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
    

  return (
    <div>
  {/* Page Header Start */}
  <div className="container-fluid page-header">
    <h1 className="display-3 text-uppercase text-white mb-3">The Team</h1>
    <div className="d-inline-flex text-white">
      <h6 className="text-uppercase m-0"><a className="text-white" href>Home</a></h6>
      <h6 className="text-body m-0 px-3">/</h6>
      <h6 className="text-uppercase text-body m-0">The Team</h6>
    </div>
  </div>
  {/* Page Header Start */}
  {/* Team Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <h1 className="display-4 text-uppercase text-center mb-5">Meet Our Team</h1>
      <TeamCarousel teamMembers={teamMembers} carouselOptions={carouselOptions} />
    </div>
  </div>
  {/* Team End */}
  {/* Vendor Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <Carousel images={imageArray}/>
    </div>
  </div>

  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up" /></a>

</div>

  )
}

export default Team