import CardLine from "../../component/CardLine/CardLine";
import Partner from "../../component/Partner/Partner";

function PartnerPage() {
  return (
    <>
      <title>Keen Enterprises | Gupshup</title>
      <meta name="description" content="Gupshup for WhatsApp automation" />
      <meta
        name="keywords"
        content="Gupshup WhatsApp Business API, WhatsApp CRM Integration,"
      />

      <div className="mt-product">
        <CardLine text={"Our Partner"} />
      </div>
      <Partner />
      <div className="App">
        <div className="whatsAppSolution">
          <h3>What are the key features of Gupshup’s WhatsApp solution?</h3>
          <p>
            Gupshup Conversation Cloud enhances WhatsApp conversations by
            leveraging AI Agents for intelligent, 2-way interactions. It also
            offers pre-approved templates for faster time to market, real-time
            customer segmentation, and personalized campaigns at scale.
            Businesses can automate campaigns and customer support, design
            journeys with a no-code visual builder, and seamlessly integrate
            live human agent assistance for enhanced customer service.
            Additionally, Gupshup provides consulting services, industry best
            practices, ROI analysis, and implementation support to help optimize
            your channel strategy.
          </p>
        </div>
      </div>
      
    </>
  );
}

export default PartnerPage;
