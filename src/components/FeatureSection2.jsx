import React from "react";

// Image imports
import eyeIcon from "../assets/img/icon/eye-icon.svg";
import featureImg1 from "../assets/img/feature/ap-feature01.jpg";
import featureImg2 from "../assets/img/feature/ap-feature02.jpg";
import featureImg3 from "../assets/img/feature/ap-feature03.jpg";

const FeatureSection2 = () => {
  return (
    <div style={{ backgroundColor: "#f6f6f8" }}>
      {/* Feature Section */}
      <section className="feature pt-5">
        <div className="container d-flex flex-column">
          <div className="text-center mb-5">
            <div
              className="sub-title position-relative d-inline-flex align-items-center justify-content-center gap-2"
              style={{
                border: "1px solid black",
                width: "180px",
                height: "40px",
                borderRadius: "2rem",
              }}
            >
              <img src={eyeIcon} alt="Eye Icon" style={{ height: "20px" }} />
              Why choose us
            </div>
            <h2 className="title customer-centric-approach mt-3">
              Customer-Centric Approach
            </h2>
          </div>

          <div className="row">
            {/* Feature Card 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="ap-fea-item position-relative text-center">
                <div className="xb-item--img mb-3">
                  <img
                    src={featureImg1}
                    alt="Feature 1"
                    className="img-fluid rounded-4"
                  />
                </div>
                <h3
                  className="xb-item--content position-absolute"
                  style={{ bottom: "10%", left: "10%", color: "white" }}
                >
                  We don’t make empty promises
                </h3>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="ap-fea-item position-relative text-center">
                <div className="xb-item--img mb-3">
                  <img
                    src={featureImg2}
                    alt="Feature 2"
                    className="img-fluid rounded-4"
                  />
                </div>
                <h3
                  className="xb-item--content position-absolute"
                  style={{ bottom: "10%", left: "10%", color: "white" }}
                >
                  If something goes wrong, we’ll quickly fix it.
                </h3>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="ap-fea-item position-relative text-center">
                <div className="xb-item--img mb-3">
                  <img
                    src={featureImg3}
                    alt="Feature 3"
                    className="img-fluid rounded-4"
                  />
                </div>
                <h3
                  className="xb-item--content position-absolute"
                  style={{ bottom: "10%", left: "10%", color: "white" }}
                >
                  We created our own SEO tools to fill in the gaps
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fanfact Section */}
      <section className="fanfact pt-5 pb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="ap-fanfact-item">
                <h2 className="xb-item--number">120+</h2>
                <span className="xb-item--text">success stories</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="ap-fanfact-item ap-fanfact-item--middle">
                <h2 className="xb-item--number">1.2k</h2>
                <span className="xb-item--text">companies trust us</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mb-4">
              <div className="ap-fanfact-item ap-fanfact-item--last">
                <h2 className="xb-item--number">100%</h2>
                <span className="xb-item--text">results guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection2;
