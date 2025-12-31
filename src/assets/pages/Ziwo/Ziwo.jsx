
import CardLine from "../../component/CardLine/CardLine";
import ZiwoCard from "../../component/ZiwoCard/ZiwoCard";
import ZiwoCenter from "../../component/ZiwoCenter/ZiwoCenter";
import ZiwoIntegration from "../../component/ZiwoIntegration/ZiwoIntegration";
import "./Ziwo.css";

function Ziwo() {
  return (
    <>
      <title>Ziwo Cloud Telephony Integration |Keen Enterprises</title>
      <meta
        name="description"
        content="Enhance your customer service with Ziwo and Bitrix24 integration. Enable click-to-call, call recording, and automated lead tracking with Keen's advanced telephony solutions"
      />
      <meta
        name="keywords"
        content="Ziwo Bitrix24 Integration, Cloud Telephony UAE, Click to Call CRM, Call Recording Solutions, Virtual Phone System Dubai, IP Telephony for Real Estate"
      />

      <div>
        <div className="mt-product">
          <CardLine text={"Calls Center Partners"} />
        </div>
        <ZiwoCenter />
        <ZiwoCard />
        <ZiwoIntegration />
      </div>
    </>
  );
}

export default Ziwo;
