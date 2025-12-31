import "./Service.css";
import CardLine from "../../component/CardLine/CardLine";
import CardStep from "../../component/CardStep/CardStep";
import { step } from "../../Data/DataPricing";

function Service() {
  return (
    <>
      <title>Keen Enterprises | our services </title>

      <div className="mt-product">
        <CardLine text={"Our Services Bitrix24"} />
      </div>
      <div className="all-step">
        {Array &&
          step.map((item, index) => (
            <CardStep
              key={index}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>
    </>
  );
}

export default Service;
