import React from "react";
import ctaHeroImg from "../assets/img/hero/cd-hero_img.png";
import Buttonconsultation from "./Buttonconsultation";

const Ninachetechnologiesbottomsection = () => {
  return (


    <div>
      <section className="testimonial pt-50 pb-40">
        <div className="container">
          <div className="cta-wrap">
            <div className="cta-inner ul_li_between">
              <div
                className="xb-item--holder wow fadeInLeft"
                data-wow-delay="100ms"
                data-wow-duration="600ms"
              >
                <h2 className="xb-item--title">
                  QUALITY GROWS WITH EXPERIENCE
                </h2>
                <span className="xb-item--content">
                  accessible & affordable for small & medium enterprises
                </span>
                {/* <div className="xb-btn mt-45">
                  <a
                    href="#"
                    className="thm-btn thm-btn--aso thm-btn--aso_white"
                  >
                    Book a free consultation
                  </a>
                </div> */}
                <Buttonconsultation ></Buttonconsultation>
              </div>

              <div
                className="cta-right_img wow fadeInRight ninachetech_img"
                data-wow-delay="150ms"
                data-wow-duration="600ms"
              >
                <img
                  className="updown"
                  src={ctaHeroImg}
                  alt="Call to Action Visual"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ninachetechnologiesbottomsection;


