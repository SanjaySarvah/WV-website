import React from "react";

const Footer = ({ className }) => {
  return (
    <footer
      className={`footer bg_img footer-style-two footer-style-three pt-10 pos-rel ${className || ""}`}
      style={{
        backgroundColor: "#010315",
        backgroundImage: "url(/assets/img/bg/footer_overly.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Internal CSS */}
      <style>{`
        /* Footer Grid Layout */
        .footer .footer-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          text-align: left !important;
          padding: 20px 0;
        }

        /* Extra gap only for Home page footer */
        .home-footer .footer-inner {
          gap: 40px;
        }

        /* Styling Footer Titles */
        .footer-widget .xb-item--sub-title {
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          display: block;
          margin-bottom: 10px;
        }

        /* Footer Links */
        .footer-widget .xb-item--holder li {
          margin-bottom: 6px;
        }
        .footer-widget .xb-item--holder li a {
          color: #ccc;
          font-size: 14px;
          text-decoration: none;
        }
        .footer-widget .xb-item--holder li a:hover {
          color: #fff;
        }

        /* Newsletter Section */
        .sa-newslatter p {
          font-size: 14px;
          color: #ddd;
          margin-bottom: 10px;
        }
        .xb-item--input_field {
          position: relative;
          margin-top: 8px;
        }
        .xb-item--input_field input {
          width: 100%;
          padding: 10px 40px 10px 10px;
          border-radius: 5px;
          border: none;
        }
        .xb-item--btn {
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
          background: #ff5c00;
          border: none;
          color: #fff;
          padding: 6px 10px;
          cursor: pointer;
          border-radius: 4px;
        }

        /* Copyright Section */
        .footer .copyright {
          padding: 8px 0;
          text-align: center;
        }
        .footer .copyright p {
          font-size: 14px;
          color: #000;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .footer .footer-inner {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
            padding: 15px 0;
          }
          .home-footer .footer-inner {
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .footer .footer-inner {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 10px 0;
          }
          .home-footer .footer-inner {
            gap: 15px;
          }
        }
      `}</style>

      <div className="container">
        <div className="xb-footer">
          <div className="footer-inner ul_li_between align-items-start">
            {/* Company */}
            <div className="footer-widget">
              <span className="xb-item--sub-title">Company</span>
              <ul className="xb-item--holder list-unstyled">
                {[
                  "AI & Generative AI",
                  "Engineering",
                  "Software",
                  "Cloud Computing",
                  "Cloud Services",
                ].map((item, i) => (
                  <li className="xb-item--list" key={i}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="footer-widget">
              <span className="xb-item--sub-title">Industries</span>
              <ul className="xb-item--holder list-unstyled">
                {[
                  "Aerospace and Defense",
                  "Automotive",
                  "Consumer Goods",
                  "Energy and Utilities",
                  "Global Capability Center",
                  "Life Sciences and Healthcare",
                  "Manufacturing",
                  "Mining and Natural Resources",
                  "Oil and Gas",
                  "Public Sector",
                  "Telecom Media and Entertainment Services",
                  "Travel, Transport, Logistics & Hospitality",
                  "Financial Services",
                  "Financial Crime Compliance and Risk",
                  "Fintech",
                ].map((industry, i) => (
                  <li className="xb-item--list" key={i}>
                    <a href="#">{industry}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div className="footer-widget">
              <span className="xb-item--sub-title">Information</span>
              <ul className="xb-item--holder list-unstyled">
                {[
                  "Application Services",
                  "Automation",
                  "Business Process Operations",
                  "Commercial Apps / SaaS",
                  "Cybersecurity",
                  "Data and AI",
                  "Digital Design and Manufacturing Services",
                  "Digital Engineering",
                  "Digital Workplace",
                  "Internet of Things (IoT)",
                  "Marketing Services",
                  "Operational Technology",
                  "Product Engineering",
                  "Supply Chain",
                  "Unified Service Management",
                ].map((info, i) => (
                  <li className="xb-item--list" key={i}>
                    <a href="#">{info}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            {/* <div className="sa-newslatter footer-widget">
              <span className="xb-item--sub-title">Newsletter</span>
              <p className="xb-item--content clr-white">
                Sign up Worley Ventures for weekly updates.
              </p>
              <div className="xb-item--input-box">
                <label htmlFor="emailInput">Email</label>
                <div className="xb-item--input_field pos-rel">
                  <input
                    type="email"
                    id="emailInput"
                    placeholder="Enter your email"
                  />
                  <button type="submit" className="xb-item--btn">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>

              <span className="xb-item--sub-title mt-4">Company</span>
              <ul className="xb-item--holder list-unstyled">
                {[
                  { name: "Career", href: "career.html" },
                  { name: "Press Release", href: "#" },
                  { name: "Testimonials", href: "#" },
                  { name: "Case Studies", href: "#" },
                  { name: "Partners", href: "#" },
                  { name: "Privacy Policy", href: "privacy-policy.html" },
                ].map((item, i) => (
                  <li className="xb-item--list" key={i}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="footer-copyright ul_li_between">
            <p className="copyright" style={{ color: "#000", margin: "5px 0" }}>
              Copyright © {new Date().getFullYear()}{" "}
              <a href="#" style={{ color: "#000" }}>
                Worley Ventures
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
