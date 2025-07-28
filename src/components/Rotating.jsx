import {useRef,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrophy, FaBullseye, FaWifi } from 'react-icons/fa';

// Import images from src/assets/img
import aboutImg from '../assets/img/about_img01.jpg';
import aboutShape1 from '../assets/img/about_shape01.png';
import aboutShape2 from '../assets/img/about_shape02.png';

// RotatingText Component
const RotatingText = ({ text }) => {
  const circleRef = useRef(null);
  // const text = " CIRCULAR TEXT ROTATION ✨ ";
  const radius = 100;
  const angleStep = 360 / text.length;

  useEffect(() => {
    const circle = circleRef.current;
    circle.innerHTML = ""; // Clear any existing spans

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.innerText = text[i];
      const angle = angleStep * i;
      span.style.transform = `
        rotate(${angle}deg)
        translate(${radius}px)
        rotate(90deg)
      `;
      circle.appendChild(span);
    }
  }, []);

  return <div className="circle" ref={circleRef}></div>;
};

// AboutSection Component
const AboutSection = () => {
  return (
    <section id="about" className="about-area pt-5 pb-5" style={{ color: "#49515b", overflow: "hidden", position: 'relative' }}>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Image Section */}
          <div className="col-lg-6">
            <div className="about-img-wrap position-relative">
              <div className="mask-img-wrap">
                <img src={aboutImg} alt="Apexa" className="img-fluid" />
              </div>
              <div className="shape position-absolute">
                <img src={aboutShape1} alt="Shape" className="img-fluid" />
              </div>
              <div className="experience-year position-relative d-flex align-items-center mt-3">
                <div className="icon me-2">
                  <FaTrophy size={90} />
                </div>
                <div className="content RotatingYear">
                  <RotatingText text={'Years Of - Experience 25 -'} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-title mb-4">
                <span className="sub-title" style={{ color: "#49515b", fontWeight: '600' }}>SIMPLY KNOW ABOUT</span>
                <h2 className="title" style={{ perspective: '400px', fontSize: '3.2rem', color: '#033494' }}>
                  We Help Organizations To <br /> Make Ultimate Businesses Growth Success.
                </h2>
              </div>

              <div className="about-list">
                <ul className="list-unstyled d-flex">
                  <li className="d-flex mb-3 me-9">
                    <div className="icon me-4 mt-4">
                      <FaBullseye size={45} />
                    </div>
                    <div className="content">
                      <h4 className="title mb-1 lh-base" style={{ color: "#033494" }}>Business Solutions</h4>
                      <p>Empowering Growth.<br />Simplifying Business.</p>
                    </div>
                  </li>
                  <li className="d-flex mb-3">
                    <div className="icon me-4 ms-4 mt-4">
                      <FaWifi size={45} />
                    </div>
                    <div className="content">
                      <h4 className="title mb-1 lh-base" style={{ color: "#033494" }}>Quality Services</h4>
                      <p>Excellence Delivered, Every <br />Time.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="mt-4" style={{ fontWeight: "500", fontSize: '1rem' }}>
                We successfully handle tasks of varying complexity, provide long-term guarantees, and continuously master new practice area technologies. Our portfolio includes dozens of organized projects that demonstrate our commitment to quality, innovation, and reliability.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Background Shape */}
      <div className="about-left-shape position-absolute" style={{ bottom: 0, left: 0 }}>
        <img src={aboutShape2} alt="Shape" className="dark-opacity" />
      </div>
    </section>
  );
};

export default AboutSection;
