import React, { useState } from 'react';
import * as carts from "../scripts/carts";
import PlanningCart from "./PlanningCart";

const Card = ({display, pointer}) => {
  const [highlighted, setHighlight] = useState(false);

  if (display === "vanilla") {
    return (
      <div className="card">
        <div className="image-wrapper">
          <img src={pointer.image} style={{width: 360, height: 260}} />
        </div>
        <div className="info-wrapper">
          <div className="title-wrapper"> {pointer.name} </div>
          <div className="subtitle-wrapper">
            <div className="price-wrapper"> {pointer.price + ' PLN/os.'} </div>
            <div className="rating-wrapper"> {pointer.rating + '/5'}</div>
          </div>
        </div>
      </div>
    )
  }
  else if (display === "planning") {
    if (highlighted) {
      return (
        <div className="card highlighted">
          <div className="image-wrapper">
            <img src={pointer.image} style={{width: 360, height: 260}} />
          </div>
          <div className="info-wrapper">
            <div className="title-wrapper"> {pointer.name} </div>
            <div className="subtitle-wrapper">
              <div className="price-wrapper"> {pointer.price + ' PLN/os.'} </div>
              <div className="rating-wrapper"> {pointer.rating + '/5'}</div>
            </div>
          </div>
          <div className="info-button orange">i</div>
          <div className="add-button orange" onClick={() => {
            carts.currentPlanningPageCards.splice(carts.currentPlanningPageCards.indexOf(pointer), 1);
            setHighlight(false);
          }}>-</div>
        </div>
      )
    }
    else if (!highlighted) {
      return (
        <div className="card">
          <div className="image-wrapper">
            <img src={pointer.image} style={{width: 360, height: 260}} />
          </div>
          <div className="info-wrapper">
            <div className="title-wrapper"> {pointer.name} </div>
            <div className="subtitle-wrapper">
              <div className="price-wrapper"> {pointer.price + ' PLN/os.'} </div>
              <div className="rating-wrapper"> {pointer.rating + '/5'}</div>
            </div>
          </div>
          <div className="info-button">i</div>
          <div className="add-button" onClick={() => {
            carts.currentPlanningPageCards.push(pointer);
            setHighlight(true);
          }}>+</div>
        </div>
      )
    }
  }
};

export default Card;