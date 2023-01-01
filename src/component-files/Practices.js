import React from "react";
import criminal from "../resource/criminal.jpeg";
import family from "../resource/family.jpeg";
import business from "../resource/business.jpeg";
import constitutional from "../resource/constitutional.jpeg";
import "../styles/Practices.css";
import { Carousel } from "react-bootstrap";

const Practices = () => {
  return (
    <div className="title">
      <h3 className="font-monospace text-warning practicehead">Our Practices</h3>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 bimage"
            src={criminal}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="font-monospace headfont">Criminal Defense</h4>
            <p className="para">
              Criminal defense law consists of the legal protections afforded to
              people who have been accused of committing a crime.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bimage"
            src={constitutional}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4 className="font-monospace headfont">Constitutional Law</h4>
            <p className="para">
              It is a body of law which defines the role, powers, and structure
              of different entities within a state, namely, the executive, the
              parliament or legislature, as well as the basic rights of
              citizens.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bimage"
            src={business}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4 className="font-monospace headfont">Business Law</h4>
            <p className="para">
              Business law includes contract laws, manufacturing and sales laws,
              and also hiring practices and ethics. It is the legal laws of
              business and commerce in the public as well as the private sector.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 bimage"
            src={family}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h4 className="font-monospace headfont">Family Law</h4>
            <p className="para">
              Family law, body of law regulating family relationships, including
              marriage and divorce, the treatment of children, and related
              economic matters.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Practices;
