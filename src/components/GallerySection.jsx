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
    { src: img01, alt: "Gallery 1", category: "featured" },
    { src: img02, alt: "Gallery 2", category: "standard" },
    { src: img03, alt: "Gallery 3", category: "featured" },
    { src: img04, alt: "Gallery 4", category: "standard" },
    { src: img05, alt: "Gallery 5", category: "standard" },
    { src: img06, alt: "Gallery 6", category: "featured" },
    { src: img07, alt: "Gallery 7", category: "standard" },
    { src: img08, alt: "Gallery 8", category: "featured" },
    { src: img09, alt: "Gallery 9", category: "standard" },
    { src: img10, alt: "Gallery 10", category: "featured" },
    { src: img11, alt: "Gallery 11", category: "standard" },
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

          {/* Gallery with All 11 Images - No Cropping */}
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
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <i className="bi bi-zoom-in fs-4 text-white"></i>
                      <p className="text-white mb-0 mt-2 small">Click to view</p>
                    </div>
                  </div>
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

      {/* Custom CSS for Gallery with All Images - No Cropping */}
      <style jsx>{`
        .gallery-container {
          margin-bottom: 2rem;
          width: 100%;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1rem;
          width: 100%;
          animation: gridAppear 0.8s ease-out 0.5s both;
        }

        @keyframes gridAppear {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          background: #f8f9fa;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 160px;
          animation: fadeInUp 0.6s ease-out forwards, float 6s ease-in-out infinite;
          opacity: 0;
          transform: translateY(30px);
        }

        .gallery-item:nth-child(1) { animation-delay: 0.1s; }
        .gallery-item:nth-child(2) { animation-delay: 0.2s; }
        .gallery-item:nth-child(3) { animation-delay: 0.3s; }
        .gallery-item:nth-child(4) { animation-delay: 0.4s; }
        .gallery-item:nth-child(5) { animation-delay: 0.5s; }
        .gallery-item:nth-child(6) { animation-delay: 0.6s; }
        .gallery-item:nth-child(7) { animation-delay: 0.7s; }
        .gallery-item:nth-child(8) { animation-delay: 0.8s; }
        .gallery-item:nth-child(9) { animation-delay: 0.9s; }
        .gallery-item:nth-child(10) { animation-delay: 1.0s; }
        .gallery-item:nth-child(11) { animation-delay: 1.1s; }

        .gallery-item:hover {
          transform: translateY(-8px) scale(1.03) rotate(1deg);
          box-shadow: 0 15px 35px rgba(0,0,0,0.25);
        }

        .gallery-item:hover .image-overlay {
          opacity: 1;
          transform: scale(1.05);
        }

        .gallery-image {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 8px;
          filter: brightness(0.95);
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.08);
          filter: brightness(1.1);
        }

        /* Staggered Animation Keyframes */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Floating Animation for Subtle Movement */
        .gallery-item:nth-child(odd) {
          animation: fadeInUp 0.6s ease-out forwards, float 6s ease-in-out infinite;
        }

        .gallery-item:nth-child(even) {
          animation: fadeInUp 0.6s ease-out forwards, float 6s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        /* Glow Effect on Hover */
        .gallery-item::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
          border-radius: 14px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
          background-size: 400% 400%;
          animation: gradientShift 3s ease infinite;
        }

        .gallery-item:hover::before {
          opacity: 1;
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Image Loading Animation */
        .gallery-image {
          animation: imageLoad 0.8s ease-out;
        }

        @keyframes imageLoad {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Bounce Effect for Click */
        .gallery-item:active {
          animation: bounce 0.3s ease;
        }

        @keyframes bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
          }
        }

        /* Shimmer Effect */
        .gallery-item::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.5s;
          z-index: 1;
        }

        .gallery-item:hover::after {
          left: 100%;
        }

        /* Magnetic Pull Effect */
        .gallery-item {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.1s ease-out;
        }

        /* Parallax Tilt Effect */
        .gallery-item {
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .gallery-item:hover {
          transform: translateY(-8px) scale(1.03) rotateX(5deg) rotateY(5deg);
        }

        /* Image 3D Rotation */
        .gallery-image {
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.08) rotateX(-2deg) rotateY(-2deg);
        }

        /* Ripple Effect on Click */
        .gallery-item {
          position: relative;
          overflow: hidden;
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        /* Breathing Effect */
        .gallery-item {
          animation: fadeInUp 0.6s ease-out forwards, 
                     float 6s ease-in-out infinite,
                     breathe 4s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% {
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          50% {
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          }
        }

        /* Neon Glow Pulse */
        .gallery-item:hover {
          box-shadow: 0 15px 35px rgba(0,0,0,0.25),
                     0 0 20px rgba(255, 107, 107, 0.3),
                     0 0 40px rgba(78, 205, 196, 0.2);
        }

        /* Image Morphing Effect */
        .gallery-image {
          filter: brightness(0.95) contrast(1.05) saturate(1.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-item:hover .gallery-image {
          filter: brightness(1.1) contrast(1.1) saturate(1.2) hue-rotate(5deg);
        }

        /* Border Animation */
        .gallery-item {
          border: 2px solid transparent;
          background: linear-gradient(45deg, #f8f9fa, #e9ecef) padding-box,
                      linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4) border-box;
          background-size: 200% 200%;
          animation: borderShift 3s ease infinite;
        }

        @keyframes borderShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Hover State Border Animation */
        .gallery-item:hover {
          border-width: 3px;
          background: linear-gradient(45deg, #f8f9fa, #e9ecef) padding-box,
                      linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4) border-box;
          background-size: 400% 400%;
          animation: borderShift 1.5s ease infinite;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
          transform: scale(0.8);
          backdrop-filter: blur(2px);
        }

        .overlay-content {
          text-align: center;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-item:hover .overlay-content {
          transform: translateY(0);
        }

        .overlay-content i {
          transition: all 0.3s ease;
          transform: scale(0.8);
        }

        .gallery-item:hover .overlay-content i {
          transform: scale(1.2);
          animation: pulse 1.5s ease-in-out infinite, 
                     rotate 2s linear infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1.4);
          }
        }

        @keyframes rotate {
          from {
            transform: scale(1.2) rotate(0deg);
          }
          to {
            transform: scale(1.2) rotate(360deg);
          }
        }

        /* Text Animation */
        .overlay-content p {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease 0.1s;
        }

        .gallery-item:hover .overlay-content p {
          opacity: 1;
          transform: translateY(0);
        }

        /* Overlay Background Animation */
        .image-overlay {
          background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }

        .gallery-item:hover .image-overlay {
          background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6));
          background-size: 400% 400%;
          animation: gradientMove 1.5s ease infinite;
        }

        @keyframes gradientMove {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 1rem;
          }
          .gallery-item {
            height: 140px;
          }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 0.75rem;
          }
          .gallery-item {
            height: 120px;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 0.5rem;
          }
          .gallery-item {
            height: 100px;
          }
        }

        /* Image Modal Styles */
        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
        }

        .modal-content {
          position: relative;
          max-width: 95%;
          max-height: 95%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .close-btn {
          position: absolute;
          top: -50px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10000;
          padding: 0.5rem;
        }

        .modal-image-container {
          max-width: 100%;
          max-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-image {
          max-width: 100%;
          max-height: 80vh;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .modal-caption {
          margin-top: 1rem;
          text-align: center;
        }

        /* Gallery Stats */
        .gallery-stats {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .stat-item h3 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          font-size: 1rem;
          color: #6c757d;
        }
      `}</style>
    </>
  );
};

export default GallerySection;
