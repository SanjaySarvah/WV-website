import React from "react";
import pattern from "../assets/img/shape/pattern.png";
import triangleshapetwo from "../assets/img/shape/trangle-shape02.png";
import triangleshapethree from "../assets/img/shape/trangle-shape03.png";
import processicon from "../assets/img/icon/process-icon.svg";
import searchicon from "../assets/img/icon/search01.svg";
import usericon from "../assets/img/icon/user-icon.png";

import nicheImage_one from "../assets/img/hero/niche1.png";
import clipboard from "../assets/img/icon/clipboar02.svg";
import medalstar from "../assets/img/icon/medal-star.svg";
const NinacheOurproducts = () => {
  return (
    <div>
 <section
          className="process pt-130 pb-100 pos-rel"
          style={{ backgroundColor: "#0F55DC" }}
        >
          <div className="container">
            <div className="sec-title--two text-center mb-90">
              <div
                className="sub-title sub-title--strock wow fadeInDown"
                data-wow-duration="600ms"
              >
                <img src={processicon} alt="" />
                Our working process
              </div>
              <h2
                className="title clr-white wow fadeInDown"
                data-wow-delay="150ms"
                data-wow-duration="600ms"
              >
                Our Web application workflow
              </h2>
            </div>

            <div className="row flex-row-reverse00">
              {/* Right Side Image */}
              <div className="col-lg-6">
                <div className="sa-process_left">
                  {/* Step 1 */}
                  <div className="process-item process-item--one">
                    <div className="xb-item--icon">
                      <img src={searchicon} alt="" />
                    </div>
                    <h4 className="xb-item--title">Discovery</h4>
                    <p className="xb-item--contact">
                      We work closely with our clients to understand their
                      needs, goals, and requirements. It’s all about gathering
                      information about their business, target audience, and
                      competitors to gain a deeper understanding of their
                      project.
                    </p>
                    <span className="xb-item--number">01</span>
                  </div>

                  {/* Step 2 */}
                  <div className="process-item process-item--two">
                    <div className="xb-item--icon">
                      <img src={usericon} alt="" />
                    </div>
                    <h4 className="xb-item--title">Planning</h4>
                    <p className="xb-item--contact">
                      Once we have a clear understanding of our client’s needs
                      and goals, we move on to the planning phase. Here we
                      develop a detailed project plan that outlines the project
                      scope, timeline, budget, and resources required.
                    </p>
                    <span className="xb-item--number">02</span>
                  </div>

                  {/* Step 3 */}
                  <div className="process-item process-item--three">
                    <div className="xb-item--icon">
                      <img src={clipboard} alt="" />
                    </div>
                    <h4 className="xb-item--title">Design &amp; Development</h4>
                    <p className="xb-item--contact">
                      With the project plan in place, we move on to the design
                      &amp; development phase, where we create wireframes,
                      prototypes, and use relevant tech to build the right
                      solution. Create unforgettable UX with expert design &amp;
                      development.
                    </p>
                    <span className="xb-item--number">03</span>
                  </div>

                  {/* Step 4 */}
                  <div className="process-item process-item--four">
                    <div className="xb-item--icon">
                      <img src={medalstar} alt="" />
                    </div>
                    <h4 className="xb-item--title">Testing &amp; Deployment</h4>
                    <p className="xb-item--contact">
                      With the solution fully tested, we deploy it to the
                      client’s environment with a smooth and hassle-free
                      process. We provide ongoing maintenance and support to
                      meet the changing future needs.
                    </p>
                    <span className="xb-item--number">04</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sa-process_right">
                  <div
                    className="sa-process-image wow fadeInRight"
                    data-wow-duration="600ms"
                  >
                    <img className="updown" src={nicheImage_one} alt="" />
                  </div>
                  <div className="process_shape">
                    <img src={pattern} alt="" />
                  </div>
                </div>
              </div>

              {/* Left Side Content */}
            </div>
          </div>

          <div className="sa-process_shape">
            <div className="shape shape--one">
              <img src={triangleshapetwo} alt="" />
            </div>
            <div className="shape shape--two">
              <img src={triangleshapethree} alt="" />
            </div>
          </div>
        </section>

    </div>
  );
};

export default NinacheOurproducts;
