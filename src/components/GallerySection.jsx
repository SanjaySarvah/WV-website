import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Image imports
import eyeIcon from '../assets/img/icon/eye-icon.svg';
import img01 from '../assets/img/gallery/img01.jpg';
import img02 from '../assets/img/gallery/img02.jpg';
import img03 from '../assets/img/gallery/img03.jpg';
import img04 from '../assets/img/gallery/img04.jpg';
import img05 from '../assets/img/gallery/img05.jpg';
import img06 from '../assets/img/gallery/img06.jpg';
import img07 from '../assets/img/gallery/img07.jpg';
import img08 from '../assets/img/gallery/img08.jpg';
import img09 from '../assets/img/gallery/img09.jpg';
import img10 from '../assets/img/gallery/img10.jpg';
import img11 from '../assets/img/gallery/img11.jpg';

const GallerySection = () => {
  return (
    <section className="gallery pt-5 pb-5">
      <div className="container">
        <div className="text-center mb-5">
          <div className="sub-title d-inline-flex align-items-center gap-2 mb-2">
            <img src={eyeIcon} alt="Gallery Icon" style={{ height: '20px' }} />
            Our gallery
          </div>
          <h2 className="title">Explore stunning moments</h2>
        </div>

        <div className="gallery-wrap d-flex flex-wrap justify-content-between">
          {/* Gallery Item One */}
          <div className="gallery-item gallery-item--one d-flex flex-column">
            <div className="img img--1 mb-2 align-self-end">
              <img src={img01} alt="Gallery 1" className="img-fluid rounded-4" />
            </div>
            <div className="img img--2 mb-2">
              <img src={img02} alt="Gallery 2" className="img-fluid rounded-4" />
            </div>
            <div className="img img--1 align-self-end">
              <img src={img03} alt="Gallery 3" className="img-fluid rounded-4" />
            </div>
          </div>

          {/* Gallery Item Two */}
          <div className="gallery-item gallery-item--two d-flex flex-column justify-content-center">
            <div className="img img--2 mb-2">
              <img src={img04} alt="Gallery 4" className="img-fluid rounded-4" />
            </div>
            <div className="img img--1 align-self-end">
              <img src={img05} alt="Gallery 5" className="img-fluid rounded-4" />
            </div>
          </div>

          {/* Gallery Item Three */}
          <div className="gallery-item gallery-item--three d-flex flex-column">
            <div className="d-flex justify-content-between mb-2">
              <div className="img img--3 me-2">
                <img src={img06} alt="Gallery 6" className="img-fluid rounded-4" />
              </div>
              <div className="img img--4">
                <img src={img07} alt="Gallery 7" className="img-fluid rounded-4" />
              </div>
            </div>
            <div className="img img--4">
              <img src={img08} alt="Gallery 8" className="img-fluid rounded-4" />
            </div>
          </div>

          {/* Gallery Item Four */}
          <div className="gallery-item gallery-item--four d-flex flex-column">
            <div className="img img--1 mb-2 align-self-end">
              <img src={img09} alt="Gallery 9" className="img-fluid rounded-4" />
            </div>
            <div className="img img--2 mb-2">
              <img src={img10} alt="Gallery 10" className="img-fluid rounded-4" />
            </div>
            <div className="img img--5">
              <img src={img11} alt="Gallery 11" className="img-fluid rounded-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
