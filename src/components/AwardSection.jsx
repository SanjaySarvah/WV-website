import React from "react";

// Import icon
import awardIcon from "../assets/img/icon/ser-01.svg";

// Import award images
import brand01 from "../assets/img/award/ap-brand01.jpg";
import brand02 from "../assets/img/award/ap-brand02.jpg";
import brand03 from "../assets/img/award/ap-brand03.jpg";
import brand04 from "../assets/img/award/ap-brand04.jpg";
import brand05 from "../assets/img/award/ap-brand05.jpg";
import brand06 from "../assets/img/award/ap-brand06.jpg";
import brand07 from "../assets/img/award/ap-brand07.jpg";
import brand08 from "../assets/img/award/ap-brand08.jpg";
import brand09 from "../assets/img/award/ap-brand09.jpg";
import brand10 from "../assets/img/award/ap-brand10.jpg";

const AwardSection = () => {
  const firstMarquee = [brand01, brand02, brand03, brand01, brand02, brand03];
  const secondMarquee = [brand04, brand05, brand06, brand07, brand04, brand05];
  const thirdMarquee = [brand08, brand09, brand10, brand08, brand09, brand10];

  return (
    <section
      className="award position-relative"
      data-bg-color="#f6f6f8"
      style={{ backgroundColor: "#f6f6f8", overflow: "hidden" }}
    >
      <div className="container" style={{ height: "40rem" }}>
        <div className="row mt-none-30 mt-5">
          {/* Left Text Section */}
          <div className="col-xl-6 col-lg-5">
            <div className="service-info ab-award-content pt-100">
              <div className="sec-title--two">
                <div
                  className="sub-title wow fadeInDown d-inline-flex align-items-center"
                  data-wow-duration="600ms"
                  style={{
                    border: "1px solid black",
                    width: "160px",
                    height: "30px",
                    borderRadius: "2rem",
                    paddingLeft: "0.5rem",
                  }}
                >
                  <img
                    src={awardIcon}
                    alt="Award Icon"
                    style={{ marginRight: "0.5rem", height: "18px" }}
                  />
                  Our awards
                </div>
                <h2
                  className="title wow skewIn"
                  data-wow-delay="100ms"
                  data-wow-duration="600ms"
                  style={{ fontSize: "3rem", fontWeight: "bold" }}
                >
                  We've got prestigious awards for our work
                </h2>
                <p
                  className="content wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="600ms"
                  style={{ fontSize: "1.5rem" }}
                >
                  Receiving prestigious awards for our work is a testament to our
                  unwavering dedication and commitment to excellence. These
                  accolades reflect the tireless efforts and passion.
                </p>
              </div>
              <div
                className="xb-btn mt-5 wow fadeInUp"
                data-wow-delay="450ms"
                data-wow-duration="600ms"
              >
                <a
                  href="service.html"
                  className="free-consultation thm-btn thm-btn--aso thm-btn--aso_yellow rounded"
                >
                  Book a free consultation
                </a>
              </div>
            </div>
          </div>

          {/* Right Award Marquee Section */}
          <div className="marquee-container col-xl-6 col-lg-7 mt-30">
            <div className="marquee-content ap-award-wrap ul_li" style={{ overflow: "hidden" }}>
              
              {/* First Marquee */}
              <div className="ap-award-inner marquee-left">
                {firstMarquee.map((img, index) => (
                  <div className="ap-award-item" key={`first-${index}`}>
                    <div className="xb-img">
                      <img src={img} alt={`Award ${index}`} className="AwardImage" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Marquee */}
              <div className="ap-award-inner marquee-right">
                {secondMarquee.map((img, index) => (
                  <div className="ap-award-item" key={`second-${index}`}>
                    <div className="xb-img">
                      <img src={img} alt={`Award ${index}`} className="AwardImage" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Third Marquee */}
              <div className="ap-award-inner marquee-left">
                {thirdMarquee.map((img, index) => (
                  <div className="ap-award-item" key={`third-${index}`}>
                    <div className="xb-img">
                      <img src={img} alt={`Award ${index}`} className="AwardImage" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
