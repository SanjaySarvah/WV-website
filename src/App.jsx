import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/main.css";

import Header from "./components/Header";          // Desktop
import MobileHeader from "./components/MobileHeader"; // Mobile
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/Career";
import AboutUsnincherechnologies from "./components/niche-technologies";

import ServiceWebApplication from "./pages/ServiceWebApplication";
import ServiceSalesForceDevelopment from "./pages/ServiceSalesForceDevelopment";
import ServiceMobileApplication from "./pages/ServiceMobileApplication";
import ServiceBlockChainDevelopment from "./pages/ServiceBlockChainDevelopment";
import ServiceDigitalMarketing from "./pages/ServiceDigitalMarketing";
import ServiceCloudComputing from "./pages/ServiceCloudComputing";
import ServiceCustomPortal from "./pages/ServiceCustomPortal";
import ServiceEcommerceDevelopment from "./pages/ServiceEcommerceDevelopment";

import IndustriesHealthcare from "./pages/IndustriesHealthcare";
import IndustriesEcommerce from "./pages/IndustriesEcommerce";
import IndustriesAutomotiveindustry from "./pages/IndustriesAutomotiveindustry";
import IndustriesManufacturing from "./pages/IndustriesManufacturing";
import IndustriesSupplyChainManagement from "./pages/IndustriesSupplyChainManagement";
import IndustriesEducation from "./pages/IndustriesEducation";

import TechnologiesRPA from "./pages/TechnologiesRPA";
import TechnologiesAI from "./pages/TechnologiesAI";
import Technologiesdevops from "./pages/Technologiesdevops";
import TechnologiesDataservice from "./pages/TechnologiesDataservice";
import TechnologiesMachineLearning from "./pages/TechnologiesMachineLearning";
import Technologiesweb3 from "./pages/Technologiesweb3";

const BREAKPOINT = 992; // match Bootstrap lg

function App() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= BREAKPOINT : true
  );

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      {isDesktop ? <Header /> : <MobileHeader />}

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About & Career */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />

        {/* About niche tech */}
        <Route path="/aboutusnichetechnologies" element={<AboutUsnincherechnologies />} />

        {/* Services */}
        <Route path="/servicewebapplication" element={<ServiceWebApplication />} />
        <Route path="/servicesalesforcedevelopment" element={<ServiceSalesForceDevelopment />} />
        <Route path="/mobile-application" element={<ServiceMobileApplication />} />
        <Route path="/blockchain-developmentcompany" element={<ServiceBlockChainDevelopment />} />
        <Route path="/digital-marketing-company" element={<ServiceDigitalMarketing />} />
        <Route path="/cloud-computing" element={<ServiceCloudComputing />} />
        <Route path="/custom-portal" element={<ServiceCustomPortal />} />
        <Route path="/ecommerce-application-development" element={<ServiceEcommerceDevelopment />} />

        {/* Industries */}
        <Route path="/healthcare-software-development" element={<IndustriesHealthcare />} />
        <Route path="/ecommerce-industry" element={<IndustriesEcommerce />} />
        <Route path="/automotive-industry" element={<IndustriesAutomotiveindustry />} />
        <Route path="/manufacturing-solutions" element={<IndustriesManufacturing />} />
        <Route path="/supply-chain-management" element={<IndustriesSupplyChainManagement />} />
        <Route path="/education" element={<IndustriesEducation />} />

        {/* Technologies */}
        <Route path="/rpa-development-services" element={<TechnologiesRPA />} />
        <Route path="/artificial-intelligence-services" element={<TechnologiesAI />} />
        <Route path="/devops" element={<Technologiesdevops />} />
        <Route path="/data-engineering-services" element={<TechnologiesDataservice />} />
        <Route path="/machine-learning-development-company" element={<TechnologiesMachineLearning />} />
        <Route path="/web3" element={<Technologiesweb3 />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
