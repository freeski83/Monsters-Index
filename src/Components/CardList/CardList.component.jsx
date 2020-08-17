import React from "react";
import "./CardList.styles.css";
import Card from "../Card/Card.component";

const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
