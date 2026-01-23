import { useState } from "react"; // تأكد من استيراد useState
import "./Ai.css";
import NavBar from "../../component/NavBar/NavBar";
import CardLine from "../../component/CardLine/CardLine";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../Data/Guy talking to Robot _ AI Help.json";
function Ai() {
  // البيانات الخاصة بالمميزات
  const features = [
    {
      id: 1,
      title: "Intelligent Support",
      desc: "Instant responses across chat & email.",
      icon: "🤖",
    },
    {
      id: 2,
      title: "Sales Automation",
      desc: "Qualify leads and follow up automatically.",
      icon: "📈",
    },
    {
      id: 3,
      title: "Business Automation",
      desc: "Automate scheduling and data entry.",
      icon: "⚙️",
    },
    {
      id: 4,
      title: "Data Analysis",
      desc: "Real-time actionable insights.",
      icon: "📊",
    },
    {
      id: 5,
      title: "24/7 Availability",
      desc: "Works nonstop — no downtime.",
      icon: "⏰",
    },
  ];

  const [activeFeature, setActiveFeature] = useState({
    title: "Powerful Capabilities",
    desc: "Hover over the icons to explore results",
  });

  return (
    <>
      <NavBar />
      <main>
        <div className="mt-product">
          {/* <CardLine text={"AI agent"} /> */}
        </div>
        <div className="ai">
          <h1>AI Agents That Work for You — Smarter, Faster, Always On</h1>
           <Lottie animationData={animationData} loop={true} />
        </div>
        <div className="ai-sec1">
          <div>
            <h2>What is an AI Agent?</h2>
            <p>
              An AI Agent is an intelligent digital assistant designed to
              perform tasks autonomously...
            </p>
          </div>
          <img
            src="/3846150-0-19220000-1762336686-shutterstock_2577839733.webp"
            alt=""
          />
        </div>

        {/* القسم الجديد: Interactive Hub */}
        <div className="ai-sec2">
          <h2 className="sec2-title">What Our AI Agents Can Do</h2>

          <div className="hub-container">
            {/* الدوائر المحيطة (الميزات) */}
            <div className="features-circle-wrap">
              {features.map((f, index) => (
                <div
                  key={f.id}
                  className={`feature-item item-${index + 1}`}
                  onMouseEnter={() =>
                    setActiveFeature({ title: f.title, desc: f.desc })
                  }
                >
                  <div className="icon-box">{f.icon}</div>
                  <span className="feature-label">{f.title}</span>
                </div>
              ))}
            </div>

            {/* العقل المركزي (Central Hub) */}
            <div className="central-hub">
              <div className="pulse-ring"></div>
              <div className="hub-content">
                <h3>{activeFeature.title}</h3>
                <p>{activeFeature.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ai-cta-section">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="cta-text">
              Let <span>Keen Enter</span> create an AI Agent that saves time,
              reduces costs, and unlocks new growth opportunities.
            </p>

            <div className="cta-buttons">
              <Link to={"/contact"}>
                <button className="btn-primary">Get Started Now</button>
              </Link>
            </div>
          </div>

          {/* شكل جمالي في الخلفية */}
          <div className="cta-glow-bg"></div>
        </div>
      </main>
    </>
  );
}

export default Ai;
