import * as carts from "../scripts/carts";
import * as cards from "../scripts/cards";

const PlanningCart = ({currentCart, currentPage}) => {
  const loty = currentCart.getLoty();
  const hotele = currentCart.getHotele();
  const atrakcje = currentCart.getAtrakcje();
  const size = loty.length + hotele.length + atrakcje.length;

  const getTitleLoty = () => {
    console.log(currentPage)
    if(currentPage === "lot") return <div className="title-active"> Loty </div>
    else return <div className="title"> Loty </div>
  }
  const getTitleHotele = () => {
    if(currentPage === "hotel") return <div className="title-active"> Hotele </div>
    else return <div className="title"> Hotele </div>
  }
  const getTitleAtrakcje = () => {
    if(currentPage === "atrakcje") return <div className="title-active"> Atrakcje </div>
    else return <div className="title"> Atrakcje </div>
  }

  return ( 
    <div className="planning-cart" style={{height: 100 + 27 * size}}>
      {getTitleLoty()}
      {loty.map(e => 
        <span className="planning-cart-item" key={Math.random()}> {e.getName()} </span>
      )}

      {getTitleHotele()}
      {hotele.map(e => 
        <span className="planning-cart-item" key={Math.random()}> {e.getName()} </span>
      )}

      {getTitleAtrakcje()}
      {atrakcje.map(e => 
        <span className="planning-cart-item" key={Math.random()}> {e.getName()} </span>
      )}
    </div>
   );
}

PlanningCart.defaultProps = {
  currentCart: carts.currentCart,
  IconButton: "loty"
}
 
export default PlanningCart;