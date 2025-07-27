
import patternimg from "../assets/img/shape/pattern.png";
import processicon from "../assets/img/icon/process-icon.svg"

import search01 from "../assets/img/icon/search01.svg"
import usericon from "../assets/img/icon/user-icon.png"
import clipboar02 from "../assets/img/icon/clipboar02.svg"
import medalstar from "../assets/img/icon/medal-star.svg"
import trangleshape02 from "../assets/img/shape/trangle-shape02.png"
import trangleshape03 from "../assets/img/shape/trangle-shape03.png"

import AIserviceimg from "../assets/img/hero/5_AI-in-Customer-service.png"




const TechnologiesRPACards = () => {
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
            Ai Solution
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            Artificial Intelligence Services We Offer
          </h2>
        </div>

        {/* Row: Image Right / Text Left */}
        <div className="row flex-row-reverse">
          {/* Right Column - Image */}
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div
                className="sa-process-image wow fadeInRight"
                data-wow-duration="600ms"
              >
                <img
                  className="updown"
                  src={AIserviceimg}
                  alt="AI in Customer Service"
                />
              </div>
              <div className="process_shape">
                <img src={patternimg} alt="Pattern Shape" />
              </div>
            </div>
          </div>

          {/* Left Column - Text Blocks */}
          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* NLP */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={search01} alt="NLP Icon" />
                </div>
                <h4 className="xb-item--title">
                  Natural Language Processing (NLP)
                </h4>
                <p className="xb-item--contact">
                  We develop NLP solutions that enable AI to understand,
                  interpret, and generate human language, enhancing chatbots,
                  sentiment analysis, and automated text processing.
                </p>
              </div>

              {/* Generative AI */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={usericon} alt="Gen AI Icon" />
                </div>
                <h4 className="xb-item--title">Generative AI</h4>
                <p className="xb-item--contact">
                  Our Generative AI solutions create high-quality text, images,
                  and other content, empowering businesses with automation and
                  creative AI-driven applications.
                </p>
              </div>

              {/* Predictive Analysis */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={clipboar02} alt="Predictive Icon" />
                </div>
                <h4 className="xb-item--title">Predictive Analysis</h4>
                <p className="xb-item--contact">
                  We leverage AI-powered predictive models in machine learning
                  development to analyze data, identify trends and forecast
                  outcomes, helping businesses make data-driven decisions.
                </p>
              </div>

              {/* AI as a Service */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={medalstar} alt="AIaaS Icon" />
                </div>
                <h4 className="xb-item--title">AI as a Service</h4>
                <p className="xb-item--contact">
                  We offer scalable AI solutions through AIaaS, enabling
                  businesses to integrate AI capabilities without complex
                  infrastructure management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
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

export default TechnologiesRPACards;
