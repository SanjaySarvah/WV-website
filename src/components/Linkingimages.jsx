import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import serIcon01 from "../assets/img/icon/ser-icon01.svg";
import serIcon02 from "../assets/img/icon/ser-icon02.svg";
import serIcon03 from "../assets/img/icon/ser-icon03.svg";
import serIcon04 from "../assets/img/icon/ser-icon03.svg";

import serviceImg01 from "../assets/img/service/service-img01.jpg";
import serviceImg02 from "../assets/img/service/service-img02.jpg";
import serviceImg03 from "../assets/img/service/service-img03.jpg";
import serviceImg04 from "../assets/img/service/service-img04.jpg";

const services = [
  { name: "Managed IT Services", title: "Managed IT Services", icon: serIcon01, image: serviceImg02 },
  { name: "Software Development", title: "Software Development", icon: serIcon02, image: serviceImg01 },
  { name: "Cyber Security Services", title: "Cyber Security Services", icon: serIcon03, image: serviceImg03 },
  { name: "Cloud Services", title: "Cloud Services", icon: serIcon04, image: serviceImg04 },
];

const CoreExpertiseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="position-relative z-1 core-section">
      {/* Internal CSS */}
      <style>{`
        .core-section {
          min-height: 100vh;
          position: relative;
        }

        .service-image-item {
          transition: opacity 0.6s ease-in-out;
        }

        .core-card {
          max-width: 500px;
          padding: 30px;
          border-radius: 12px;
          background: #fff;
        }

        .service-list-item {
          transition: all 0.3s ease;
          font-size: 16px;
          padding: 15px 20px;
        }

        .service-list-item.active {
          transform: scale(1.02);
        }

        .service-list-item img {
          width: 26px;
          height: 26px;
        }

        @media (min-width: 1200px) {
          .core-card {
            max-width: 600px; /* Wider on desktop */
            padding: 40px;
          }
          .service-list-item h6 {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .core-card {
            max-width: 100%;
            padding: 20px;
          }
          .service-list-item {
            padding: 12px 10px;
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          .service-list-item img {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      {/* Background Images */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        {services.map((service, index) => (
          <div
            key={index}
            className={`position-absolute w-100 h-100 service-image-item ${
              index === activeIndex ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: index === activeIndex ? 1 : 0,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container position-relative d-flex align-items-center" style={{ zIndex: 2, minHeight: "100vh" }}>
        <div className="core-card shadow">
          <h3 className="mb-4 fw-bold text-primary">Core Expertise</h3>
          <div className="position-relative">
            {services.map((service, index) => (
              <div
                key={index}
                className={`d-flex justify-content-between align-items-center rounded service-list-item mb-2 ${
                  index === activeIndex ? "active bg-primary text-white" : "bg-light"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center gap-3">
                  <img src={service.icon} alt={service.title} />
                  <h6 className="mb-0">{service.title}</h6>
                </div>
                <svg width="12" height="12" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M12 1C12 0.448 11.552 0 11 0H2C1.448 0 1 0.448 1 1C1 1.552 1.448 2 2 2H10V10C10 10.552 10.448 11 11 11C11.552 11 12 10.552 12 10V1ZM1.707 11.707L11.707 1.707L10.293 0.293L0.293 10.293L1.707 11.707Z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreExpertiseSection;
