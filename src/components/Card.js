import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="header">
        <div className="brand">
          {props.car.brand} {props.car.model}
        </div>{" "}
        <div className="close">X</div>
      </div>
      <div className="year">{props.car.year}</div>
      <div className="color" style={{ color: props.car.color }}>
        {props.car.color}
      </div>
      <div className="image">{props.car.brand} image</div>
      <div className="owner">Owner: {props.car.owner} </div>{" "}
    </div>
  );
}

export default Card;
