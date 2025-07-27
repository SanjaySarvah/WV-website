import React from 'react';
import IndustriesEducationBanner from "../components/IndustriesEducationBanner"
import NincheTechnologiesTestimonialSection from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";
import IndistriesEducationCards from "../components/IndistriesEducationCards"
const IndustriesEducation = () => {
  return (
    <main className ="niche-tech">
    <div className="body_wrap">
    <div class="xb-backtotop style-2">
         <a href="#" class="scroll">
         <i class="far fa-arrow-up"></i>
         </a>
      </div>
<IndustriesEducationBanner></IndustriesEducationBanner>
<IndistriesEducationCards></IndistriesEducationCards>
<NincheTechnologiesTestimonialSection></NincheTechnologiesTestimonialSection>
  <Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>
      );
    </div>
  </main>
  );
};

export default IndustriesEducation;
