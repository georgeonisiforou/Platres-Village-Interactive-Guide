import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContainerMain">
        <div className="socialMedia">
          Follow us
          <i className="fab fa-twitter twitter"></i>
          <i className="fab fa-instagram instagram"></i>
        </div>
        <p>Copyright © George Onisiforou</p>

        <div>Contact us: platresguide@gmail.com</div>
      </div>

      <p>Designed, Developed and Curated by George Onisiforou</p>
    </div>
  );
}
