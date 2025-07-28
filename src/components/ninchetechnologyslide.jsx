import React, { Component } from 'react';
import heroBg from '../assets/img/heroBg.png'; // or whatever the correct path is
// ✅ Add the import at the top of the file
import nicheImage from '../assets/img/niche-img.png'; // or correct path

export class ninchetechnologyslide extends Component {
  render() {
    return (
      <div>
          <section
          className="hero o-hidden hero-style-two pos-rel pt-120 bg_img"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="container">
            <div className="hero_wrap pt-40">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="xb-hero">
                    <h1
                      className="xb-item--title wow fadeInUp"
                      data-wow-duration="600ms"
                    >
                      Emerging Technology Company Powered by Experts{" "}
                      <span>in Top Trending Technologies</span>
                    </h1>
                    <p
                      className="xb-item--content wow fadeInUp"
                      data-wow-delay="100ms"
                      data-wow-duration="600ms"
                    >
                      is your business ready to grow with emerging technologies?
                    </p>
                    <ul
                      className="xb-item--item list-unstyled wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="600ms"
                    >
                      <li>
                        <i className="fa fa-check"></i> ERP APPLICATION
                      </li>
                      <li>
                        <i className="fa fa-check"></i> E-Commerce
                      </li>
                      <li>
                        <i className="fa fa-check"></i> Healthcare
                      </li>
                    </ul>
                    <div
                      className="xb-btn mt-60 wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="600ms"
                    >
                      <a
                        href="https://worleyventure.com/contact-us"
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
                      src={nicheImage}
                      alt=""
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
  }
}

export default ninchetechnologyslide;
