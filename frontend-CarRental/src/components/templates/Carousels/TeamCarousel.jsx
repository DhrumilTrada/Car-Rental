import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import TeamItem from './TeamItem';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TeamCarousel = ({ teamMembers, carouselOptions }) => {
  return (
        <div className="team-carousel position-relative" style={{ padding: '0 30px' }}>
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {teamMembers.map((member, index) => (
              <TeamItem
                key={index}
                imgSrc={member.imgSrc}
                name={member.name}
                designation={member.designation}
                socialLinks={member.socialLinks}
              />
            ))}
          </OwlCarousel>
        </div>
  );
};

export default TeamCarousel;
