


import iconSearch from '../assets/img/icon/search01.svg';
import iconUser from '../assets/img/icon/user-icon.png';
import iconClipboard from '../assets/img/icon/clipboar02.svg';
import iconMedal from '../assets/img/icon/medal-star.svg';


import patternShape from '../assets/img/shape/pattern.png';
import triangleShape02 from '../assets/img/shape/trangle-shape02.png';
import triangleShape03 from '../assets/img/shape/trangle-shape03.png';
import processIcon from '../assets/img/icon/process-icon.svg';

import learningimg1 from "../assets/img/hero/learning.svg"
const IndistriesEducationCards = () => {

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
            Education Solutions
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            Education Solutions Adeptness
          </h2>
        </div>

        <div className="row flex-row-reverse">
          {/* Right Image Column */}
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div
                className="sa-process-image wow fadeInRight"
                data-wow-duration="600ms"
              >
                <img
                  className="updown"
                  src={learningimg1}
                  alt="Learning Illustration"
                />
              </div>
              <div className="process_shape">
                <img
                  src={patternShape}
                  alt="Decorative Pattern"
                />
              </div>
            </div>
          </div>

          {/* Left Text Content */}
          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* Item 1 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={iconSearch} alt="Flexibility Icon" />
                </div>
                <h4 className="xb-item--title">Flexibility In Learning</h4>
                <p className="xb-item--contact">
                  Flexible and scalable features to scale up students & e-learners.
                </p>
              </div>

              {/* Item 2 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={iconUser} alt="Voice Recognition Icon" />
                </div>
                <h4 className="xb-item--title">Voice Recognition and Learning</h4>
                <p className="xb-item--contact">
                  Voice recognition software to streamline the process of e-learning.
                </p>
              </div>

              {/* Item 3 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={iconClipboard} alt="Educational Apps Icon" />
                </div>
                <h4 className="xb-item--title">Professional Educational Apps</h4>
                <p className="xb-item--contact">
                  Apps with professional courses and real-time solutions.
                </p>
              </div>

              {/* Item 4 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src ={iconMedal} alt="E-Library Icon" />
                </div>
                <h4 className="xb-item--title">E-Library App Solutions</h4>
                <p className="xb-item--contact">
                  With easy navigation, multiple platform support & responsive designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Shapes */}
      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img
            src={triangleShape02}
            alt="Decorative Triangle One"
          />
        </div>
        <div className="shape shape--two">
          <img
            src={triangleShape03}
            alt="Decorative Triangle Two"
          />
        </div>
      </div>
    </section>
      </div>
      );
    };

    export default IndistriesEducationCards;