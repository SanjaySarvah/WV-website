import React from "react";
import intimg from "../assets/img/int.png";

const leftCol1 = [
  { img: "https://cdn-icons-png.flaticon.com/512/226/226777.png", name: "Java" },
  { img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", name: "C++" },
  { img: "https://cdn-icons-png.flaticon.com/512/226/226269.png", name: "Python" },
  { img: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "Android" },
];

const rightCol2 = [
  { img: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png", name: "GitHub" },
  { img: "https://cdn-icons-png.flaticon.com/512/5969/5969257.png", name: "Flutter" },
  { img: "https://cdn-icons-png.flaticon.com/512/226/226777.png", name: "Java" },
  { img: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png", name: "AWS" },
];

const IntegrationColumn = ({ items, direction }) => (
  <div className={`marquee-container marquee-${direction}`}>
    <div className="marquee-track">
      {items.concat(items).map((item, i) => (
        <div className="integration-item" key={i}>
          <img src={item.img} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const ScrollingIntegrationSectionMobile = () => {
  return (
    <section className="integration-section-mobile">
      <style>{`
        .integration-section-mobile {
          padding: 20px 10px;
          width: 100%;
          background: linear-gradient(to bottom, #0B0B28, #1a1a40);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .top-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80%;
          max-width: 200px;
          margin-bottom: 20px;
          background: #0B0B28;
          border-radius: 50%;
          padding: 20px;
          border: 2px solid white;
        }

        .top-image-container img {
          width: 100%;
          height: auto;
        }

        .integration-container-mobile {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
          gap: 20px;
          width: 100%;
          min-height: 300px;
        }

        .marquee-container {
          height: 300px;
          overflow: hidden;
          width: 45%;
          max-width: 160px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 16px;
          border: 2px solid white;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        .marquee-track {
          display: flex;
          flex-direction: column;
          animation: scroll-up 12s linear infinite;
        }

        .marquee-down .marquee-track {
          animation: scroll-down 12s linear infinite;
        }

        .integration-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          padding: 10px 0;
        }

        .integration-item img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .integration-item span {
          font-size: 12px;
          font-weight: 500;
          color: black;
          text-align: center;
        }

        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        /* Responsive improvements */
        @media (max-width: 576px) {
          .integration-container-mobile {
            gap: 15px;
          }
          
          .marquee-container {
            width: 48%;
            max-width: 140px;
            height: 280px;
          }
          
          .integration-item img {
            width: 35px;
            height: 35px;
          }
          
          .integration-item span {
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .integration-container-mobile {
            gap: 10px;
          }
          
          .marquee-container {
            width: 50%;
            max-width: 120px;
            height: 260px;
          }
          
          .integration-item img {
            width: 30px;
            height: 30px;
          }
          
          .integration-item span {
            font-size: 10px;
          }
          
          .top-image-container {
            width: 90%;
            max-width: 180px;
            padding: 15px;
          }
        }

        @media (max-width: 360px) {
          .integration-container-mobile {
            flex-direction: column;
            gap: 15px;
          }
          
          .marquee-container {
            width: 100%;
            max-width: 200px;
            height: 200px;
          }
          
          .integration-item img {
            width: 35px;
            height: 35px;
          }
          
          .integration-item span {
            font-size: 11px;
          }
        }
      `}</style>

      {/* Top Image */}
      <div className="top-image-container">
        <img src={intimg} alt="Integration Center" />
      </div>

      {/* Two Scrolling Columns */}
      <div className="integration-container-mobile">
        <IntegrationColumn items={leftCol1} direction="up" />
        <IntegrationColumn items={rightCol2} direction="down" />
      </div>
    </section>
  );
};

export default ScrollingIntegrationSectionMobile;
