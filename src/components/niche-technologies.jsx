import React, { useEffect } from "react";

import NincheTechnologiesTestimonialSection from "./Ninchetechnologiestestimonials";
import Ninachetechnologiesbottomsection from "./Ninachetechnologiesbottomsection";
import Ninachetechnologiestrend from "./Ninachetechnologiestrend";
import NinacheOurproducts from "./NinacheOurproducts";
import ButtonViewmore from "./ButtonViewmore"

const AboutUsnincherechnologies = () => {
  useEffect(() => {
    const cssFiles = [
      {
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css",
        integrity:
          "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
        crossOrigin: "anonymous",
      },
    


    ];

    const links = [];

    cssFiles.forEach(({ href, integrity, crossOrigin }) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      if (integrity) link.integrity = integrity;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
      links.push(link);
    });



    return () => {
      // Cleanup: remove all dynamically added link elements on unmount
      links.forEach((link) => document.head.removeChild(link));
    };
  }, []);

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
        <ButtonViewmore></ButtonViewmore>
        <Ninachetechnologiesbottomsection></Ninachetechnologiesbottomsection>

        );
      </div>
    </main>
  );
};

export default AboutUsnincherechnologies;
