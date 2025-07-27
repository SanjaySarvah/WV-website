
import iconSearch from '../assets/img/icon/search01.svg';
import iconUser from '../assets/img/icon/user-icon.png';
import iconClipboard from '../assets/img/icon/clipboar02.svg';
import iconMedal from '../assets/img/icon/medal-star.svg';

import manufacturingimg from '../assets/img/hero/manufacturing-hero.webp';

import triangleShape02 from '../assets/img/shape/trangle-shape02.png';
import triangleShape03 from '../assets/img/shape/trangle-shape03.png';

const IndustriesManufacturingCards = () => {

  return (
    <div>


<section
      className="process pt-130 pb-100 pos-rel"
      style={{ backgroundColor: '#fcc58d' }}
    >
      <div className="container">
        <div className="sec-title--two text-center mb-90">
          <div
            className="sub-title sub-title--strock wow fadeInDown"
            data-wow-duration="600ms"
          >
            <img src="assets/img/icon/process-icon.svg" alt="" />
            IT Solutions for Manufacturing Industry
          </div>
          <h2
            className="title clr-white wow fadeInDown"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            Features of Manufacturing Software Development
          </h2>
        </div>

        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="sa-process_right">
              <div
                className="sa-process-image wow fadeInRight"
                data-wow-duration="600ms"
              >
                <img
                  className="updown"
                  src={manufacturingimg}
                  alt="Manufacturing Software"
                />
              </div>
              <div className="process_shape">
                <img src="assets/img/shape/pattern.png" alt="Decorative Shape" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="sa-process_left">
              {/* Process Item 1 */}
              <div className="process-item process-item--one">
                <div className="xb-item--icon">
                  <img src={iconSearch} alt="" />
                </div>
                <h4 className="xb-item--title">Active Quality Control</h4>
                <p className="xb-item--contact">
                  Streamline infrastructure management through automated provisioning
                  and scaling, while leveraging Kubernetes consulting services for
                  optimized container orchestration and improved scalability.
                </p>
              </div>

              {/* Process Item 2 */}
              <div className="process-item process-item--two">
                <div className="xb-item--icon">
                  <img src={iconUser} alt="" />
                </div>
                <h4 className="xb-item--title">Robust inventory tracking</h4>
                <p className="xb-item--contact">
                  Opting the right manufacturing ERP software system for the company is
                  quite tricky. Well organized manufacturing software should have the
                  following features to lead a profitable enterprise.
                </p>
              </div>

              {/* Process Item 3 */}
              <div className="process-item process-item--three">
                <div className="xb-item--icon">
                  <img src={iconClipboard} alt="" />
                </div>
                <h4 className="xb-item--title">
                  Well set project life cycle management
                </h4>
                <p className="xb-item--contact">
                  Opting the right manufacturing ERP software system for the company is
                  quite tricky. Well organized manufacturing software should have the
                  following features to lead a profitable enterprise.
                </p>
              </div>

              {/* Process Item 4 */}
              <div className="process-item process-item--four">
                <div className="xb-item--icon">
                  <img src={iconMedal} alt="" />
                </div>
                <h4 className="xb-item--title">
                  Operative distribution requirement planning
                </h4>
                <p className="xb-item--contact">
                  Opting the right manufacturing ERP software system for the company is
                  quite tricky. Well organized manufacturing software should have the
                  following features to lead a profitable enterprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="sa-process_shape">
        <div className="shape shape--one">
          <img src={triangleShape02} alt="Triangle Shape" />
        </div>
        <div className="shape shape--two">
          <img src={triangleShape03} alt="Triangle Shape" />
        </div>
      </div>
    </section>
      </div>
      );
    };

    export default IndustriesManufacturingCards;