// AppWrapper.jsx
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";

export default function AppWrapper({ router }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="app-main-container">
       <RouterProvider router={router} />
       <SpinnerLoading loading={loading} />
    </div>
  );
}
