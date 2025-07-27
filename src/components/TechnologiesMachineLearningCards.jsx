
import patternimg from "../assets/img/shape/pattern.png";
import processicon from "../assets/img/icon/process-icon.svg"

import search01 from "../assets/img/icon/search01.svg"
import usericon from "../assets/img/icon/user-icon.png"
import clipboar02 from "../assets/img/icon/clipboar02.svg"
import medalstar from "../assets/img/icon/medal-star.svg"
import trangleshape02 from "../assets/img/shape/trangle-shape02.png"
import trangleshape03 from "../assets/img/shape/trangle-shape03.png"

import devopsimg from "../assets/img/hero/Artificial-Intelligence-and-Machine-Learning-Services-1024x840.webp"




const TechnologiesMachineLearningCards = () => {
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
            <img src={processicon} alt="" />
            Pioneering the Modern Technologies
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            EXPLORE DEVELOPMENT TECHNOLOGIES WITH THE TOP MACHINE LEARNING COMPANIES
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
                  src={devopsimg}
                  alt="AI and ML Illustration"
                />
              </div>
              <div className="process_shape">
                <img src={patternimg} alt="Pattern Shape" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* Item 1 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={search01} alt="" />
                </div>
                <h4 className="xb-item--title">DEEP LEARNING</h4>
                <p className="xb-item--contact">
                  Our experts engaged in Deep Learning to dig deeper into intricate data and
                  we leverage immense opportunities for your business and deliver utmost solutions.
                </p>
              </div>

              {/* Item 2 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={usericon} alt="" />
                </div>
                <h4 className="xb-item--title">MACHINE LEARNING PROGRAMMING:</h4>
                <p className="xb-item--contact">
                  Our AI developers are utilizing custom machine learning software to develop
                  credible decision models and automate business implementations.
                </p>
              </div>

              {/* Item 3 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={clipboar02} alt="" />
                </div>
                <h4 className="xb-item--title">MARKETING AUTOMATION SOLUTIONS:</h4>
                <p className="xb-item--contact">
                  Colan Infotech unifies machine learning programs for CRM applications and
                  marketing automation. We deliver exactitude marketing processes that quantify ROI.
                </p>
              </div>

              {/* Item 4 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={medalstar} alt="" />
                </div>
                <h4 className="xb-item--title">ROBOTIC PROCESS AUTOMATION:</h4>
                <p className="xb-item--contact">
                  Our machine learning developers are adept in developing effectual bots that are
                  capable of replicating human interaction and permitting you to focus on the superior task.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src={trangleshape02} alt="Shape 1" />
        </div>
        <div className="shape shape--two">
          <img src={trangleshape03} alt="Shape 2" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default TechnologiesMachineLearningCards;
