import { useState } from 'react';
import * as carts from "../scripts/carts";
// import PlanningCart from "./PlanningCart";
import { Card as CardClass } from "../scripts/Card";

const Card = ({display, pointer}) => {
  const [highlighted, setHighlight] = useState(false);
  const [displayInfo, displayInfoToggle] = useState(false);

  const infoToggle = () => {
    if (displayInfo) {
      return <div className="card-info-wrapper">
        <div className="card-info">
          <div className="top-wrapper">
            <div className="title"> {pointer.name} </div>
            <img className="close-icon" src={require('../assets/icons/close.png')} onClick={ () => {
              displayInfoToggle(false);
            }}/>
          </div>
          <div className="mid-wrapper">
            <div className="left-wrapper">
              <img className="image" src={pointer.image}/>
              <div className="left-bottom-wrapper">
                { pointer.price + " PLN/os."}
                <span> Kontakt: </span>
                { pointer.link }
                { pointer.contact }
                <div className="planel">
                  <span>Zgłoś</span>
                  <span>Like</span>
                  { pointer.rating }
                  <span>Dislike</span>
                </div>
              </div>
            </div>
            <div className="right-wrapper"> {pointer.desc} </div>
          </div>
          <div className="bottom-wrapper">
            <div className="add-button-info" onClick={() => {
              carts.currentPlanningPageCards.push(pointer);
              setHighlight(true);
            }}>+</div>
          </div>
        </div>
      </div>;
    }
  }

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
        {infoToggle()}
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

          <div className="info-button orange" onClick={ () => {
            displayInfoToggle(!displayInfo)
          }}>i</div>

          <div className="add-button orange" onClick={() => {
            carts.currentPlanningPageCards.splice(carts.currentPlanningPageCards.indexOf(pointer), 1);
            setHighlight(false);
          }}>-</div>

          {infoToggle()}
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

          <div className="info-button" onClick={ () => {
            displayInfoToggle(!displayInfo)
          }}>i</div>

          <div className="add-button" onClick={() => {
            carts.currentPlanningPageCards.push(pointer);
            setHighlight(true);
          }}>+</div>

          {infoToggle()}
        </div>
      )
    }
  }
};

Card.defaultProps = {
  pointer: new CardClass()
}

export default Card;