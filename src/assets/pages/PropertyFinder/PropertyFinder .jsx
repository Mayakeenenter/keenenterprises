import CardFeatures from "../../component/CardFeatures/CardFeatures";
import DropDown from "../../component/DropDown/DropDown";
import "./PropertyFinder.css";
import { dropdown1, dropdown2, dropdown3 } from "../../Data/DataPricing";

function PropertyFinder() {
  return (
    <>
      <title>Property Finder && Dubizzle Integration | Keen Enterprises</title>
      <meta
        name="description"
        content="Sync your property listings effortlessly. Keen specializes in linking Bitrix24 with Property Finder and Dubizzle for real-time lead capture and automated XML feed management"
      />
      <meta
        name="keywords"
        content="Property Finder CRM Integration, Dubizzle XML Feed, Automated Property Listing, Real Estate Lead Management, Bitrix24 Property Finder Sync , Buyte Payment Gateway, Real Estate Payment Solutions, Automated Messaging Bitrix24"
      />

      <section className="propertyFinder">
        <div className="cover"></div>
        <div className="div-finder">
          <h3>
            We built a listing integration application that fixes this problem
            at the source.
          </h3>
          <p>
            Our solution connects Bitrix24 directly with Property Finder and
            Dubizzle, while also syncing with Bayut as an external listing and
            lead source—creating one clean, reliable flow for listings and leads
            in real time.
          </p>
        </div>
      </section>
      <div className="sec2-property">
        <div>
          <p>
            Publish Listings Once Everywhere With our application, your team
            creates and updates property listings only inside
            <span>Bitrix24</span>.
          </p>
        </div>
        <div className="img-property">
          <img src="/property-finder.webp" alt="propert-finder" />
          <img src="/bayut.webp" alt="bayut" />
        </div>
      </div>
      <CardFeatures />
      <DropDown
        title={
          "what happens When a lead comes in from Property Finder, Dubizzle, or Bayut?"
        }
        array={dropdown1}
      />
      <DropDown title={"why We designed this system?"} array={dropdown2} />
      <DropDown title={"Why This Matters?"} array={dropdown3} />
      <div className="finall">
        <p>
          If your agency uses Bitrix24 and markets properties on Property Finder
          and Dubizzle—while advertising on Bayut as an external platform—this
          application brings everything together into one streamlined system.
          One dashboard. One workflow. All listings and leads, perfectly in
          sync.
        </p>
      </div>
    </>
  );
}

export default PropertyFinder;
