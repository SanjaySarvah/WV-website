import React from "react";
import Advantageimgweb from '../assets/img/hero/shutterstock_396058687-scaled.jpg';
import NincheTechnologiesTestimonialSection from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";
// import  "../assets/css/Header.css";
import "../assets/css/main.css"
const ServiceCustomPortalAdvantages = () => {
  return (
    <div>
         <section class="process pt-130 pb-100 pos-rel" data-bg-color="#0f75bd">
          <section className="process pt-130 pb-100 pos-rel" style={{ backgroundColor: '#0f75bd' }}>
      <div className="container">
        <div className="sec-title--two text-center mb-90">
          <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms">
            <img src="/assets/img/icon/process-icon.svg" alt="" />
            Industry-tailored modernization
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            The CloudNow Advantage in <br />
            Application Modernization Services
          </h2>
        </div>

        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div className="sa-process-image wow fadeInRight" data-wow-duration="600ms">
                <img className="updown" src={Advantageimgweb} alt="" />
              </div>
              <div className="process_shape">
                <img src="/assets/img/shape/pattern.png" alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* Step 1 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src="/assets/img/icon/search01.svg" alt="" />
                </div>
                <h4 className="xb-item--title">High-level Transformation Plan</h4>
                <p className="xb-item--contact">
                  Our process begins with a high-level view of the existing system and its
                  shortcomings to arrive at an overview of the planned solution. This also includes
                  documentation of the activities and stages involved in the development process along
                  with time and cost estimations.
                </p>
              </div>

              {/* Step 2 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src="/assets/img/icon/user-icon.png" alt="" />
                </div>
                <h4 className="xb-item--title">In-depth Review of Source System</h4>
                <p className="xb-item--contact">
                  Our experts deep-dive into your existing application, including analysis of the
                  current platform type, its technology, functionalities, and the pain points that
                  exist with the system. The output of this activity is a Source System Architecture
                  and Functionality document.
                </p>
              </div>

              {/* Step 3 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src="/assets/img/icon/clipboar02.svg" alt="" />
                </div>
                <h4 className="xb-item--title">Technical Design Document</h4>
                <p className="xb-item--contact">
                  Our team clearly defines and documents the desired end point of the entire project,
                  and we achieve this through a Rearchitecture Technical Design Document (TDD), which
                  captures the system architecture, all required components, the data migration
                  process, and so on.
                </p>
              </div>

              {/* Step 4 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src="/assets/img/icon/medal-star.svg" alt="" />
                </div>
                <h4 className="xb-item--title">Support & Maintenance</h4>
                <p className="xb-item--contact">
                  We remain by your side even after your app is up and running, with periodic checks
                  to ensure smooth operations, and regular updates and upgrades to ensure your
                  applications and services are always available and running optimally at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src="/assets/img/shape/trangle-shape02.png" alt="" />
        </div>
        <div className="shape shape--two">
          <img src="/assets/img/shape/trangle-shape03.png" alt="" />
        </div>
      </div>
    </section>


    <NincheTechnologiesTestimonialSection></NincheTechnologiesTestimonialSection>
    <Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>
</section>
    </div>
  );
};

export default ServiceCustomPortalAdvantages;
