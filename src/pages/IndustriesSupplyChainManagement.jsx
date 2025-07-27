import React from 'react';
import IndustriesSupplychainBanner from "../components/IndustriesSupplychainBanner";
import IndustriesSupplychainCards from "../components/IndustriesSupplychainCards";
import NincheTechnologiesTestimonialSection from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";
import "../assets/css/main.css"
const IndustriesSupplyChainManagement = () => {
  return (
    <main className ="niche-tech">
    <div className="body_wrap">
    <div class="xb-backtotop style-2">
         <a href="#" class="scroll">
         <i class="far fa-arrow-up"></i>
         </a>
      </div>

    <IndustriesSupplychainBanner></IndustriesSupplychainBanner>
    <IndustriesSupplychainCards></IndustriesSupplychainCards>

    <NincheTechnologiesTestimonialSection></NincheTechnologiesTestimonialSection>
  <Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>

      );
    </div>
  </main>
  );
};

export default IndustriesSupplyChainManagement;
