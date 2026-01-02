import { NavLink } from "react-router-dom";
import CradInformationBitrix from "../../component/CradInformationBitrix/CradInformationBitrix";
import "./InformationBitrix24.css";
import Slider from "../../component/Slider/Slider";
import { imgslider3 } from "../../Data/DataPricing";


export default function InformationBitrix24() {
  return (
    <>
      <title> bitrix24 | Keen Enterprises</title>

      <div className="infoBitrix">
        <h2> Your ultimate workspace.</h2>
        <p className="p-info">All-in-one solution for smarter business.</p>
        <Slider
        slider={imgslider3}/>
        <CradInformationBitrix />
        <img src="/product/صورة4.webp" alt="" />
      </div>
    </>
  );
}
