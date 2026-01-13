import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./assets/pages/Home/Home.jsx";
import Products from "./assets/pages/Products/Products.jsx";
import Service from "./assets/pages/Service/Service.jsx";
import AboutUs from "./assets/pages/AboutUs/AboutUs.jsx";
import ContactUs from "./assets/pages/ContactUs/ContactUs.jsx";
import Ziwo from "./assets/pages/Ziwo/Ziwo.jsx";
import AppWrapper from "./assets/component/AppWrapper/AppWrapper.jsx";
import NavBar from "./assets/component/NavBar/NavBar.jsx";
import Footer from "./assets/component/Footer/Footer.jsx";
import InformationBitrix24 from "./assets/pages/InformationBitrix24/InformationBitrix24.jsx";
import PropertyFinder from "./assets/pages/PropertyFinder/PropertyFinder .jsx";
import PartnerPage from "./assets/pages/Partner/Partner.jsx";
import Ai from "./assets/pages/Ai/Ai.jsx";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/informationBitrix24", element: <InformationBitrix24 /> },
      {
        path: "/bitrix",
        element: <Products />,
      },
      {
        path: "/ziwo",
        element: <Ziwo />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/propertyfinder",
        element: <PropertyFinder />,
      },
      {
        path: "/partner",
        element: <PartnerPage />,
      },
      {
        path: "/ai",
        element: <Ai />,
      },
    ],
  },
]);

/* =======================
   Render App
======================= */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper router={router} />
  </StrictMode>
);
