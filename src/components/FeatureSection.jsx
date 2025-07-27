import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import icons from src/assets
import icon1 from "../assets/img/icon/ab-page-icon01.svg";
import icon2 from "../assets/img/icon/ab-page-icon02.svg";
import icon3 from "../assets/img/icon/ab-page-icon03.svg";
import icon4 from "../assets/img/icon/ab-page-icon04.svg";

// Features data
const features = [
  {
    icon: icon1,
    title: "Deliver results",
    content: "At Innomax, delivering results means achieving success.",
    delay: "0ms",
  },
  {
    icon: icon2,
    title: "Being proactive",
    content: "At Innomax, being proactive means anticipating challenges.",
    delay: "100ms",
  },
  {
    icon: icon3,
    title: "Sustainable Growth",
    content: "Sustainable growth means achieving long-term success.",
    delay: "200ms",
  },
  {
    icon: icon4,
    title: "Maximize Speed",
    content: "We focus on delivering quick and efficient solutions.",
    delay: "300ms",
  },
];

// FeatureSection component
const FeatureSection = () => {
  return (
    <section className="fanfact pt-5 pb-5">
      <div className="container">
        <div className="ap-feature_wrap">
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-lg-3 col-md-6 mt-4" key={index}>
                <div
                  className="ap-feature-item wow fadeInUp"
                  data-wow-delay={feature.delay}
                  data-wow-duration="600ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "600ms",
                    animationDelay: feature.delay,
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="xb-item--icon mb-3">
                    <img src={feature.icon} alt={feature.title} />
                  </div>
                  <h4 className="xb-item--title">{feature.title}</h4>
                  <p className="xb-item--content">{feature.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
