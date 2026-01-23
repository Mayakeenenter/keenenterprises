import { faMessage } from "@fortawesome/free-solid-svg-icons/faMessage";
import "./Partner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faDatabase,
  faRobot,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import CardFeatureWhatsApp from "../CardFeatureWhatsApp/CardFeatureWhatsApp";
import Lottie from "lottie-react";
import animationData from "../../Data/Whatsapp icon animation.json";
export default function Partner() {
  return (
    <>
      <div className="partner">
        <div className="parent">
          <div className="card-partner">
            <div className="card-partner-whatsapp">
              <img src="/Gupshup_Logo.webp" alt="gupshup" className="gupshup" />
              <Lottie animationData={animationData} loop={true} />
            </div>
            <h3>Advanced WhatsApp Marketing Solutions</h3>
            <p>
              As an <span>Official Partner of Gupshup</span>, a global leader in
              conversational messaging, we empower your business with the most
              robust WhatsApp communication tools.
            </p>
            <p>
              From full automation and verified business accounts to deep CRM
              integration, we ensure every lead is captured and no opportunity
              is missed.
            </p>
          </div>
          <div className="whatsapp-business">
            <div className="message">
              <FontAwesomeIcon icon={faMessage} />
            </div>
            <h4>WhatsApp Business</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                Official API Access
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheckCircle} />
                Green Tick Verification
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                24/7 Automation
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} />
                CRM Integration
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="featuresWhatsApp">
        <div className="titlefeature">
          <h3>The Core Features</h3>
        </div>
        <div className="allcardFeaturewhats">
          <CardFeatureWhatsApp
            icon={<FontAwesomeIcon icon={faCheckCircle} />}
            title={"Official WhatsApp API"}
            text={
              "Get your Green Tick and build customer trust with verified business accounts."
            }
          />
          <CardFeatureWhatsApp
            icon={<FontAwesomeIcon icon={faRobot} />}
            title={"Automated Chatbots"}
            text={
              "Provide 24/7 instant support to your clients with intelligent AI agents."
            }
          />
          <CardFeatureWhatsApp
            icon={<FontAwesomeIcon icon={faDatabase} />}
            title={"Seamless CRM Sync"}
            text={
              "Every WhatsApp conversation is automatically logged into your KEEN Enterprises CRM."
            }
          />
          <CardFeatureWhatsApp
            icon={<FontAwesomeIcon icon={faWifi} />}
            title={"Broadcasting & Notifications"}
            text={
              "Send official marketing campaigns and alerts with zero risk of being blocked."
            }
          />
        </div>
      </div>
    </>
  );
}
