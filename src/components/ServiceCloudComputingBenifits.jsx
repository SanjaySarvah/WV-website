import React from "react";
import processIcon from '../assets/img/icon/process-icon.svg';
import processImage from '../assets/img/hero/uses-of-cloud-computing.webp';
import patternImg from '../assets/img/shape/pattern.png';
import iconSearch from '../assets/img/icon/search01.svg';
import iconUser from '../assets/img/icon/user-icon.png';
import iconClipboard from '../assets/img/icon/clipboar02.svg';
import iconMedal from '../assets/img/icon/medal-star.svg';
import shapeOne from '../assets/img/shape/trangle-shape02.png';
import shapeTwo from '../assets/img/shape/trangle-shape03.png';

const ServiceCloudComputingBenifits = () => {
  return (
    <div>
          <section
      className="process pt-130 pb-100 pos-rel"
      style={{ backgroundColor: '#e9ff07' }}
    >
      <div className="container">
        <div className="sec-title--two text-center mb-90">
          <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms">
            <img src={processIcon} alt="" />Origins of cloud computing
          </div>
          <h2 className="title clr-white wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">
            Our Benefits of cloud computing
          </h2>
        </div>

        <div className="row flex-row-reverse">
          {/* Right image */}
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div className="sa-process-image wow fadeInRight" data-wow-duration="600ms">
                <img className="updown" src={processImage} alt="" />
              </div>
              <div className="process_shape">
                <img src={patternImg} alt="" />
              </div>
            </div>
          </div>

          {/* Left content */}
          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* 01 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={iconSearch} alt="" />
                </div>
                <h4 className="xb-item--title">Cost-effectiveness</h4>
                <p className="xb-item--contact">
                  Cloud computing lets you offload some or all of the expense and effort of purchasing,
                  installing, configuring and managing mainframe computers and other on-premises
                  infrastructure. You only pay for cloud-based infrastructure and other computing resources
                  as you use them.
                </p>
                <span className="xb-item--number">01</span>
              </div>

              {/* 02 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={iconUser} alt="" />
                </div>
                <h4 className="xb-item--title">Increased speed and agility</h4>
                <p className="xb-item--contact">
                  With cloud technologies, your organization can use enterprise applications in minutes
                  instead of waiting weeks or months for IT to respond to a request, purchase and configure
                  supporting hardware and install software. This feature empowers users—specifically DevOps
                  and other development teams—to help use cloud-based software and support infrastructure.
                </p>
              </div>

              {/* 03 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={iconClipboard} alt="" />
                </div>
                <h4 className="xb-item--title">Unlimited scalability</h4>
                <p className="xb-item--contact">
                  Cloud computing provides elasticity and self-service provisioning, so instead of
                  purchasing excess capacity that sits unused during slow periods, you can scale capacity up
                  and down in response to spikes and dips in traffic. You can also use your cloud provider’s
                  global network to spread your applications closer to users worldwide.
                </p>
              </div>

              {/* 04 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={iconMedal} alt="" />
                </div>
                <h4 className="xb-item--title">Enhanced strategic value</h4>
                <p className="xb-item--contact">
                  Cloud computing enables organizations to use various technologies and the most up-to-date
                  innovations to gain a competitive edge. For instance, in retail, banking and other
                  customer-facing industries, generative AI-powered virtual agents deployed over the cloud
                  can deliver better customer response time and free up teams to focus on higher-level work.
                  In manufacturing, teams can collaborate and use cloud-based software to monitor real-time
                  data across logistics and supply chain processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src={shapeOne} alt="" />
        </div>
        <div className="shape shape--two">
          <img src={shapeTwo} alt="" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default ServiceCloudComputingBenifits;
