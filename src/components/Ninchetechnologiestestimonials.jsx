import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import testimonialImg from "../assets/img/testimonial/da-tes-img.png";
import ixicoLogo from "../assets/img/testimonial/ixico-logo.png";
import flowerIcon from "../assets/img/icon/flower-icon-blue.svg";


const NincheTechnologiesTestimonialSection = () => {
  useEffect(() => {
    
  }, []);

  const testimonials = [
    {
      title:
        "Transforming a leading medical imaging service provider with Microsoft Cloud",
      contentOne:
        "With the ambition to scale and further develop its AI-imaging biomarker service offering to the global clinical trial market, IXICO came to us for a secure and seamless cloud transformation.",
      meta: [
        {
          number: "$3 Million",
          text:
            "Annual cost savings achieved through optimized trial operations.",
        },
        {
          number: "200+ Clinical Trials",
          text:
            "Supported globally with IXICO's AI-enhanced imaging biomarkers.",
        },
      ],
      contentTwo:
        "IXICO is a premium, specialist neuroimaging services provider to the global biopharmaceutical industry.",
      contentThree:
        "The company develops and deploys therapeutic specific AI (Artificial Intelligence) algorithms designed to reduce clinical trial size and costs whilst simultaneously improving insights to increase the likelihood of approval in neurological clinical trials.",
      image: testimonialImg,
      logo: ixicoLogo,
    },
    {
      title:
        "Transforming a leading medical imaging service provider with Microsoft Cloud",
      contentOne:
        "With the ambition to scale and further develop its AI-imaging biomarker service offering to the global clinical trial market, IXICO came to us for a secure and seamless cloud transformation.",
      meta: [
        {
          number: "$3 Million",
          text:
            "Annual cost savings achieved through optimized trial operations.",
        },
        {
          number: "200+ Clinical Trials",
          text:
            "Supported globally with IXICO's AI-enhanced imaging biomarkers.",
        },
      ],
      contentTwo:
        "IXICO is a premium, specialist neuroimaging services provider to the global biopharmaceutical industry.",
      contentThree:
        "The company develops and deploys therapeutic specific AI (Artificial Intelligence) algorithms designed to reduce clinical trial size and costs whilst simultaneously improving insights to increase the likelihood of approval in neurological clinical trials.",
      image: testimonialImg,
      logo: ixicoLogo,
    },
    {
      title:
        "Transforming a leading medical imaging service provider with Microsoft Cloud",
      contentOne:
        "With the ambition to scale and further develop its AI-imaging biomarker service offering to the global clinical trial market, IXICO came to us for a secure and seamless cloud transformation.",
      meta: [
        {
          number: "$3 Million",
          text:
            "Annual cost savings achieved through optimized trial operations.",
        },
        {
          number: "200+ Clinical Trials",
          text:
            "Supported globally with IXICO's AI-enhanced imaging biomarkers.",
        },
      ],
      contentTwo:
        "IXICO is a premium, specialist neuroimaging services provider to the global biopharmaceutical industry.",
      contentThree:
        "The company develops and deploys therapeutic specific AI (Artificial Intelligence) algorithms designed to reduce clinical trial size and costs whilst simultaneously improving insights to increase the likelihood of approval in neurological clinical trials.",
      image: testimonialImg,
      logo: ixicoLogo,
    },
    // You can duplicate this object for more slides.
  ];

  return (
    <section className="testimonial pt-150 pb-40">
      <div className="container">
        {/* <div className="text-center mb-5">
        <span className="sub_title d-block mb-2">
          <img src={flowerIcon} alt="" className="me-2" />
          Case studies
        </span>
        <h2 className="title">Who we've helped</h2>
      </div> */}
        <div className="da-sec-titlte text-center mb-60">
          <span className="sub_title">
            <span>
              <img src={flowerIcon} alt="" />
            </span>
            Case studies
          </span>
          <h2 className="title">Who we've helped</h2>
        </div>

        <div className="position-relative">
          {/* <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
          > */}
          <Swiper
            modules={[Navigation, Autoplay]} // ⬅️ Include Autoplay here
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 15000, // ⬅️ 15 seconds
              disableOnInteraction: false, // optional: continues autoplay after user interaction
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card testimonials_tech shadow border-0">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h4 className="mb-3">{item.title}</h4>
                      <p>{item.contentOne}</p>
                      <div className="d-flex gap-4 mt-3 mb-3">
                        {item.meta.map((meta, idx) => (
                          <div key={idx}>
                            <h5>{meta.number}</h5>
                            <small>{meta.text}</small>
                          </div>
                        ))}
                      </div>
                      <p>{item.contentTwo}</p>
                      <p>{item.contentThree}</p>
                    </div>
                    <div className="col-md-6 text-center">
                      <img
                        src={item.image}
                        alt="Testimonial Visual"
                        className="img-fluid mb-3"
                      />
                      <img
                        src={item.logo}
                        alt="Company Logo"
                        className="img-fluid"
                        style={{ maxHeight: 50 }}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="swiper-button-prev custom-nav-btn">
            {/* <i className="bi bi-arrow-left-circle fs-2"></i> */}
          </div>
          <div className="swiper-button-next custom-nav-btn">
            {/* <i className="bi bi-arrow-right-circle fs-2"></i> */}
          </div>
        </div>

        {/* <div className="text-center mt-4">
          <a
            href="#!"
            className="btn btn-outline-primary d-inline-flex align-items-center gap-2"
          >
            View More Case Studies <i className="bi bi-plus-circle"></i>
          </a>
        </div> */}
        {/* <ButtonViewmore></ButtonViewmore> */}
      </div>
    </section>
  );
};

export default NincheTechnologiesTestimonialSection;
