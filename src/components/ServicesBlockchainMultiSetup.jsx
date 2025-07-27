import React from "react";
import processIcon from '../assets/img/icon/process-icon.svg';
import blockchainImg from '../assets/img/hero/blockchain.png';
import patternImg from '../assets/img/shape/pattern.png';
import iconSearch from '../assets/img/icon/search01.svg';
import iconUser from '../assets/img/icon/user-icon.png';
import iconClipboard from '../assets/img/icon/clipboar02.svg';
import iconMedal from '../assets/img/icon/medal-star.svg';
import triangle1 from '../assets/img/shape/trangle-shape02.png';
import triangle2 from '../assets/img/shape/trangle-shape03.png';
const ServicesBlockchainMultiSetup = () => {
  return (
    <div>
 <section
      className="process pt-130 pb-100 pos-rel"
      style={{ backgroundColor: '#0F55DC' }}
    >
      <div className="container">
        <div className="sec-title--two text-center mb-90">
          <div
            className="sub-title sub-title--strock wow fadeInDown"
            data-wow-duration="600ms"
          >
            <img src={processIcon} alt="" />
            MULTICHAIN SETUP
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            Our EXCELLENCE IN BLOCKCHAIN DEVELOPMENT SERVICES
          </h2>
        </div>

        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div className="sa-process-image wow fadeInRight" data-wow-duration="600ms">
                <img className="updown" src={blockchainImg} alt="Blockchain" />
              </div>
              <div className="process_shape">
                <img src={patternImg} alt="Pattern" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* Item 1 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={iconSearch} alt="" />
                </div>
                <h4 className="xb-item--title">Discovery</h4>
                <p className="xb-item--contact">
                  If your business falls under the industries like Agriculture, Healthcare, Banking & Insurance, Supply Chain Management, Stock Trading, Retail, Manufacturing, Automotive, and Real Estate, our blockchain development services can benefit to improve your business operations.
                  <br />
                  <br />
                  Get in touch with our experts available 24/7 to know how we can solve your business challenge with Blockchain technology.
                </p>
                <span className="xb-item--number">01</span>
              </div>

              {/* Item 2 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={iconUser} alt="" />
                </div>
                <h4 className="xb-item--title">EXCELLENCE IN BLOCKCHAIN DEVELOPMENT SERVICES</h4>
                <p className="xb-item--contact">
                  Being a leading blockchain development company, we excel in developing & managing digital ledger technology for our clients of different industries.
                </p>
                <span className="xb-item--number">02</span>
              </div>

              {/* Item 3 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={iconClipboard} alt="" />
                </div>
                <h4 className="xb-item--title">HYPERLEDGER FABRIC SETUP</h4>
                <p className="xb-item--contact">
                  An open-source blockchain framework that helps cross-industry blockchain technologies reach the next level with combined effort. Hyperledger fabric experts at Colan Infotech have a vast knowledge of Hyperledger-hosted blockchain frameworks.
                </p>
                <span className="xb-item--number">03</span>
              </div>

              {/* Item 4 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={iconMedal} alt="" />
                </div>
                <h4 className="xb-item--title">MULTICHAIN SETUP</h4>
                <p className="xb-item--contact">
                  With multichain setup, you can seamlessly interact with multiple blockchains without transferring your assets between networks. Our expertise in cryptocurrency development services empowers you to create secure and decentralized systems.
                </p>
                <span className="xb-item--number">04</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src={triangle1} alt="Triangle Shape" />
        </div>
        <div className="shape shape--two">
          <img src={triangle2} alt="Triangle Shape" />
        </div>
      </div>
    </section>

    </div>
  );
};

export default ServicesBlockchainMultiSetup;
