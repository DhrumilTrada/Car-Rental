import React from 'react';

const TeamItem = ({ imgSrc, name, designation, socialLinks, isActive }) => {
  return (
    <div className={`team-item ${isActive ? 'active' : ''}`}>
      <img className="img-fluid w-100" src={imgSrc} alt={name} />
      <div className="position-relative py-4">
        <h4 className="text-uppercase">{name}</h4>
        <p className="m-0">{designation}</p>
        <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
          {socialLinks.twitter && (
            <a className="btn btn-lg btn-primary btn-md-square mx-1" href={socialLinks.twitter}>
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {socialLinks.facebook && (
            <a className="btn btn-lg btn-primary btn-md-square mx-1" href={socialLinks.facebook}>
              <i className="fab fa-facebook-f"></i>
            </a>
          )}
          {socialLinks.linkedin && (
            <a className="btn btn-lg btn-primary btn-md-square mx-1" href={socialLinks.linkedin}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamItem;