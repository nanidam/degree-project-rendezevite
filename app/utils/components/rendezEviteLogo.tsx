"use client";

import { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import "./style/rendezEviteLogo.scss";

const RendezEviteLogo = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <a href="/" className="logo-link">
        {isDesktop ? (
          <ReactSVG src="/svgs/rendezevite-logo-desktop.svg" className="rendezEviteLogo" />
        ) : (
          <ReactSVG src="/svgs/rendezevite-logo-mobile.svg" className="rendezEviteLogo" />
        )}
      </a>
    </>
  );
};

export default RendezEviteLogo;
