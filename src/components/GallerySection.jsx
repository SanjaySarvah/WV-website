import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Image imports
import eyeIcon from '../assets/img/icon/eye-icon.svg';
import img01 from '../assets/img/gallery/img01.webp';
import img02 from '../assets/img/gallery/img02.jpg';
import img03 from '../assets/img/gallery/img03.webp';
import img04 from '../assets/img/gallery/img04.jpg';
import img05 from '../assets/img/gallery/img05.jpg';
import img06 from '../assets/img/gallery/img06.jpg';
import img07 from '../assets/img/gallery/img07.jpg';
import img08 from '../assets/img/gallery/img08.webp';
import img09 from '../assets/img/gallery/img09.jpg';
import img10 from '../assets/img/gallery/img10.webp';
import img11 from '../assets/img/gallery/img11.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: img01, alt: "Gallery 1" },
    { src: img02, alt: "Gallery 2" },
    { src: img03, alt: "Gallery 3" },
    { src: img04, alt: "Gallery 4" },
    { src: img05, alt: "Gallery 5" },
    { src: img06, alt: "Gallery 6" },
    { src: img07, alt: "Gallery 7" },
    { src: img08, alt: "Gallery 8" },
    { src: img09, alt: "Gallery 9" },
    { src: img10, alt: "Gallery 10" },
    { src: img11, alt: "Gallery 11" },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <>
      <section className="gallery-section pt-130 pb-130" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-80">
            <div className="sub-title d-inline-flex align-items-center gap-3 mb-3">
              <img src={eyeIcon} alt="Gallery Icon" style={{ height: '24px' }} />
              <span className="text-primary fw-semibold">Our Gallery</span>
            </div>
            <h2 className="title display-4 fw-bold mb-3">Explore Stunning Moments</h2>
            <p className="text-muted fs-5">Discover the beauty and creativity behind our work</p>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-container">
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="gallery-item" 
                  onClick={(e) => {
                    createRipple(e);
                    openModal(image);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.zIndex = '1';
                  }}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="gallery-image" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Stats */}
          <div className="gallery-stats text-center mt-80">
            <div className="row">
              <div className="col-md-3 col-6 mb-4">
                <div className="stat-item">
                  <h3 className="text-primary fw-bold mb-2">500+</h3>
                  <p className="text-muted mb-0">Projects Completed</p>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-4">
                <div className="stat-item">
                  <h3 className="text-primary fw-bold mb-2">50+</h3>
                  <p className="text-muted mb-0">Happy Clients</p>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-4">
                <div className="stat-item">
                  <h3 className="text-primary fw-bold mb-2">5+</h3>
                  <p className="text-muted mb-0">Years Experience</p>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-4">
                <div className="stat-item">
                  <h3 className="text-primary fw-bold mb-2">24/7</h3>
                  <p className="text-muted mb-0">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              <i className="bi bi-x-lg"></i>
            </button>
            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="modal-image" 
              />
            </div>
            <div className="modal-caption">
              <h5 className="text-white mb-0">{selectedImage.alt}</h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;