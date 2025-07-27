import React from 'react';
import IndustriesManufacturingBanner from "../components/IndustriesManufacturingBanner";
import IndustriesManufacturingCards from "../components/IndustriesManufacturingCards"
import NincheTechnologiesTestimonialSection from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";
import "../assets/css/main.css"
const IndustriesManufacturing = () => {
  return (
    <main className ="niche-tech">
    <div className="body_wrap">
    <div class="xb-backtotop style-2">
         <a href="#" class="scroll">
         <i class="far fa-arrow-up"></i>
         </a>
      </div>
<IndustriesManufacturingBanner></IndustriesManufacturingBanner>
<IndustriesManufacturingCards></IndustriesManufacturingCards>

<NincheTechnologiesTestimonialSection></NincheTechnologiesTestimonialSection>
<Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>


      );
    </div>
  </main>
  );
};

export default IndustriesManufacturing;
