import React from "react";
import bgImg from "../assets/img/cta/bg-img.png";
import sdImg from "../assets/img/hero/sd-img.png";

const CareerCtaSection = () => {
  return (
    <>
      <style>{`
        .cta {
          padding: 2rem 0;
          font-family: Arial, sans-serif;
        }
        .cta .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 20px;
          background-color: #0057ff; /* bright blue */
          color: white;
          background-image: url(${bgImg});
          background-size: cover;
          background-position: center;
          padding: 3rem 4rem;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          min-height: 280px;
          position: relative;
          overflow: hidden;
        }
        .xb-item--holder {
          flex: 1 1 450px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          animation: fadeInLeft 0.6s ease forwards;
          visibility: visible;
        }
        .xb-item--title {
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0;
          line-height: 1.1;
          text-transform: uppercase;
        }
        .xb-item--content {
          font-size: 1.1rem;
          line-height: 1.5;
          opacity: 0.85;
        }
        .xb-btn {
          display: flex;
          justify-content: center; /* Center the button */
          margin-top: 1.5rem;
          width: 100%;
        }
        .xb-btn a {
          max-width: 280px;
          width: 100%;
          text-align: center;
          padding: 0.75rem 2rem;
          background: white;
          color: #0057ff;
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: 6px;
          text-decoration: none;
          transition: background-color 0.3s ease, color 0.3s ease;
          display: inline-block;
          box-sizing: border-box;
          word-break: break-word;
        }
        .xb-btn a:hover {
          background-color: #e6e6e6;
          color: #003bb5;
        }
        .cta-right_img {
          flex: 1 1 300px;
          display: flex;
          justify-content: center;
          animation: fadeInRight 0.6s ease forwards;
          visibility: visible;
          position: relative;
        }
        .cta-right_img img {
          max-width: 100%;
          height: auto;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          max-height: 280px;
          transition: transform 0.3s ease;
        }
        /* Animations */
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .cta .container {
            flex-direction: column;
            padding: 2rem 1.5rem;
            min-height: auto;
          }
          .xb-item--holder {
            text-align: center;
            flex: none;
            width: 100%;
          }
          .xb-item--title {
            font-size: 1.8rem;
          }
          .xb-item--content {
            font-size: 1rem;
          }
          .xb-btn {
            justify-content: center;
            margin-top: 1.5rem;
          }
          .xb-btn a {
            max-width: 100%; /* let it take full width on mobile */
            width: auto;
            font-size: 1rem;
            padding: 0.75rem 1.5rem;
            min-width: 200px;
          }
          .cta-right_img {
            margin-top: 2rem;
            flex: none;
            width: 200px;
            align-self: center;
          }
          .cta-right_img img {
            width: 200px;
            height: 200px;
          }
        }
        @media (max-width: 400px) {
          .xb-item--title {
            font-size: 1.4rem;
          }
          .xb-item--content {
            font-size: 0.9rem;
          }
          .cta-right_img {
            width: 140px;
          }
          .cta-right_img img {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>

      <section className="cta" aria-label="Career Call to Action Section">
        <div className="container">
          <div className="xb-item--holder">
            <h2 className="xb-item--title">QUALITY GROWS WITH EXPERIENCE</h2>
            <span className="xb-item--content">
              accessible &amp; affordable for small &amp; medium enterprises
            </span>
            <div className="xb-btn">
              <a href="https://worleyventure.com/contact-us" tabIndex={0}>
                Book a free consultation
              </a>
            </div>
          </div>

          <div className="cta-right_img">
            <img className="updown" src={sdImg} alt="Woman using phone" />
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerCtaSection;
