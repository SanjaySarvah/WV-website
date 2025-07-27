import React from 'react';
import Technologiesweb3Banner from "../components/Technologiesweb3Banner";
import TechnologieswebCards from "../components/TechnologieswebCards";
import Ninchetechnologiestestimonials from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";

const Technologiesweb3 = () => {
  return (
    <main className="niche-tech">
      <div className="body_wrap">
        <div className="xb-backtotop style-2">
          <a href="#" className="scroll">
            <i className="far fa-arrow-up"></i>
          </a>
        </div>

        <Technologiesweb3Banner />
        <TechnologieswebCards />
        <Ninchetechnologiestestimonials />
        <Ninachetechnologiesbottomsection />
      </div>
    </main>
  );
};

export default Technologiesweb3;
