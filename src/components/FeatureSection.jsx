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
          <div className="row g-4">
            {features.map((feature, index) => (
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-4" key={index}>
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
      
      {/* Responsive CSS */}
      <style jsx>{`
        .ap-feature-item {
          text-align: center;
          padding: 20px;
          transition: transform 0.3s ease;
        }
        
        .ap-feature-item:hover {
          transform: translateY(-5px);
        }
        
        .xb-item--icon img {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }
        
        .xb-item--title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #333;
        }
        
        .xb-item--content {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.5;
        }
        
        @media (max-width: 1199px) {
          .xb-item--title {
            font-size: 1.2rem;
          }
          
          .xb-item--content {
            font-size: 0.9rem;
          }
        }
        
        @media (max-width: 991px) {
          .xb-item--icon img {
            width: 55px;
            height: 55px;
          }
          
          .xb-item--title {
            font-size: 1.15rem;
          }
        }
        
        @media (max-width: 768px) {
          .xb-item--icon img {
            width: 50px;
            height: 50px;
          }
          
          .xb-item--title {
            font-size: 1.1rem;
          }
          
          .xb-item--content {
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 576px) {
          .ap-feature-item {
            padding: 15px;
          }
          
          .xb-item--icon img {
            width: 45px;
            height: 45px;
          }
          
          .xb-item--title {
            font-size: 1rem;
          }
          
          .xb-item--content {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureSection;
