import React from 'react';
import MobileApplicationBanner from "../components/MobileApplicationBanner"
import SalesForceWorkflow from "../components/SalesForceWorkflow";
import NincheTechnologiesTestimonialSection from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";
const ServiceMobileApplication = () => {
    return (
      <main className ="niche-tech">
      <div className="body_wrap">
        <div className="xb-backtotop style-2">
          <a href="#" className="scroll">
            <i className="far fa-arrow-up"></i>
          </a>
        </div>
<MobileApplicationBanner></MobileApplicationBanner>
<SalesForceWorkflow></SalesForceWorkflow>
<NincheTechnologiesTestimonialSection></NincheTechnologiesTestimonialSection>
<Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>

      </div>
    </main>
    );
  };
  
  export default ServiceMobileApplication;