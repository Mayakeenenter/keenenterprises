import CardAbout from "../../component/CardAbout/CardAbout";
import CardLine from "../../component/CardLine/CardLine";

export default function AboutUs() {
  return (
    <>
      <title>Our Story & Vision | About us | Keen Enterprises</title>
      <meta
        name="description"
        content="Keen Enterprises is a leading technology provider in the UAE, dedicated to transforming the real estate industry through smart CRM implementations and business automation"
      />
      <meta
        name="keywords"
        content="About Keen Enterprises, Tech Solutions Provider Dubai, CRM Implementation Experts, Real Estate Software Company, Keen Team"
      />

      <div className="mt-product">
        <CardLine text={"About Us"} />
      </div>
      <CardAbout />
    </>
  );
}
