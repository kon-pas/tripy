import * as carts from "../scripts/carts";

const PlanningCart = () => {
  const loty = carts.currentCart.getLoty();
  const hotele = carts.currentCart.getHotele();
  const atrakcje = carts.currentCart.getAtrakcje();

  return ( 
    <div className="planning-cart">
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
 
export default PlanningCart;