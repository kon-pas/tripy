import * as carts from "../scripts/carts";
import * as cards from "../scripts/cards";

const PlanningCart = ({currentCart}) => {
  const loty = currentCart.getLoty();
  const hotele = currentCart.getHotele();
  const atrakcje = currentCart.getAtrakcje();
  const size = loty.length + hotele.length + atrakcje.length;

  return ( 
    <div className="planning-cart" style={{height: 100 + 27 * size}}>
      <div className="title">Loty</div>
      {loty.map(e => 
        <span className="planning-cart-item" key={Math.random()}> {e.getName()} </span>
      )}

      <div className="title">Hotele</div>
      {hotele.map(e => 
        <span className="planning-cart-item" key={Math.random()}> {e.getName()} </span>
      )}

      <div className="title">Atrakcje</div>
      {atrakcje.map(e => 
        <span className="planning-cart-item" key={Math.random()}> {e.getName()} </span>
      )}
    </div>
   );
}

PlanningCart.defaultProps = {
  currentCart: carts.currentCart
}
 
export default PlanningCart;