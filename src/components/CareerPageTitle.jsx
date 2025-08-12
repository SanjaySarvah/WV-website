import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Image imports
import bgImage from '../assets/img/bg/page_bg01.jpg';
import magicIcon from '../assets/img/icon/magic.svg';

const CareerPageTitle = () => {
  return (
    <section
      className="career-page-title position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="career-overlay"></div>
      
      <div className="container position-relative">
        <div className="career-content-wrapper">
          <div className="row justify-content-center">
            {/* Text Content - Now full width */}
            <div className="col-lg-10 col-md-12 col-sm-12">
              <div className="career-text-content text-center">
                <div className="career-badge">
                  <img src={magicIcon} alt="Careers Icon" className="career-icon" />
                  <span>Careers</span>
                </div>
                <h1 className="career-title">
                  Be a part of shaping the <br />
                  future &amp; career opportunities <br />
                  at Worley Ventures today.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        .career-page-title {
          padding: 120px 0 80px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .career-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%);
          z-index: 1;
        }

        .career-content-wrapper {
          position: relative;
          z-index: 2;
        }

        .career-text-content {
          padding: 0 20px;
        }

        .career-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.95);
          padding: 8px 16px;
          border-radius: 25px;
          margin-bottom: 24px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .career-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        .career-badge span {
          font-weight: 600;
          color: #333;
          font-size: 14px;
        }

        .career-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #fff;
          margin-bottom: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1199px) {
          .career-page-title {
            padding: 100px 0 60px;
          }

          .career-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 991px) {
          .career-page-title {
            padding: 80px 0 40px;
            min-height: auto;
          }

          .career-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .career-page-title {
            padding: 60px 0 30px;
          }

          .career-title {
            font-size: 2rem;
            line-height: 1.3;
          }

          .career-badge {
            padding: 6px 12px;
            margin-bottom: 20px;
          }

          .career-badge span {
            font-size: 13px;
          }

          .career-icon {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 576px) {
          .career-page-title {
            padding: 50px 0 20px;
          }

          .career-title {
            font-size: 1.8rem;
          }

          .career-badge {
            padding: 5px 10px;
            margin-bottom: 16px;
          }

          .career-badge span {
            font-size: 12px;
          }

          .career-icon {
            width: 16px;
            height: 16px;
          }
        }

        @media (max-width: 480px) {
          .career-title {
            font-size: 1.6rem;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .career-icon {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
      `}</style>
    </section>
  );
};

export default CareerPageTitle;
