import { NavLink } from "react-router-dom";
import "./CardBitrix.css";
import { motion } from "framer-motion";

export default function CardBitrix({ one, img, partOne, partTwo, partThree }) {
  return (
    <div className={`card-bitrix ${one ? "card-one" : "card-two"} `}>
      <motion.div 
       initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
         >
        <h2>
          {partOne} <span>{partTwo}</span> {partThree}
        </h2>
        {one && (
          <ul>
            <li>Replaces all your current SaaS solutions </li>
            <li>Free forever for unlimited users</li>
            <li>Easy to migrate your data from other systems or CRMs</li>
            <li>Integrated with all your favorite services and apps</li>
            <li>Used, loved, and trusted by 15,000,000 + users worldwide</li>
            <li>100% flat fee: predictable costs, no per-user pricing</li>
          </ul>
        )}
        {!one && (
          <div>
            <p>
              Replace a multitude of services and apps with a single online
              workspace that features everything you need to manage your sales,
              clients, projects, and team.
            </p>
            <button className='button'>
                <NavLink to={"/contact"} >contact Us</NavLink>
            </button>
          </div>
        )}
      </motion.div>
      <motion.img src={img} alt=""  initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }} />
    </div>
  );
}
