import React from "react";
import logo from "../resource/samplelogo.jpg";
import "../styles/CustomHeader.css";
import Quotes from "./Quotes";

const CustomHeader = () => {
  return (
    <div className="container-fluid header">
      <div className="coloring">
        <div className="container requiredspace">
          <div className="requiredspace center">
            <img className="image rounded" src={logo} alt="LOGO"></img>
          </div>
          <div className="center">
            <div className="requiredspace rowelement spacing">
              <div className="row">
                <div className="col-auto">
                  <p className="comp-name">Atlas Law Consultancy</p>
                </div>
              </div>
              <div className="row">
                <div className="col-auto">
                  <p className="text">We Raise Our Voice For You</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <Quotes />
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
