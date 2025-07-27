import React from 'react';
import TechnologiesAIBanner from "../components/TechnologiesAIBanner";
import TechnologiesRPACards from "../components/TechnologiesRPACards";
import Ninchetechnologiestestimonials from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";

const TechnologiesAI = () => {
  return (
    <main className ="niche-tech">
    <div className="body_wrap">
    <div class="xb-backtotop style-2">
         <a href="#" class="scroll">
         <i class="far fa-arrow-up"></i>
         </a>
      </div>


<TechnologiesAIBanner></TechnologiesAIBanner>
<TechnologiesRPACards></TechnologiesRPACards>
<Ninchetechnologiestestimonials></Ninchetechnologiestestimonials>
<Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>
      );
    </div>
  </main>
  );
};

export default TechnologiesAI;
