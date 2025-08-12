import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const cardData = [
  {
    id: 1,
    title: "About us",
    description:
      "To deliver cutting-edge IT solutions that drive business growth, boost productivity, and ensure long-term competitiveness.",
    image: "https://worleyventure.com/assets/img/about/img-03.png",
  },
  {
    id: 2,
    title: "Our mission",
    description:
      "Empowering innovation through scalable, secure, and intelligent digital solutions tailored to your unique needs.",
    image: "https://worleyventure.com/assets/img/about/img-03.png",
  },
  {
    id: 3,
    title: "Our vision",
    description:
      "To be a global leader in IT services by fostering excellence, embracing agility, and enabling digital transformation.",
    image: "https://worleyventure.com/assets/img/about/img-03.png",
  },
];

const InfoCards = () => {
  const [activeCard, setActiveCard] = useState(2); // Default active card

  const getCardStyle = (isActive, image) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: isActive ? "80%" : "90%", // Slight zoom on inactive
    backgroundPosition: "top right", // All cards top-right aligned
    backgroundRepeat: "no-repeat",
    backgroundColor: "#1c1c64",
    color: "white",
    transition: "all 0.4s ease-in-out",
    width: "100%",
    maxWidth: "400px",
    height: isActive ? "500px" : "400px",
    borderRadius: "20px",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  });

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "20px",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    alignItems: "stretch",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
  };

  return (
    <div className="container-fluid my-5">
      <div style={containerStyle}>
        {cardData.map((card) => {
          const isActive = activeCard === card.id;
          return (
            <div
              key={card.id}
              style={getCardStyle(isActive, card.image)}
              onMouseEnter={() => setActiveCard(card.id)} // Hover to activate
            >
              <div style={overlayStyle}>
                <div style={titleStyle}>
                  <i className="bi bi-box me-2"></i>
                  {card.title}
                </div>
                <hr />
                {isActive && <p style={descriptionStyle}>{card.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 1199px) {
          .container-fluid {
            padding: 0 20px;
          }
        }
        
        @media (max-width: 991px) {
          .container-fluid {
            padding: 0 15px;
          }
        }
        
        @media (max-width: 768px) {
          .container-fluid {
            padding: 0 10px;
          }
        }
        
        @media (max-width: 576px) {
          .container-fluid {
            padding: 0 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default InfoCards;
