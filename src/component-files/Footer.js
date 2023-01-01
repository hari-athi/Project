import React from "react";
import "../styles/Footer.css";
import { FiMail,FiInstagram } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footers">
      <div className="footerdiv">

      <div className="row w-100 content">
        <p className="palign"><BiCopyright color="white"/> Copyright 2023, Techief Pvt Lt</p>
      </div>
      <div className="row w-100 content">
        <h6 className="align">Contact Us</h6>
      </div>
      <div className="row w-100 content d-flex justify-content-center">
        <ul className="nav col-4 list-unstyled justify-content-center">
          <li className="ms-3">
            <a href="mailto: hariharan8957@gmail.com">
              <FiMail color="white" className="icon" />
            </a>
          </li>
          <li className="ms-3">
            <a href="tel:99999999999">
              <BsFillTelephoneFill color="white" className="icon" />
            </a>
          </li>
          <li className="ms-3">
            <SlSocialTwitter color="white" className="icon"/>
          </li>
          <li className="ms-3">
            <FiInstagram color="white" className="icon"/>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
