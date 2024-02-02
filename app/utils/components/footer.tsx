"use client";

import { ReactSVG } from "react-svg";
import "./style/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-contact">
        <ReactSVG src="/svgs/logo-footer.svg" />
        <div className="footer-info-container">
          <p className="footer-info">
            Please note that RendezEvite is currently only available in English. It is our
            future goal to expand RendezEvite to include support for various languages.
          </p>
          <div className="footer-mail-container">
            <ReactSVG className="footer-mail-svg" src="/svgs/mail.svg" />
            <a className="footer-email" href="mailto:rendezevite@gmail.com">
              rendezevite@gmail.com
            </a>
          </div>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="footer-links">
        <a className="footer-github" href="/">
          <ReactSVG src="/svgs/github.svg" />
          GitHub
        </a>
        <a className="footer-terms" href="/terms-and-conditions">
          Terms and Conditions
        </a>
        <p className="footer-year">2024</p>
      </div>
    </footer>
  );
};

export default Footer;
