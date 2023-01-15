import React from "react";
import "../styles/Whyus.css";
import whyus from "../resource/whyus.jpeg";

const Whyus = () => {
  return (
    <div className="whyus">
      <h2 className="whyhead">Why Atlas Law Consultancy ?</h2>
      <div className="ytag">
        <p className="lh-lg parag">
          <span className="span1">Why us?</span> As a reputable law practise, we respond to this
          inquiry. We will do everything in our power to assist you because we
          are aware of the position you are in. We are your dependable partner
          in the defence against the accusations because we stick by our
          convictions. We'll give you the confidence to take on the accusation
          and come out with success.<br/>
          <span className="span2"> "We Raise Our Voice For You."</span>
        </p>
        <img src={whyus} alt="Supporting pic" className="whyusimage"></img>
      </div>
    </div>
  );
};

export default Whyus;
