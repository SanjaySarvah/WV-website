import React from 'react';
import TechnologiesMachineLearningBanner from "../components/TechnologiesMachineLearningBanner";
 import TechnologiesMachineLearningCards from "../components/TechnologiesMachineLearningCards";
import Ninchetechnologiestestimonials from "../components/Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "../components/Ninachetechnologiesbottomsection";

const TechnologiesMachineLearning = () => {
  return (
    <main className ="niche-tech">
    <div className="body_wrap">
    <div class="xb-backtotop style-2">
         <a href="#" class="scroll">
         <i class="far fa-arrow-up"></i>
         </a>
      </div>

 <TechnologiesMachineLearningBanner></TechnologiesMachineLearningBanner>
 <TechnologiesMachineLearningCards></TechnologiesMachineLearningCards>
<Ninchetechnologiestestimonials></Ninchetechnologiestestimonials>
<Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>

      );
    </div>
  </main>
  );
};

export default TechnologiesMachineLearning;
