import React from 'react';
import heroImage from '../assets/img/hero/image-web-corp-solutions-automotive.png';
import backgroundImage from '../assets/img/bg/hero-bg02.jpg'; // Adjust paths as needed

const IndustriesAutomotiveBanner = () => {
  return (
    <div>
        <section
      className="hero o-hidden hero-style-two pos-rel pt-140 bg_img"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="hero_wrap pt-40">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="xb-hero">
                <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms">
                  Ready For The Digital Transformation <br />
                  <span> In Automotive?</span>
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

            <div className="col-lg-6">
              <div className="hero-right_img pos-rel">
                <img
                  className="wow fadeInRight"
                  data-wow-duration="600ms"
                  src={heroImage}
                  alt="Automotive Digital Transformation"
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
    
    export default IndustriesAutomotiveBanner;