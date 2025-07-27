import React from "react";

import processIcon from '../assets/img/icon/process-icon.svg';
import processImg from '../assets/img/hero/aws-devops-engineering-1.png';
import patternImg from '../assets/img/shape/pattern.png';
import searchIcon from '../assets/img/icon/search01.svg';
import userIcon from '../assets/img/icon/user-icon.png';
import clipboardIcon from '../assets/img/icon/clipboar02.svg';
import medalIcon from '../assets/img/icon/medal-star.svg';
import triangleOne from '../assets/img/shape/trangle-shape02.png';
import triangleTwo from '../assets/img/shape/trangle-shape03.png';
const SalesForceWorkflow = () => {
    return (
      <div>
           <section className="process pt-130 pb-100 pos-rel" style={{ backgroundColor: '#0F55DC' }}>
      <div className="container">
        <div className="sec-title--two text-center mb-90">
          <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms">
            <img src={processIcon} alt="Process Icon" />
            Our working process
          </div>
          <h2 className="title clr-white wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">
            Our Web application workflow
          </h2>
        </div>

        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div className="sa-process-image wow fadeInRight" data-wow-duration="600ms">
                <img className="updown" src={processImg} alt="Process" />
              </div>
              <div className="process_shape">
                <img src={patternImg} alt="Pattern" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* Step 1 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={searchIcon} alt="Discovery" />
                </div>
                <h4 className="xb-item--title">Discovery</h4>
                <p className="xb-item--contact">
                  We work closely with our clients to understand their needs, goals, and requirements. It’s all about
                  gathering information about their business, target audience, and competitors to gain a deeper
                  understanding of their project.
                </p>
                <span className="xb-item--number">01</span>
              </div>

              {/* Step 2 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={userIcon} alt="Planning" />
                </div>
                <h4 className="xb-item--title">Planning</h4>
                <p className="xb-item--contact">
                  Once we have a clear understanding of our client’s needs and goals, we move on to the planning phase.
                  Here we develop a detailed project plan that outlines the project scope, timeline, budget, and
                  resources required.
                </p>
                <span className="xb-item--number">02</span>
              </div>

              {/* Step 3 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={clipboardIcon} alt="Design & Development" />
                </div>
                <h4 className="xb-item--title">Design & Development</h4>
                <p className="xb-item--contact">
                  With the project plan in place, we move on to the design & development phase, where we create
                  wireframes, prototypes, and use relevant tech to build the right solution. Create unforgettable UX
                  with expert design & development.
                </p>
                <span className="xb-item--number">03</span>
              </div>

              {/* Step 4 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={medalIcon} alt="Testing & Deployment" />
                </div>
                <h4 className="xb-item--title">Testing & Deployment</h4>
                <p className="xb-item--contact">
                  With the solution fully tested, we deploy it to the client’s environment with a smooth and
                  hassle-free process. We provide ongoing maintenance and support to meet the changing future needs.
                </p>
                <span className="xb-item--number">04</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src={triangleOne} alt="Triangle Shape 1" />
        </div>
        <div className="shape shape--two">
          <img src={triangleTwo} alt="Triangle Shape 2" />
        </div>
      </div>
    </section>
          </div>
    )
    }
    export default SalesForceWorkflow