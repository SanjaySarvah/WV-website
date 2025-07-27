import React from "react";

const TeamDetailsSection = () => {
  return (
    <section className="details-section">
      <div className="container">
        <div className="features">
          <ul>
            <li><span className="icon">✔</span> Skilled and Experienced Team.</li>
            <li><span className="icon">✔</span> Comprehensive IT Support.</li>
            <li><span className="icon">✔</span> Expertise Across Technologies.</li>
            <li><span className="icon">✔</span> 24/7 Support and Monitoring.</li>
          </ul>
        </div>

        <div className="cta-button">
          <button>
            <span>Meet our team</span>
            <span className="circle-icon">↗</span>
          </button>
        </div>

        <div className="description">
          <h2>Our dedicated IT experts team committed to your success</h2>
          <p>
            Our dedicated IT experts are committed to your success, delivering tailored, scalable
            solutions that drive growth and efficiency. Your success is our focus.
          </p>
        </div>
      </div>

      <style jsx>{`
        .details-section {
          background: #edf1f4;
          padding: 20px 30px 50px 20px;
        }

        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          gap: 30px;
        }

        .features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .features li {
          font-size: 16px;
          color: #1a1a1a;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
        }

        .features .icon {
          background-color: #003087;
          color: #fff;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          font-size: 13px;
        }

        .cta-button {
          flex-shrink: 0;
        }

        .cta-button button {
          display: flex;
          align-items: center;
          background-color: #003087;
          color: white;
          border: none;
          border-radius: 999px;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          gap: 10px;
        }

        .cta-button .circle-icon {
          background-color: white;
          color: #003087;
          border-radius: 50%;
          padding: 6px;
          font-size: 12px;
        }

        .description {
          max-width: 400px;
        }

        .description h2 {
          font-size: 22px;
          font-weight: 700;
          color: #003087;
          margin-bottom: 15px;
        }

        .description p {
          font-size: 15px;
          color: #444;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            text-align: center;
          }

          .cta-button {
            order: 2;
          }

          .description {
            order: 3;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamDetailsSection;
