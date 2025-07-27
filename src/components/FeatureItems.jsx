import React from 'react';

const features = [
  {
    icon: 'https://worleyventure.com/assets/img/icon/user-icon.png',
    title: 'Expert team members',
    content: 'We take pride in assembling a diverse and highly skilled.',
  },
  {
    icon: 'https://worleyventure.com/assets/img/icon/music-play.png',
    title: 'Fastest customer service',
    content: 'We pride ourselves on providing the fastest customer service industry.',
  },
  {
    icon: 'https://worleyventure.com/assets/img/icon/dollar-circle.png',
    title: 'Reasonable pricing',
    content: 'We believe in providing reasonable pricing that offers exceptional.',
  },
];

const FeatureItems = () => {
  return (
    <div className="feature-container">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">
            <img src={feature.icon} alt={feature.title} />
          </div>
          <div className="feature-text">
            <h4>{feature.title}</h4>
            <p>{feature.content}</p>
          </div>
        </div>
      ))}

      {/* Internal CSS */}
      <style jsx>{`
        .feature-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
          margin-top: 20px;
        }

        .feature-card {
          flex: 1 1 30%;
          min-width: 250px;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 20px;
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          background-color: #ffece3;
          border-radius: 50%;
          padding: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-icon img {
          width: 40px;
          height: 40px;
        }

        .feature-text h4 {
          margin: 0 0 6px;
          color: #003087;
          font-weight: 600;
          font-size: 16px;
        }

        .feature-text p {
          margin: 0;
          color: #333;
          font-size: 14px;
          line-height: 1.5;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .feature-container {
            flex-direction: column;
            align-items: center;
          }

          .feature-card {
            flex: 1 1 100%;
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default FeatureItems;
