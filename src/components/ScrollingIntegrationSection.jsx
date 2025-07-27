import React from "react";
import "./ScrollingIntegrationSection.css";
import intimg from "../assets/img/int.png"

const leftCol1 = [
  { img: "https://cdn-icons-png.flaticon.com/512/226/226777.png", name: "Java" },
  { img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", name: "C++" },
  { img: "https://cdn-icons-png.flaticon.com/512/226/226269.png", name: "Python" },
  { img: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "Android" },
];

const leftCol2 = [
  { img: "https://cdn-icons-png.flaticon.com/512/226/226772.png", name: ".NET" },
  { img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png", name: "Bootstrap" },
  { img: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "Android" },
  { img: "https://cdn-icons-png.flaticon.com/512/226/226777.png", name: "Java" },
];

const rightCol1 = [
  { img: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png", name: "AWS" },
  { img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", name: "Python" },
  { img: "https://cdn-icons-png.flaticon.com/512/732/732190.png", name: "Android" },
  { img: "https://cdn-icons-png.flaticon.com/512/226/226269.png", name: "Python" },
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

const ScrollingIntegrationSection = () => {
  return (
    <section className="integration-section">

      <div className="frosted-glass-overlay"></div>
      
      <div className="integration-container">
    
        <div className="left-columns">
          <IntegrationColumn items={leftCol1} direction="up" />
   
        </div>
          <div className="left-columns">
         
          <IntegrationColumn items={leftCol2} direction="down" />
        </div>

      
        <div className="center-image-container">
          <img
            src={intimg}
            alt="Integration Center"
            className="center-image"
          />
        </div>

      
        <div className="right-columns">
          <IntegrationColumn items={rightCol1} direction="up" />
      
        </div>
         <div className="right-columns">
   
          <IntegrationColumn items={rightCol2} direction="down" />
        </div>
      </div>
    </section>
  );
};

export default ScrollingIntegrationSection;