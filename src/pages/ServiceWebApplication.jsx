import React from 'react';

import NincheTechnologiesTestimonialSection from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";
import Ninachetechnologiestrend from "../components/Ninachetechnologiestrend";
import NinacheOurproducts from "../components/NinacheOurproducts";
const ServiceWebApplication = () => {
  return (
    <main className ="niche-tech">
    <div className="body_wrap">
      <div className="xb-backtotop style-2">
        <a href="#" className="scroll">
          <i className="far fa-arrow-up"></i>
        </a>
      </div>

      <Ninachetechnologiestrend></Ninachetechnologiestrend>
      <NinacheOurproducts></NinacheOurproducts>
      <NincheTechnologiesTestimonialSection></NincheTechnologiesTestimonialSection>
      <Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>

      );
    </div>
  </main>
  );
};

export default ServiceWebApplication;
