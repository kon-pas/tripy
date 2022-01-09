import * as carts from "../scripts/carts";

const PlanningCart = () => {
  return ( 
    <div className="planning-cart">
      <div className="title">Loty</div>
      {carts.currentCart.getLoty().map(e => 
        <span className="planning-cart-item" key={Math.random()}> {e} </span>
      )}

      <div className="title">Hotele</div>
      {carts.currentCart.getLoty().map(e => 
        <span className="planning-cart-item" key={Math.random()}> {e} </span>
      )}

      <div className="title">Atrakcje</div>
      {carts.currentCart.getLoty().map(e => 
        <span className="planning-cart-item" key={Math.random()}> {e} </span>
      )}
    </div>
   );
}
 
export default PlanningCart;