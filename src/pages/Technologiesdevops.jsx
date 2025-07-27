import React from 'react';
import TechnologiesdevopsBanner from "../components/TechnologiesdevopsBanner";
import TechnologiesdevopsCards from "../components/TechnologiesdevopsCards";
import Ninchetechnologiestestimonials from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";

const Technologiesdevops = () => {
  return (
    <main className="niche-tech">
      <div className="body_wrap">
        <div className="xb-backtotop style-2">
          <a href="#" className="scroll">
            <i className="far fa-arrow-up"></i>
          </a>
        </div>

        <TechnologiesdevopsBanner />
        <TechnologiesdevopsCards />
        <Ninchetechnologiestestimonials />
        <Ninachetechnologiesbottomsection />
      </div>
    </main>
  );
};

export default Technologiesdevops;
