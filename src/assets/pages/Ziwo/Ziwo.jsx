
import CardLine from "../../component/CardLine/CardLine";
import ZiwoCard from "../../component/ZiwoCard/ZiwoCard";
import ZiwoCenter from "../../component/ZiwoCenter/ZiwoCenter";
import ZiwoIntegration from "../../component/ZiwoIntegration/ZiwoIntegration";
import "./Ziwo.css";
import { motion } from "framer-motion";

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
        <motion.div 
          className="mt-product"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CardLine text={"Calls Center Partners"} />
        </motion.div>
        <ZiwoCenter />
        <ZiwoCard />
        <ZiwoIntegration />
      </div>
    </>
  );
}

export default Ziwo;
