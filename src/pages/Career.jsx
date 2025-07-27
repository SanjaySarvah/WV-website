import CareerPageTitle from "../components/CareerPageTitle";
import CareerProcessTitle from "../components/CareerProcessTitle";
import CareerTeamSection from "../components/CareerTeamSection";
import CareerWorkSection from "../components/CareerWorkSection";
import CareerCtaSection from "../components/CareerCtaSection";
import "../styles/Career.css";


const Career = () =>{
    return(
        <>
            <CareerPageTitle/>
            <CareerProcessTitle/>
            <CareerTeamSection/>
            <CareerWorkSection/>
            <CareerCtaSection/>
        </>
    );

}

export default Career;

