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
    <div className="logo-wrapper">
      <a href="/" className="logo-link" aria-label="Go to RendezEvite Home">
        <ReactSVG
          src={
            isDesktop
              ? "/svgs/rendezevite-logo-desktop.svg"
              : "/svgs/rendezevite-logo-mobile.svg"
          }
          className="rendezEviteLogo"
          aria-hidden="true"
        />
      </a>
    </div>
  );
};

export default RendezEviteLogo;
