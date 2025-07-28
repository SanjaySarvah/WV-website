import React from "react";
// import from bgimage ""
import mobileAppImg from '../assets/img/hero/mobileapp.png';
import bgImage from '../assets/img/bg/hero-bg02.jpg';

const MobileApplicationBanner = () => {
  return (
    <div>
 <section
      className="hero o-hidden hero-style-two pos-rel pt-120 bg_img"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container">
        <div className="hero_wrap pt-40">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="xb-hero">
                <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms">
                  Mobile Application Development{' '}
                  <span>Advanced Technology Development Services</span>
                </h1>
                <p
                  className="xb-item--content wow fadeInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="600ms"
                >
                  (like 0 to 1000 new sales per month kind of results)
                </p>
                <ul
                  className="xb-item--item list-unstyled wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="600ms"
                >
                  <li>
                    <i className="fa fa-check"></i> Resource Planning
                  </li>
                  <li>
                    <i className="fa fa-check"></i> User Experience Structure
                  </li>
                  <li>
                    <i className="fa fa-check"></i> Easy Deployment
                  </li>
                </ul>
                <div
                  className="xb-btn mt-60 wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="600ms"
                >
                  <a
                    href="/contact-us"
                    className="thm-btn thm-btn--aso thm-btn--aso_yellow"
                  >
                    Book a free consultation
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-right_img pos-rel">
                <img
                  className="wow fadeInRight"
                  data-wow-duration="600ms"
                  src={mobileAppImg}
                  alt="Mobile Application"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="banner-scroll-down active">
          <a href="#about" className="scrollspy-btn">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </section>

    </div>
  );
};

export default MobileApplicationBanner;
