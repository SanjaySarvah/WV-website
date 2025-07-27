import React from 'react';
 import TechnologiesDataserviceBanner from "../components/TechnologiesDataserviceBanner";
import TechnologiesDataServiceCards from "../components/TechnologiesDataServiceCards";
import Ninchetechnologiestestimonials from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";

const TechnologiesDataservice = () => {
  return (
    <main className ="niche-tech">
    <div className="body_wrap">
    <div class="xb-backtotop style-2">
         <a href="#" class="scroll">
         <i class="far fa-arrow-up"></i>
         </a>
      </div>

  <TechnologiesDataserviceBanner></TechnologiesDataserviceBanner>
 <TechnologiesDataServiceCards></TechnologiesDataServiceCards>
<Ninchetechnologiestestimonials></Ninchetechnologiestestimonials>
<Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>

      );
    </div>
  </main>
  );
};

export default TechnologiesDataservice;
