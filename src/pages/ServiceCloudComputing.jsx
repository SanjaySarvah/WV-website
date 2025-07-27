import React from 'react';

import ServiceCloudComputingBanner from "../components/ServiceCloudComputingBanner";
import ServiceCloudComputingBenifits from "../components/ServiceCloudComputingBenifits";
import NincheTechnologiesTestimonialSection from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";

const ServiceCloudComputing = () => {
    return (
        <div>
<ServiceCloudComputingBanner></ServiceCloudComputingBanner>
<ServiceCloudComputingBenifits></ServiceCloudComputingBenifits>
<NincheTechnologiesTestimonialSection></NincheTechnologiesTestimonialSection>
  <Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>
        </div>
    );
  };

  export default ServiceCloudComputing;