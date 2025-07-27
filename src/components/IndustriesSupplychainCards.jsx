
import iconSearch from '../assets/img/icon/search01.svg';
import iconUser from '../assets/img/icon/user-icon.png';
import iconClipboard from '../assets/img/icon/clipboar02.svg';
import iconMedal from '../assets/img/icon/medal-star.svg';

import patternShape from '../assets/img/shape/pattern.png';
import triangleShape02 from '../assets/img/shape/trangle-shape02.png';
import triangleShape03 from '../assets/img/shape/trangle-shape03.png';
import processIcon from '../assets/img/icon/process-icon.svg';
import logisticsbg from '../assets/img/hero/Logistics1.png';
const IndustriesSupplychainCards = () => {

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
            <img src={processIcon} alt="Process Icon" />
            Exquisite Advantages
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            Supply Chain Management Deftness
          </h2>
        </div>

        <div className="row flex-row-reverse">
          {/* Right Column with Image */}
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div
                className="sa-process-image wow fadeInRight"
                data-wow-duration="600ms"
              >
                <img
                  className="updown"
                  src={logisticsbg}
                  alt="Supply Chain Illustration"
                />
              </div>
              <div className="process_shape">
                <img src={patternShape} alt="Pattern Shape" />
              </div>
            </div>
          </div>

          {/* Left Column with Content */}
          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* Item 1 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={iconSearch} alt="Agile Icon" />
                </div>
                <h4 className="xb-item--title">Agile Development Approach</h4>
                <p className="xb-item--contact">
                  Rapid development process to flawless & seamless project delivery.
                </p>
              </div>

              {/* Item 2 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={iconUser} alt="Experience Icon" />
                </div>
                <h4 className="xb-item--title">12+ Years of Experience</h4>
                <p className="xb-item--contact">
                  Deep experience in offering services & solutions in the supply chain.
                </p>
              </div>

              {/* Item 3 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={iconClipboard} alt="Engagement Icon" />
                </div>
                <h4 className="xb-item--title">Engagement & Responsibility</h4>
                <p className="xb-item--contact">
                  Dedicated team to focus & engage with the needs of your business.
                </p>
              </div>

              {/* Item 4 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={iconMedal} alt="Support Icon" />
                </div>
                <h4 className="xb-item--title">Holistic Business Support</h4>
                <p className="xb-item--contact">
                  Deliver significant services and support business processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src={triangleShape02} alt="Triangle Shape 1" />
        </div>
        <div className="shape shape--two">
          <img src={triangleShape03} alt="Triangle Shape 2" />
        </div>
      </div>
    </section>
      </div>
      );
    };

    export default IndustriesSupplychainCards;