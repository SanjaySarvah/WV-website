import React from 'react';

import IndustriesAutomotiveBanner from "../components/IndustriesAutomotiveBanner";
import IndustriesAutomotiveBenifits from "../components/IndustriesAutomotiveBenifits"
import NincheTechnologiesTestimonialSection from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection"
const IndustriesAutomotiveindustry = () => {
  return (
    <main className ="niche-tech">
    <div className="body_wrap">
    <div class="xb-backtotop style-2">
         <a href="#" class="scroll">
         <i class="far fa-arrow-up"></i>
         </a>
      </div>
 <IndustriesAutomotiveBanner></IndustriesAutomotiveBanner>
 <IndustriesAutomotiveBenifits></IndustriesAutomotiveBenifits>
 <NincheTechnologiesTestimonialSection></NincheTechnologiesTestimonialSection>
  <Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>
      );
    </div>
  </main>
  );
};

export default IndustriesAutomotiveindustry;
