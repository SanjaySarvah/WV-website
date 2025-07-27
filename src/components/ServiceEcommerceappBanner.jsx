import React from "react";
import Ecommockup from "../assets/img/hero/ecommerce-mockup-img.png"
const ServiceEcommerceappBanner = () => {
  return (
    <div>
<section
      className="hero o-hidden hero-style-two pos-rel pt-140 bg_img"
      style={{ backgroundImage: 'url(/assets/img/bg/hero-bg02.jpg)' }}
    >
      <div className="container">
        <div className="hero_wrap pt-40">
          <div className="row align-items-center">
            {/* Left Text Column */}
            <div className="col-lg-6">
              <div className="xb-hero">
                <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms">
                  Transform your business with <br />
                  <span>our ecommerce software development!</span>
                </h1>

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

            {/* Right Image Column */}
            <div className="col-lg-6">
              <div className="hero-right_img pos-rel">
                <img
                  className="wow fadeInRight"
                  data-wow-duration="600ms"
                  src= {Ecommockup}
                  alt="Ecommerce Mockup"
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

export default ServiceEcommerceappBanner;
