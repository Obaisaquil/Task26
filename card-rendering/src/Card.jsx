import React from "react";
import "./Card.css";

function Card({ card }) {
  return (
    <div className="card-border">
      <div className="card">

        <img src={card.image} alt={card.title} />

        <h3>{card.title}</h3>

        <p>{card.description}</p>

      </div>
    </div>
  );
}

export default Card;