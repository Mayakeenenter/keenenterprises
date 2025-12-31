import { NavLink, Outlet } from "react-router-dom";
import CardLine from "../../component/CardLine/CardLine";
import ExpertSupportSection from "../../component/ExpertSupportSection/ExpertSupportSection";
import Hero from "../../component/Hero/Hero";
import InnovationTools from "../../component/InnovationTools/InnovationTools";
import OurServices from "../../component/OurServices/OurServices";
import Pricing from "../../component/Pricing/Pricing";
import Slider from "../../component/Slider/Slider";
import Values from "../../component/Values/Values";


export default function Home() {
  return (
    <>
      
        
          <title>
            Smart Real Estate & CRM Solutions| home | Keen Enterprises
          </title>
          <meta
            name="description"
            content="Keen Enterprises provides end-to-end digital solutions for real estate. We integrate Bitrix24 CRM with Property Finder, Dubizzle, Ziwo, and Gupshup to automate your sales and lead management"
          />
          <meta
            name="keywords"
            content="Keen Enterprises, Real Estate CRM, Bitrix24 Partner UAE, Business Automation , Real Estate Technology Solutions, Digital Transformation"
          />
  
        <Hero />
        <OurServices />
        <Values />
        <ExpertSupportSection />
         <div className="div-property">
          <h3>One System Every Listing Every Lead In Real Time.</h3>
          <p>
            Managing property listings across multiple platforms can get messy
            fast. Details change. Leads get missed. Teams waste time copying
            data back and forth.
          </p>
          <p>
            We built a listing integration application that fixes this problem
            at the source.
          </p>
          <button className="button">
            <NavLink to={"/propertyfinder"}>Show More</NavLink>
          </button>
        </div>
        <Pricing />
        <CardLine text={"Business Partners"} />
        <InnovationTools />
        <Slider />
        <Outlet />
      </>
    
  );
}
