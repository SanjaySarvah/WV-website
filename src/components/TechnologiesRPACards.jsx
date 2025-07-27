import React from "react";
import patternimg from "../assets/img/shape/pattern.png";
import processicon from "../assets/img/icon/process-icon.svg"

import search01 from "../assets/img/icon/search01.svg"
import usericon from "../assets/img/icon/user-icon.png"
import clipboar02 from "../assets/img/icon/clipboar02.svg"
import medalstar from "../assets/img/icon/medal-star.svg"
import trangleshape02 from "../assets/img/shape/trangle-shape02.png"
import trangleshape03 from "../assets/img/shape/trangle-shape03.png"

import cardbg from "../assets/img/hero/image_processing20240414-31742-n6i1th.gif"




const TechnologiesRPACards = () => {
  return (
    <div>
      <section
      className="process pt-130 pb-100 pos-rel"
      style={{ backgroundColor: '#fcc58d' }}
    >
      <div className="container">
        <div className="sec-title--two text-center mb-90">
          <div
            className="sub-title sub-title--strock wow fadeInDown"
            data-wow-duration="600ms"
          >
            <img src={processicon} alt="" />
            Why Hire RPA Developer From Worley Ventures?
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            Choose Colan Infotech’s RPA developers to build innovative RPA
            solutions with UiPath integration services, Automation Anywhere,
            and other providers. Our expertise as a Robotic Process Automation
            services company ensures seamless automation tailored to your
            business needs.
          </h2>
        </div>

        <div className="row flex-row-reverse">
          {/* Right Side Image */}
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div
                className="sa-process-image wow fadeInRight"
                data-wow-duration="600ms"
              >
                <img
                  className="updown"
                  src={cardbg}
                  alt=""
                />
              </div>
              <div className="process_shape">
                <img src={patternimg} alt="" />
              </div>
            </div>
          </div>

          {/* Left Side Content */}
          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* Item 1 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={search01} alt="" />
                </div>
                <h4 className="xb-item--title">RPA Design and Development:</h4>
                <p className="xb-item--contact">
                  Get custom automation tailored to your business needs. As a
                  trusted RPA solution provider, we develop automation
                  strategies that handle repetitive tasks, allowing your team
                  to focus on more important work. Our RPA development services
                  ensure seamless automation functionalities for enhanced
                  efficiency.
                </p>
                <span className="xb-item--number">01</span>
              </div>

              {/* Item 2 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={usericon} alt="" />
                </div>
                <h4 className="xb-item--title">RPA Consulting:</h4>
                <p className="xb-item--contact">
                  Benefit from our top-notch RPA consulting services to pinpoint
                  and harness automation opportunities. Have expert guidance to
                  optimize workflows and maximize ROI. We implement proven
                  strategies to suit your unique business requirements. Propel
                  your operations to the next level.
                </p>
              </div>

              {/* Item 3 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={clipboar02} alt="" />
                </div>
                <h4 className="xb-item--title">RPA Process Management:</h4>
                <p className="xb-item--contact">
                  Ensure smooth and efficient workflows with Colan Infotech’s
                  comprehensive RPA process management. Oversee and optimize
                  automated tasks with precision. Achieve consistent performance
                  and continuous improvement.
                </p>
              </div>

              {/* Item 4 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={medalstar} alt="" />
                </div>
                <h4 className="xb-item--title">Bot Implementation:</h4>
                <p className="xb-item--contact">
                  Implement bots with precision and ease through our RPA service
                  providers. Ensure a smooth transition from manual to automated
                  processes. Increase accuracy and reduce operational costs. Let
                  our RPA experts handle your bot implementation for optimal
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src={trangleshape02} alt="" />
        </div>
        <div className="shape shape--two">
          <img src={trangleshape03} alt="" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default TechnologiesRPACards;
