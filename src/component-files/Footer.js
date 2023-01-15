import React from "react";
import "../styles/Footer.css";
import { FiMail, FiInstagram } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";
// import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
   
    <div className="container ">
      <footer className="footers d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {/* <div className="row w-100 content"> */}
        <div className="col-md-4 d-flex align-items-center">
          <p className="palign spanletter">
            © 2023, Techief Technologies. All Rights Reserved.
            {/* <BiCopyright color="white" /> Copyright 2023, Techief Pvt Lt */}
          </p>
        </div>
        <div className="col-md-4 list-unstyled text-end justify-content-center">
          <p className="align row-md-4">Contact Us </p>
          <ul className="nav row-md-4 list-unstyled d-flex justify-content-end">
            <li className="ms-3">
              <a href="mailto: hariharan8957@gmail.com">
                <FiMail color="darkblue" className="icon" />
              </a>
            </li>
            <li className="ms-3">
              <a href="tel:99999999999">
                <BsFillTelephoneFill color="darkblue" className="icon" />
              </a>
            </li>
            <li className="ms-3">
              <SlSocialTwitter color="darkblue" className="icon" />
            </li>
            <li className="ms-3">
              <FiInstagram color="darkblue" className="icon" />
            </li>
          </ul>
        </div>
        {/* </div> */}
      </footer>
    </div>

    
  );
};

export default Footer;




// <div className="container">
    //   <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    //     <div className="col-md-4 d-flex align-items-center">
    //       <span className="text-muted">© 2023, Techief Technologies. All Rights Reserved</span>
    //     </div>
    //   </footer>
    // </div>




 // <footer className="footers">
    //   <div className="footerdiv">
    //     <div className="row w-100 content">
    //       <div className="col-md-4 d-flex align-items-center">
    //         <p className="palign">
    //           © 2023, Techief Technologies. All Rights Reserved.
    //           {/* <BiCopyright color="white" /> Copyright 2023, Techief Pvt Lt */}
    //         </p>
    //       </div>
    //       <ul className="nav col-md-4 list-unstyled d-flex justify-content-center">
    //         <li className="ms-3">
    //           <a href="mailto: hariharan8957@gmail.com">
    //             <FiMail color="white" className="icon" />
    //           </a>
    //         </li>
    //         <li className="ms-3">
    //           <a href="tel:99999999999">
    //             <BsFillTelephoneFill color="white" className="icon" />
    //           </a>
    //         </li>
    //         <li className="ms-3">
    //           <SlSocialTwitter color="white" className="icon" />
    //         </li>
    //         <li className="ms-3">
    //           <FiInstagram color="white" className="icon" />
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="row w-100 content">
    //       <h6 className="align">Contact Us</h6>
    //     </div>
    //     <div className="row w-100 content d-flex justify-content-center">

    //     </div>
    //   </div>
    // </footer>