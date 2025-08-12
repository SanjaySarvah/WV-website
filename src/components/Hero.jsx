import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../assets/img/hero/heroimg01.png";
import heroVideo from "../homevideo.mp4";
import { Link } from "react-router-dom";

// Custom Button
const GetStartedButton = () => (
  <Link to="/contact" className="btn btn-primary btn-lg hero-btn">
    Get Started
  </Link>
);

const HeroSection = () => {
  return (
    <section className="hero-section text-white position-relative">
      {/* Background Video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

      {/* Content */}
      <div className="container position-relative z-2">
        <div className="row align-items-center min-vh-100 text-center text-md-start">
          <div className="col-lg-6 col-md-6">
            <h1 className="hero-title fw-bold mb-4">
              Transform Your Business <br /> with <span className="highlight">Reliable IT Solutions</span>
            </h1>
            <p className="lead hero-subtitle mb-4">
              Tailored IT solutions designed to enhance efficiency, security, and performance across your organization.
            </p>
            <GetStartedButton />
          </div>

          <div className="col-lg-6 col-md-6 mt-4 mt-md-0 text-center">
            <img src={heroImage} alt="Hero" className="img-fluid hero-img shadow-lg rounded" />
          </div>
        </div>
      </div>

      {/* Internal Styles */}
      <style jsx>{`
        .hero-section {
          position: relative;
          margin-top: 80px;
          overflow: hidden;
        }

        .bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .overlay {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%);
          z-index: 1;
        }

        .z-2 {
          z-index: 2;
        }

        .hero-title {
          font-size: 2.5rem;
          line-height: 1.3;
          color: #fff;
        }

        .highlight {
          color: #00d4ff;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          max-width: 90%;
        }

        .hero-btn {
          background: #00d4ff;
          border: none;
          padding: 12px 30px;
          font-size: 1.1rem;
          border-radius: 30px;
          transition: 0.3s ease;
        }

        .hero-btn:hover {
          background: #00b3e6;
          transform: scale(1.05);
        }

        .hero-img {
          max-width: 100%;
          height: auto;
          border-radius: 15px;
        }

        /* Responsive improvements */
        @media (max-width: 1199px) {
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
        }

        @media (max-width: 991px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 0.95rem;
          }
          
          .hero-btn {
            padding: 10px 25px;
            font-size: 1rem;
          }
        }

        @media (max-width: 767px) {
          .hero-title {
            font-size: 1.8rem;
          }
          .hero-subtitle {
            font-size: 1rem;
            margin: 0 auto 20px;
          }
          .hero-section {
            position: relative;
            margin-top: 0px !important;
            padding-top: 50px;
            overflow: hidden;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.6rem;
          }
          
          .hero-subtitle {
            font-size: 0.9rem;
          }
          
          .hero-btn {
            padding: 8px 20px;
            font-size: 0.9rem;
          }
          
          .hero-img {
            max-width: 90%;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.4rem;
          }
          
          .hero-subtitle {
            font-size: 0.85rem;
          }
          
          .hero-img {
            max-width: 85%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
