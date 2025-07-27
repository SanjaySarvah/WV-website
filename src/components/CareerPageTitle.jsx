import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Image imports
import bgImage from '../assets/img/bg/page_bg01.jpg';
import magicIcon from '../assets/img/icon/magic.svg';
import cpImg01 from '../assets/img/gallery/cp-img01.jpg';
import cpImg02 from '../assets/img/gallery/cp-img02.jpg';
import cpImg03 from '../assets/img/gallery/cp-img03.jpg';
import cpImg04 from '../assets/img/gallery/cp-img04.jpg';
import cpImg05 from '../assets/img/gallery/cp-img05.jpg';
import cpImg06 from '../assets/img/gallery/cp-img06.jpg';

const CareerPageTitle = () => {
  return (
    <section
      className="page-title cp-page-title pt-200 pos-rel bg_img"
      style={{
        backgroundImage: `url(${bgImage})`,
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="page-title-wrap">
          <div className="row mt-none-30 align-items-center">
            <div className="col-lg-8 mt-30">
              <div className="page-title-box">
                <span className="sub-title d-inline-flex align-items-center gap-2">
                  <img src={magicIcon} alt="icon" style={{ height: '20px' }} />
                  Careers
                </span>
                <h2 className="title">
                  Be a part of shaping the <br />
                  future &amp; career opportunities <br />
                  at Worley Ventures today.
                </h2>
              </div>
            </div>

            <div className="col-lg-4 mt-30">
              <div className="cp-img-slide">
                <div className="cp-img-inner ul_li">
                  {/* First marquee row */}
                  <div className="cp-item marquee-first">
                    {[cpImg01, cpImg02, cpImg03, cpImg01, cpImg02, cpImg03].map((img, index) => (
                      <div className="xb-img" key={`first-${index}`}>
                        <img src={img} alt={`gallery${index + 1}`} />
                      </div>
                    ))}
                  </div>

                  {/* Second marquee row */}
                  <div className="cp-item marquee-2">
                    {[cpImg04, cpImg05, cpImg06, cpImg04, cpImg05, cpImg06].map((img, index) => (
                      <div className="xb-img" key={`second-${index}`}>
                        <img src={img} alt={`gallery${index + 7}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPageTitle;
