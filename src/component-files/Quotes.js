import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Quotes.css";

const Quotes = () => {
  return (
    <div className="title">
      <Carousel className=".carousel-indicators .carousel-control-next-icon .carousel-control-prev-icon">
        <Carousel.Item>
          <div className="d-block w-100 bimage"></div>
          <Carousel.Caption>
            <p className="para lh-lg fst-italic">
            "No man is good enough to govern another man without the other's consent."
            </p>
            <h3 className="font-monospace headfont text-end">-Abraham Lincoln</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 bimage"></div>
          <Carousel.Caption>
            <p className="para lh-lg fst-italic">
            "A lawyer with his briefcase can steal more than a hundred men with guns."
            </p>
            <h3 className="font-monospace headfont text-end">-Mario Puzo</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 bimage"></div>
          <Carousel.Caption>
            <p className="para lh-lg fst-italic">
            "As a lawyer who has dealt in defamation, I know that someone's reputation has to be lowered in the eyes of right-thinking people to sue."
            </p>
            <h3 className="font-monospace headfont text-end">-David Hunt</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 bimage"></div>
          <Carousel.Caption>
            <p className="para lh-lg fst-italic">
            “Lawyers are operators of toll bridges which anyone in search of justice must pass.”
            </p>
            <h3 className="font-monospace headfont text-end">-Jane Bryant Quinn</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Quotes;
