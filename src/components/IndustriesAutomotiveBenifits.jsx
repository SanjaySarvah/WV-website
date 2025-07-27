import React from "react";
// import from bgimage ""
import automotivebg from "../assets/img/hero/industries_automotive.webp";
import iconSearch from '../assets/img/icon/search01.svg';
import iconUser from '../assets/img/icon/user-icon.png';
import iconClipboard from '../assets/img/icon/clipboar02.svg';
import iconMedal from '../assets/img/icon/medal-star.svg';
const IndustriesAutomotiveBenifits = () => {
    const processItems = [
        {
          icon: iconSearch,
          title: 'Eminent Automotive Management Development',
          description: 'Improved efficiencies services in production to enrich product experience.'
        },
        {
          icon: iconUser,
          title: 'Agile Development Approach',
          description: 'Rapid development process to flawless & seamless project delivery.'
        },
        {
          icon: iconClipboard,
          title: 'Decrease Operational Cost',
          description: 'Reducing productivity cost for automotive products manufacturers.'
        },
        {
          icon: iconMedal,
          title: 'Cutting-edge Innovations',
          description: 'Digital experience through leveraging latest technologies.'
        }
      ];

  return (
    <div>
  <section className="process pt-130 pb-100 pos-rel" style={{ backgroundColor: '#fcc58d' }}>
      <div className="container">
        <div className="sec-title--two text-center mb-90">
          <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms">
            <img src="assets/img/icon/process-icon.svg" alt="" />
            What We Offer
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            Business Benefits From Worley Ventures Automotive Software Solution
          </h2>
        </div>
        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div className="sa-process-image wow fadeInRight" data-wow-duration="600ms">
                <img className="updown" src={automotivebg} alt="Automotive" />
              </div>
              <div className="process_shape">
                <img src="assets/img/shape/pattern.png" alt="Pattern" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sa-process_left">
              {processItems.map((item, index) => (
                <div
                  key={index}
                  className={`process-item process-item--${['one', 'two', 'three', 'four'][index]}`}
                >
                  <div className="xb-item--icon">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <h4 className="xb-item--title">{item.title}</h4>
                  <p className="xb-item--contact">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src="assets/img/shape/trangle-shape02.png" alt="triangle-shape" />
        </div>
        <div className="shape shape--two">
          <img src="assets/img/shape/trangle-shape03.png" alt="triangle-shape" />
        </div>
      </div>
    </section>
      </div>
      );
    };
    
    export default IndustriesAutomotiveBenifits;