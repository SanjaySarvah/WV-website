import React from "react";
import patternimg from "../assets/img/shape/pattern.png";
import processicon from "../assets/img/icon/process-icon.svg"

import search01 from "../assets/img/icon/search01.svg"
import usericon from "../assets/img/icon/user-icon.png"
import clipboar02 from "../assets/img/icon/clipboar02.svg"
import medalstar from "../assets/img/icon/medal-star.svg"
import trangleshape02 from "../assets/img/shape/trangle-shape02.png"
import trangleshape03 from "../assets/img/shape/trangle-shape03.png"

import devopsimg from "../assets/img/hero/devops-illustration.webp"




const TechnologiesdevopsCards = () => {
  return (
    <div>
  <section
      className="process pt-130 pb-100 pos-rel"
      style={{ backgroundColor: '#fcc58d' }}
    >
      <div className="container">
        {/* Section Heading */}
        <div className="sec-title--two text-center mb-90">
          <div
            className="sub-title sub-title--strock wow fadeInDown"
            data-wow-duration="600ms"
          >
            <img
              src={processicon}
              alt="Process Icon"
            />
            16+ Years of Excellence in DevOps Services & Implementation
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            DevOps Software Development
          </h2>
        </div>

        {/* Content Row */}
        <div className="row flex-row-reverse">
          {/* Right Column - Image */}
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div
                className="sa-process-image wow fadeInRight"
                data-wow-duration="600ms"
              >
                <img
                  className="updown"
                  src={devopsimg}
                  alt="DevOps Illustration"
                />
              </div>
              <div className="process_shape">
                <img src={patternimg} alt="Pattern Shape" />
              </div>
            </div>
          </div>

          {/* Left Column - Service Items */}
          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* Item 1 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={search01} alt="Automation Icon" />
                </div>
                <h4 className="xb-item--title">DevOps Infrastructure Automation</h4>
                <p className="xb-item--contact">
                  Streamline infrastructure management through automated provisioning and scaling, while leveraging Kubernetes consulting services for optimized container orchestration and improved scalability.
                </p>
              </div>

              {/* Item 2 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={usericon} alt="PaaS Icon" />
                </div>
                <h4 className="xb-item--title">DevOps PAAS Support</h4>
                <p className="xb-item--contact">
                  Leverage Platform as a Service (PaaS) to enhance the flexibility of development and deployment processes. Enable seamless integration and faster time-to-market.
                </p>
              </div>

              {/* Item 3 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={clipboar02} alt="Consulting Icon" />
                </div>
                <h4 className="xb-item--title">DevOps Consulting Services</h4>
                <p className="xb-item--contact">
                  Benefit from expert guidance in implementing DevOps strategies tailored to your business needs. Achieve operational efficiency and faster delivery cycles.
                </p>
              </div>

              {/* Item 4 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={medalstar} alt="Support Icon" />
                </div>
                <h4 className="xb-item--title">DevOps Support and Maintenance</h4>
                <p className="xb-item--contact">
                  Ensure continuous monitoring and optimization of your DevOps environment. Proactively address issues to maintain system stability and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src={trangleshape02} alt="Triangle Shape 1" />
        </div>
        <div className="shape shape--two">
          <img src={trangleshape03} alt="Triangle Shape 2" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default TechnologiesdevopsCards;
