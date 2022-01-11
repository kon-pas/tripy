import { useState } from 'react';
import { Cart as CartClass} from "../scripts/Cart";
import { Card as CardClass} from "../scripts/Card";

const Cart = ({pointer, name}) => {
  const [displayInfo, displayInfoToggle] = useState(false);
  let priceSum = 0;

  if(displayInfo) {
    return ( 
      <div className="cart-wrapper">
        <div className="cart">
          <div className="cart-title">{name}</div>

          <div className="cart-card-list-container">
            <div className="cart-label">Loty</div>
            <div className="cart-card-list">
              {pointer.loty.map( (e) => {
                priceSum += e.price;
                return <div className="item" key={e.key}> <span className="item-left">{e.name}</span> <span className="item-right">{e.price}</span> </div>;
              })}
            </div>
            <div className="cart-label">Hotele</div>
            <div className="cart-card-list">
              {pointer.hotele.map( (e) => {
                priceSum += e.price;
                return <div className="item" key={e.key}> <span className="item-left">{e.name}</span> <span className="item-right">{e.price}</span> </div>;
              })}
            </div>
            <div className="cart-label">Atrakcje</div>
            <div className="cart-card-list">
              {pointer.atrakcje.map( (e) => {
                priceSum += e.price;
                return <div className="item" key={e.key}> <span className="item-left">{e.name}</span> <span className="item-right">{e.price}</span> </div>;
              })}
            </div>
          </div>

          <div className="price-sum">Suma: {priceSum}</div>

          <span className="currency">PLN/os.</span>
          <img className="close" src={require('../assets/icons/close.png')} onClick={ () => {
            displayInfoToggle(false)
          }}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart-on-list" onClick={ () => {
        displayInfoToggle(!displayInfo)
      }}>
        {name}
      </div>
    );
  }
};

Cart.defaultProps = {
  pointer:  new CartClass(
    [new CardClass("lot", "Lot 1"), new CardClass("lot", "Lot 2"), new CardClass("lot", "Lot 3")],
    [new CardClass()],
    [new CardClass()]
  ),
  name: "Placeholder"
};
 
export default Cart;