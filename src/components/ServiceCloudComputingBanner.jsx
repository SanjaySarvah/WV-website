import React from "react";
import heroBg from "../assets/img/bg/hero-bg02.jpg";
import heroImage from "../assets/img/hero/cloud-computing.png";
const ServiceCloudComputingBanner = () => {
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
                    A Complete Cloud Infrastructure Platform for{" "}
                    <span>Every Workload</span>
                  </h1>

                  <ul
                    className="xb-item--item list-unstyled wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="600ms"
                  >
                    <li>
                      <i className="fa fa-check"></i> IT
                    </li>
                    <li>
                      <i className="fa fa-check"></i> FINANCIAL
                    </li>
                    <li>
                      <i className="fa fa-check"></i> HEALTHCARE
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
                    src={heroImage}
                    alt="Cloud Computing"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Arrow */}
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

export default ServiceCloudComputingBanner;
