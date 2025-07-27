// src/pages/Home.jsx
import AboutSection from '../components/AboutSection';
import FeatureItems from '../components/FeatureItems';
import Hero from '../components/Hero';
import ScrollingIntegrationSection from '../components/ScrollingIntegrationSection';
import Teams from '../components/Teams';
import Teamscontent from '../components/Teamscontent';
import Linkingimages from '../components/Linkingimages';
import ScrollingIntegrationSectionMobile from '../components/ScrollingIntegrationSectionMobile';
import useIsMobile from '../hooks/useIsMobile';

function Home() {
  const isMobile = useIsMobile();

  return (
    <div>
      <Hero />
      <FeatureItems />
      <AboutSection />
      {isMobile ? <ScrollingIntegrationSectionMobile /> : <ScrollingIntegrationSection />}
      <Teams />
      <Teamscontent />
      <Linkingimages />
    </div>
  );
}

export default Home;
