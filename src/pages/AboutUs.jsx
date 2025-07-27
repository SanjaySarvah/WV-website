import PageTitle from "../components/PageTitle";
import Rotating from "../components/Rotating";
import FeatureSection from "../components/FeatureSection";
import FeatureSection2 from "../components/FeatureSection2";
import AwardSection from "../components/AwardSection";
import GallerySection from "../components/GallerySection";
import "../styles/AboutUs.css";
let AboutUs = ()=>{
    return(
      <>
      <PageTitle/>
      <Rotating/>
      <FeatureSection/>
      <FeatureSection2/>
      <AwardSection/>
      <GallerySection/>
      </>
    );
}

export default AboutUs;