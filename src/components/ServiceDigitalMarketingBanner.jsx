import React from "react";
import heroBg from '../assets/img/bg/hero-bg02.jpg';
import heroRightImg from '../assets/img/hero/Digital-Marketing-Process.png';
const ServiceDigitalMarketingBanner = () => {
  return (
    <div>
 <section
      className="hero o-hidden hero-style-two pos-rel pt-140 bg_img"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <div className="hero_wrap pt-40">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="xb-hero">
                <h1
                  className="xb-item--title wow fadeInUp"
                  data-wow-duration="600ms"
                >
                  Digital marketing services for SEO, PPC,{' '}
                  <span>Social Media Marketing,</span>
                </h1>

                <ul
                  className="xb-item--item list-unstyled wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="600ms"
                >
                  <li>
                    <i className="fa fa-check"></i> Discovery & Planning
                  </li>
                  <li>
                    <i className="fa fa-check"></i> Keyword Research & Analysis
                  </li>
                  <li>
                    <i className="fa fa-check"></i> Technical SEO Audit
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

            {/* Right Image */}
            <div className="col-lg-6">
              <div className="hero-right_img pos-rel">
                <img
                  className="wow fadeInRight"
                  data-wow-duration="600ms"
                  src={heroRightImg}
                  alt="Digital Marketing"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
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

export default ServiceDigitalMarketingBanner;
