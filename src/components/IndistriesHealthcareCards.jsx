
import iconSearch from '../assets/img/icon/search01.svg';
import iconUser from '../assets/img/icon/user-icon.png';
import iconClipboard from '../assets/img/icon/clipboar02.svg';
import iconMedal from '../assets/img/icon/medal-star.svg';
import processIcon from '../assets/img/icon/process-icon.svg';
import processImage from '../assets/img/hero/Healthcare-App-Development-service-image.webp';
import patternShape from '../assets/img/shape/pattern.png';
import triangleShape02 from '../assets/img/shape/trangle-shape02.png';
import triangleShape03 from '../assets/img/shape/trangle-shape03.png';

const IndistriesHealthcareCards = () => {
    const processItems = [
        {
          icon: iconSearch,
          title: '24*7 Client Assistance',
          text: 'Ensure customer service & support with a dedicated project manager.',
        },
        {
          icon: iconUser,
          title: 'Agile Development Approach',
          text: 'Rapid development process to flawless & seamless project delivery.',
        },
        {
          icon: iconClipboard,
          title: '12+ Years of Experience',
          text: 'Deep experience in offering services & solutions in healthcare.',
        },
        {
          icon: iconMedal,
          title: 'CoE-Based Delivery Model',
          text: 'Centers of Excellence to facilitate cutting-edge technology solutions.',
        },
      ];
  return (
    <div>


<section className="process pt-130 pb-100 pos-rel" style={{ backgroundColor: '#fcc58d' }}>
      <div className="container">
        <div className="sec-title--two text-center mb-90">
          <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms">
            <img src={processIcon} alt="" /> Virtual Reality In the
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            Virtual Reality In the Healthcare Industry
          </h2>
        </div>

        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div className="sa-process-image wow fadeInRight" data-wow-duration="600ms">
                <img className="updown" src={processImage} alt="Healthcare App" />
              </div>
              <div className="process_shape">
                <img src={patternShape} alt="Decorative Shape" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="sa-process_left">
              {processItems.map((item, index) => (
                <div
                  key={index}
                  className={`process-item process-item--${['one', 'two', 'three', 'four'][index]}`}
                >
                  <div className="xb-item--icon">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h4 className="xb-item--title">{item.title}</h4>
                  <p className="xb-item--contact">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src={triangleShape02} alt="Triangle Shape 1" />
        </div>
        <div className="shape shape--two">
          <img src={triangleShape03} alt="Triangle Shape 2" />
        </div>
      </div>
    </section>
      </div>
      );
    };

    export default IndistriesHealthcareCards;