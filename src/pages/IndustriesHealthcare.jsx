import React from 'react';
import IndustriesHealthcareBanner from "../components/IndustriesHealthcareBanner";
import IndistriesHealthcareCards from "../components/IndistriesHealthcareCards";
import NincheTechnologiesTestimonialSection from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";

const IndustriesHealthcare = () => {
  return (
    <main className ="niche-tech">
    <div className="body_wrap">
    <div class="xb-backtotop style-2">
         <a href="#" class="scroll">
         <i class="far fa-arrow-up"></i>
         </a>
      </div>
<IndustriesHealthcareBanner></IndustriesHealthcareBanner>
<IndistriesHealthcareCards></IndistriesHealthcareCards>

<NincheTechnologiesTestimonialSection></NincheTechnologiesTestimonialSection>
  <Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>
      );
    </div>
  </main>
  );
};

export default IndustriesHealthcare;
