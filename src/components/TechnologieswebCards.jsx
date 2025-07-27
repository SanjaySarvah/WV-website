
import patternimg from "../assets/img/shape/pattern.png";
import processicon from "../assets/img/icon/process-icon.svg"

import search01 from "../assets/img/icon/search01.svg"
import usericon from "../assets/img/icon/user-icon.png"
import clipboar02 from "../assets/img/icon/clipboar02.svg"
import medalstar from "../assets/img/icon/medal-star.svg"
import trangleshape02 from "../assets/img/shape/trangle-shape02.png"
import trangleshape03 from "../assets/img/shape/trangle-shape03.png"

import img2 from "../assets/img/hero/img-2.webp"




const TechnologieswebCards = () => {
  return (
    <div>
     <section
      className="process pt-130 pb-100 pos-rel"
      style={{ backgroundColor: "#fcc58d" }}
    >
      <div className="container">
        <div className="sec-title--two text-center mb-90">
          <div
            className="sub-title sub-title--strock wow fadeInDown"
            data-wow-duration="600ms"
          >
            <img src={processicon} alt="Process Icon" />
            Pioneering the Modern Technologies
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            DIVERSE WEB3 DEVELOPMENT SERVICES
          </h2>
        </div>
        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div
                className="sa-process-image wow fadeInRight"
                data-wow-duration="600ms"
              >
                <img
                  className="updown"
                  src={img2}
                  alt="Web3 Development"
                />
              </div>
              <div className="process_shape">
                <img src={patternimg} alt="Pattern" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sa-process_left">
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={search01} alt="Smart Contract Icon" />
                </div>
                <h4 className="xb-item--title">Smart Contract Development</h4>
                <p className="xb-item--contact">
                  At our web3 development services, we have a deep understanding of
                  smart contracts, which are essential components of many blockchain
                  applications. Our team of professionals can assist you in creating
                  customised smart contract solutions that align with your specific
                  business requirements.
                </p>
              </div>

              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={usericon} alt="Blockchain Icon" />
                </div>
                <h4 className="xb-item--title">Blockchain Development</h4>
                <p className="xb-item--contact">
                  At our web3 development services, we specialise in blockchain
                  solutions, including private, public, and hybrid blockchains. Our
                  expertise enables us to create secure and decentralised applications
                  for seamless data sharing.
                </p>
              </div>

              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={clipboar02} alt="Token Icon" />
                </div>
                <h4 className="xb-item--title">Token Development</h4>
                <p className="xb-item--contact">
                  Our web3 development services can help you design and launch tokens
                  that represent ownership of your digital assets, paving the way for
                  various crypto domains such as NFTs, ICOs, STOs, and more. Our
                  solutions are reliable, secure, and comply with industry standards.
                </p>
              </div>

              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={medalstar} alt="Metaverse Icon" />
                </div>
                <h4 className="xb-item--title">Metaverse Development</h4>
                <p className="xb-item--contact">
                  We produce safe, transparent, and efficient decentralised apps with
                  a superior user experience for a variety of sectors by utilising our
                  web3 development services. You may receive feature-rich,
                  ready-to-use apps in a short period of time by employing our
                  Metaverse developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default TechnologieswebCards;
