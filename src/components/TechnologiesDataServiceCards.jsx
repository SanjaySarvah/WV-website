
import patternimg from "../assets/img/shape/pattern.png";
import processicon from "../assets/img/icon/process-icon.svg"

import search01 from "../assets/img/icon/search01.svg"
import usericon from "../assets/img/icon/user-icon.png"
import clipboar02 from "../assets/img/icon/clipboar02.svg"
import medalstar from "../assets/img/icon/medal-star.svg"
import trangleshape02 from "../assets/img/shape/trangle-shape02.png"
import trangleshape03 from "../assets/img/shape/trangle-shape03.png"





const TechnologiesDataServiceCards = () => {
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
            Data Engineering Services
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            End-to-end Data Engineering Solutions
          </h2>
        </div>

        <div className="row flex-row-reverse">
          {/* Right Side Image */}
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div
                className="sa-process-image wow fadeInRight"
                data-wow-duration="600ms"
              >
                {/* <img
                  className="updown"
                  src="assets/img/hero/ZsThAUaF0TcGJIFS_Recurso69-8.html"
                  alt="Data Engineering Illustration"
                /> */}
              </div>
              <div className="process_shape">
                <img src={patternimg} alt="Pattern" />
              </div>
            </div>
          </div>

          {/* Left Side Service List */}
          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* Service 1 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={search01} alt="Icon 1" />
                </div>
                <h4 className="xb-item--title">Data Engineering Services</h4>
                <p className="xb-item--contact">
                  We build scalable and economical data ingestion pipelines with a
                  combination of both open source and the latest technologies such
                  as AWS and AZURE, which stream data from various sources into a
                  pre-existing data warehouse at required intervals.
                </p>
              </div>

              {/* Service 2 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={usericon} alt="Icon 2" />
                </div>
                <h4 className="xb-item--title">Data Platforms Implementation</h4>
                <p className="xb-item--contact">
                  We bring proven business solutions, digital accelerators,
                  frameworks and agile methodologies, designed to quickly realise
                  the value of data assets and provide the flexibility to scale
                  with the continuous evolution of the business landscape.
                </p>
              </div>

              {/* Service 3 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={clipboar02} alt="Icon 3" />
                </div>
                <h4 className="xb-item--title">
                  Cloud Data Engineering Solutions
                </h4>
                <p className="xb-item--contact">
                  Our data engineering cloud solutions integrate cloud architecture
                  and data governance principles to create a flexible data platform
                  that grows with your business. Through our data engineering
                  consulting services, we help you enrich your data, gain deeper
                  insights, and make more informed business decisions.
                </p>
              </div>

              {/* Service 4 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={medalstar} alt="Icon 4" />
                </div>
                <h4 className="xb-item--title">Data Migration Service</h4>
                <p className="xb-item--contact">
                  With a deep understanding of the complexities involved in data and
                  large-scale projects, our data migration consultants provide
                  secure, cost-effective and accurate solutions for clients across
                  industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src={trangleshape02} alt="Triangle 1" />
        </div>
        <div className="shape shape--two">
          <img src={trangleshape03} alt="Triangle 2" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default TechnologiesDataServiceCards;
