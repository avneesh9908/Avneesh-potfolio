import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#f6c400" height={4} />
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <p className="portfolio">Avneesh's Portfolio</p>
          <div><p className="checkloading">Loading</p>
          <BarLoader color="#f6c400" height={4} />
          </div>
          <div className="sm:text-[12px] copyrightnew">
          | Copyright &copy; <span>2024 DevAvneesh </span> All rights reserved
          <a href="#"></a> |
        </div>
          
        </div>
        
      ) : (
        <Home />
      )}
    </Suspense>
  );
};

export default App;