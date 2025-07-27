import React from 'react';
import SalesForceBanner from '../components/SalesForceBanner';
import SalesForceWorkflow from "../components/SalesForceWorkflow";
import NincheTechnologiesTestimonialSection from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";
const ServiceSalesForceDevelopment = () => {
    return (
      <main className ="niche-tech">
      <div className="body_wrap">
        <div className="xb-backtotop style-2">
          <a href="#" className="scroll">
            <i className="far fa-arrow-up"></i>
          </a>
        </div>

        <SalesForceBanner></SalesForceBanner>
        <SalesForceWorkflow></SalesForceWorkflow>
        <NincheTechnologiesTestimonialSection></NincheTechnologiesTestimonialSection>
      <Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>
      </div>
    </main>
    );
  };
  
  export default ServiceSalesForceDevelopment;