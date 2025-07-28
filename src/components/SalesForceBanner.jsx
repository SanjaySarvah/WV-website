import React from "react";
// import from bgimage ""
import salesforcebannerimg from "../assets/img/bg/hero-bg02.jpg";
import salesforcebannerimage1 from "../assets/img/hero/salesforce_banner.svg"
import "../assets/css/animate.css"
import "../assets/css/main.css"
import Buttonconsultation from "./Buttonconsultation";
const SalesForceBanner = () => {
  return (
    <div>
      <section
        className="hero o-hidden hero-style-two pos-rel pt-120 bg_img"
        style={{ backgroundImage: `url(${salesforcebannerimg})` }}
      >
      <div className="container">
        <div className="hero_wrap pt-40">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="xb-hero">
                <h1 className="xb-item--title wow fadeInUp" data-wow-duration="600ms">
                  Empower Your Business With The Power of <span>Salesforce Platform</span>
                </h1>
                <p
                  className="xb-item--content wow fadeInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="600ms"
                >
                  Is your business ready to grow with emerging technologies?
                </p>
                <ul
                  className="xb-item--item list-unstyled wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="600ms"
                >
                  <li><i className="fa fa-check"></i> Integrating Salesforce with different Platforms</li>
                  <li><i className="fa fa-check"></i> Maximises your Salesforce ROI</li>
                  <li><i className="fa fa-check"></i> Result-Oriented Workflow</li>
                </ul>
                <div
                  className="xb-btn mt-60 wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="600ms"
                >
                  {/* <Link  className="thm-btn thm-btn--aso thm-btn--aso_yellow">
                    Book a free consultation
                  </Link> */}
                  <Buttonconsultation></Buttonconsultation>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-right_img pos-rel">
                <img
                  className="wow fadeInRight"
                  data-wow-duration="600ms"
                  src={salesforcebannerimage1}
                  alt="Salesforce Banner"
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

export default SalesForceBanner;
