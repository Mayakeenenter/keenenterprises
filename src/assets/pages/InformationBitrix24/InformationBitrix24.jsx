import { NavLink } from "react-router-dom";
import CradInformationBitrix from "../../component/CradInformationBitrix/CradInformationBitrix";
import "./InformationBitrix24.css";


export default function InformationBitrix24() {
  return (
    <>
      <title> bitrix24 | Keen Enterprises</title>

      <div className="infoBitrix">
        <h2> Your ultimate workspace.</h2>
        <p className="p-info">All-in-one solution for smarter business.</p>
        <CradInformationBitrix />
      </div>
    </>
  );
}
