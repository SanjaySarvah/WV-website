import React from "react";
// import from bgimage ""

import heroBg from "../assets/img/bg/hero-bg02.jpg";
import devopsbannerimg from "../assets/img/hero/aws-devops-banner.png";

const TechnologiesdevopsBanner = () => {
  return (
    <div>
        <section
      className="hero o-hidden hero-style-two pos-rel pt-140 bg_img"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <div className="hero_wrap pt-40">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-lg-6">
              <div className="xb-hero">
                <h1
                  className="xb-item--title wow fadeInUp"
                  data-wow-duration="600ms"
                >
                  Transform Your Business with <br />
                  <span>Industry-Leading DevOps Solutions</span>
                </h1>

                <div
                  className="xb-btn mt-60 wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="600ms"
                >
                  <a
                    href="contact-us.html"
                    className="thm-btn thm-btn--aso thm-btn--aso_yellow"
                  >
                    Book a free consultation
                  </a>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="col-lg-6">
              <div className="hero-right_img pos-rel">
                <img
                  className="wow fadeInRight"
                  data-wow-duration="600ms"
                  src={devopsbannerimg}
                  alt="DevOps Solutions"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Icon */}
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

    export default TechnologiesdevopsBanner;