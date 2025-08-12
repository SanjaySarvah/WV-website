import React from "react";
import eyeIcon from "../assets/img/icon/eye-icon.svg";
import tpWorkIcon01 from "../assets/img/icon/tp-work-icon01.svg";
import tpWorkIcon02 from "../assets/img/icon/tp-work-icon02.svg";
import tpWorkIcon03 from "../assets/img/icon/tp-work-icon03.svg";
import tpWorkIcon04 from "../assets/img/icon/tp-work-icon04.svg";
import tpWorkIcon05 from "../assets/img/icon/tp-work-icon05.svg";
import tpWorkIcon06 from "../assets/img/icon/tp-work-icon06.svg";
import smsWhiteIcon from "../assets/img/icon/sms-white-icon01.svg";
import { Link } from "react-router-dom";

const CareerWorkSection = () => {
  const items = [
    {
      icon: tpWorkIcon01,
      title: "Endless career growth",
      content:
        "We provide lots of career growth opportunities to our employees, which is reflected both financially and reputably.",
    },
    {
      icon: tpWorkIcon02,
      title: "Mentorship & learning",
      content:
        "We support peer assistance and offer mentorship programs like IT Talks and in-house courses for different roles.",
    },
    {
      icon: tpWorkIcon03,
      title: "Cozy & fun offices",
      content:
        "Our four R&D offices offer a gym, yoga mats, snacks, foosball, a VR set, and more for a comfortable workspace.",
    },
    {
      icon: tpWorkIcon04,
      title: "Competitive salary",
      content:
        "Our projects belong to a wide variety of industries, which will make your professional background more diverse.",
    },
    {
      icon: tpWorkIcon05,
      title: "Career change option",
      content:
        "No need to job hunt to learn new tech or switch roles—we’ll support your transition within Worley Ventures.",
    },
    {
      icon: tpWorkIcon06,
      title: "Friendly atmosphere",
      content:
        "We value people as Worley Ventures’ greatest asset and ensure hierarchy never works against our employees.",
    },
  ];

  return (
    <section
      className="work pt-130 pb-130"
      data-bg-color="#f6f6f8"
      style={{ backgroundColor: "#f6f6f8", overflow: "hidden" }}
    >
      <div className="container" style={{ overflow: "hidden" }}>
        <div className="sec-title--two text-center mb-60">
          <div className="sub-title">
            <img src={eyeIcon} alt="eye icon" /> Why work with us
          </div>
          <h2 className="title">Why people work with us</h2>
        </div>

        <div className="tp-work-wrap">
          <div className="row mt-30 mb-20">
            {items.map(({ icon, title, content }, idx) => (
              <div key={idx} className="col-lg-6 mt-30 mb-40">
                <div className="tp-work-item">
                  <div className="xb-item--inner ul_li">
                    <div className="xb-item--icon">
                      <img src={icon} alt={`${title} icon`} />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title">{title}</h3>
                      <p className="xb-item--content">{content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="header-contact text-center mt-80 headerCta">
            {/* <a
              href="https://worleyventure.com/contact-us"
              className="thm-btn thm-btn--aso -btn--header-blackthm"
            > */}
            <Link to="/contact-us" className="thm-btn thm-btn--aso -btn--header-blackthm">
              Let’s talk
              <img src={smsWhiteIcon} alt="sms icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerWorkSection;
