import React from "react";
import "../styles/Practices.css";
import Card from "./Card";

const Practices = () => {
  let our_practices = [
    {
      index: 1,
      heading: "Criminal Defense",
      content:
        "Criminal defense law consists of the legal protections afforded to people who have been accused of committing a crime.",
    },
    {
      index: 2,
      heading: "Constitutional Law",
      content:
        "It is a body of law which defines the role, powers, and structure of different entities within a state, namely, the executive, the parliament or legislature, as well as the basic rights of citizens.",
    },
    {
      index: 3,
      heading: "Business Law",
      content:
        "Business law includes contract laws, manufacturing and sales laws, and also hiring practices and ethics. It is the legal laws of business and commerce in the public as well as the private sector.",
    },
    {
      index: 4,
      heading: "Family Law",
      content:
        "Family law, body of law regulating family relationships, including marriage and divorce, the treatment of children, and related economic matters.",
    },
  ];

  return (
    <div className="title">
      <h2 className="practicehead">
        Our Practices
      </h2>
      <div className="card_content">
        {
          our_practices.map((Prac)=>(
            <Card key={Prac.index} heading={Prac.heading} content={Prac.content}></Card>
          ))
        }
      </div>
    </div>
  );
};

export default Practices;
