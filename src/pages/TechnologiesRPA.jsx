import React from 'react';
import TechnologiesRPABanner from "../components/TechnologiesRPABanner";
import TechnologiesRPACards from "../components/TechnologiesRPACards";
import Ninchetechnologiestestimonials from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";

const TechnologiesRPA = () => {
  return (
    <main className ="niche-tech">
    <div className="body_wrap">
    <div class="xb-backtotop style-2">
         <a href="#" class="scroll">
         <i class="far fa-arrow-up"></i>
         </a>
      </div>

<TechnologiesRPABanner></TechnologiesRPABanner>
<TechnologiesRPACards></TechnologiesRPACards>
<Ninchetechnologiestestimonials></Ninchetechnologiestestimonials>
<Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>

      );
    </div>
  </main>
  );
};

export default TechnologiesRPA;
