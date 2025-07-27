import React from "react";
import patternimg from "../assets/img/shape/pattern.png";
import processicon from "../assets/img/icon/process-icon.svg"
import ecommerceimg from   "../assets/img/hero/ecommerce-retail-ecommerce-simplifying-securing-streamlining-speeding-up-ecommerce.svg"
import search01 from "../assets/img/icon/search01.svg"
import usericon from "../assets/img/icon/user-icon.png"
import clipboar02 from "../assets/img/icon/clipboar02.svg"
import medalstar from "../assets/img/icon/medal-star.svg"
import trangleshape02 from "../assets/img/shape/trangle-shape02.png"
import trangleshape03 from "../assets/img/shape/trangle-shape03.png"






const ServicesBlockchainMultiSetup = () => {
  return (
    <div>
               <section
      className="process pt-130 pb-100 pos-rel"
      style={{ backgroundColor: '#fcc58d' }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="sec-title--two text-center mb-90">
          <div
            className="sub-title sub-title--strock wow fadeInDown"
            data-wow-duration="600ms"
          >
            <img src={processicon} alt="Process Icon" />
            Our approach
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            Experienced team building high-performance eCommerce apps
          </h2>
        </div>

        {/* Content Row */}
        <div className="row flex-row-reverse">
          {/* Right Side Image */}
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div className="sa-process-image wow fadeInRight" data-wow-duration="600ms">
                <img
                  className="updown"
                  src={ecommerceimg}
                  alt="Ecommerce Illustration"
                />
              </div>
              <div className="process_shape">
                <img src={patternimg} alt="Pattern Shape" />
              </div>
            </div>
          </div>

          {/* Left Side Items */}
          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* Process Item 1 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={search01} alt="Custom Cart Icon" />
                </div>
                <h4 className="xb-item--title">Custom Cart Development</h4>
                <p className="xb-item--contact">
                  Offers businesses a personalized shopping experience, improved conversion rates, enhanced security, and scalability to grow with your business.
                </p>
              </div>

              {/* Process Item 2 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={usericon} alt="Payment Gateway Icon" />
                </div>
                <h4 className="xb-item--title">Payment Gateway Integration</h4>
                <p className="xb-item--contact">
                  Boosting your business by enabling secure, fast, and convenient online payments, leading to increased sales and customer satisfaction.
                </p>
              </div>

              {/* Process Item 3 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={clipboar02} alt="Integration Icon" />
                </div>
                <h4 className="xb-item--title">Third Party Application Integration</h4>
                <p className="xb-item--contact">
                  Offers increased efficiency, streamlined workflows, improved data accuracy, cost savings, and enhanced user experience.
                </p>
              </div>

              {/* Process Item 4 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={medalstar} alt="Mobile Commerce Icon" />
                </div>
                <h4 className="xb-item--title">Mobile Commerce</h4>
                <p className="xb-item--contact">
                  Providing unparalleled convenience to consumers, allowing them to shop and pay for goods and services anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Shapes */}
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

export default ServicesBlockchainMultiSetup;
