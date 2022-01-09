import * as carts from "../scripts/carts";
import PlanningCart from "./PlanningCart";

const Card = ({display, pointer}) => {
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
          carts.currentCart.addAtrakcja(pointer);
          PlanningCart.forceUpdate();
        }}>+</div>
      </div>
    )
  }
};

export default Card;