import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faBriefcase,
  faChartSimple,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useEffect, useState } from "react";
import GoogleSearch from "../GoogleSearch/GoogleSearch";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons/faPhoneVolume";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons/faCommentDots";
import { faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons/faHouseChimneyWindow";
function NavBar() {
  const [darkMood, setdarkMood] = useState(() => {
    return localStorage.getItem("mood") === "dark";
  });
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const isLocation =
    location.pathname === "/bitrix" || location.pathname === "/ziwo";
  const isLocation2 =
    location.pathname === "/service" ||
    location.pathname === "/propertyfinder";
    const islocation3 = location.pathname === "/informationBitrix24"
  const [open, setopn] = useState(false);
  const [mobile, sermobile] = useState(false);
  const [change, setchange] = useState(false);
  const [showmenu, setshowmenu] = useState(false);

  const toggleDarkMood = () => {
    setdarkMood(!darkMood);
  };
  const toggleMenu = () => {
    setopn(!open);
    setshowmenu(!showmenu);
  };

  useEffect(() => {
    if (darkMood) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("mood", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("mood", "light");
    }
  }, [darkMood]);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 840px)");

    const changeColor = () => {
      if (window.scrollY > 50) {
        setchange(true);
      } else {
        setchange(false);
      }
    };
    window.addEventListener("scroll", changeColor);
    const handleMediaQueryChange = (event) => {
      sermobile(event.matches);
      setopn(false);
      if (event.matches) {
        setopn(false);
      } else {
        setopn(true);
      }
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <section className={`Nav ${change ? "change" : ""}`}>
      <div className="title-logo">
        <img
          src="/Keen-Logo2-B.webp"
          alt="Logo"
          className="logo-img"
          fetchpriority="high"
        />
        <NavLink to={"/"} className="title">
          <h1>KEEN ENTERPRISES</h1>
        </NavLink>
      </div>
      <nav>
        <ul className={`list-link ${showmenu ? "open" : ""}`}>
          <li>
            <NavLink to={"/"} onClick={toggleMenu} className={`${islocation3 ? 'color-gold' : ''}`}> 
              home
            </NavLink>
          </li>
          <li className={`li-products ${isLocation ? "prodact-active" : ""}`}>
            products
            <FontAwesomeIcon icon={faAngleDown} />
            <ul className="new-list">
              <li>
                <FontAwesomeIcon icon={faChartSimple} />

                <NavLink to={"/bitrix"} onClick={toggleMenu}>
                  Bitrix24
                </NavLink>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhoneVolume} />
                <NavLink to={"/ziwo"} onClick={toggleMenu}>
                  ziwo
                </NavLink>
              </li>
              <li>
                <FontAwesomeIcon icon={faCommentDots} />
                <NavLink to={"/partner"} onClick={toggleMenu}>
                  Gupshup
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={`li-products ${isLocation2 ? "prodact-active" : ""}`}>
            service
            <FontAwesomeIcon icon={faAngleDown} />
            <ul className="new-list">
              <li>
                <FontAwesomeIcon icon={faBriefcase} />

                <NavLink to={"/service"} onClick={toggleMenu}>
                  Our Service
                </NavLink>
              </li>
              <li>
                <FontAwesomeIcon icon={faHouseChimneyWindow} />

                <NavLink to={"/propertyfinder"}>
                  Property Finder & Bayut
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to={"/about"} onClick={toggleMenu}>
              about us
            </NavLink>
          </li>

          <li className="contact">
            <NavLink to={"/contact"} onClick={toggleMenu}>
              contact us
            </NavLink>
          </li>
          <div
            className="search-icon-wrapper"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </ul>
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMood} checked={darkMood} />
          <span className="slider"></span>
        </label>
      </nav>
      {mobile && (
        <button className="icon-bar" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      {showSearch && (
        <div className="search-overlay">
          <button className="close-btn" onClick={() => setShowSearch(false)}>
            X
          </button>
          <GoogleSearch />
        </div>
      )}
    </section>
  );
}

export default NavBar;
