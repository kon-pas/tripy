import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import { Card as CardClass } from "../scripts/Card";
import { Cart as CartClass } from "../scripts/Cart"; 
import { useState } from "react";
import * as carts from "../scripts/carts";

const UserPage = () => {
  const Koszyk = new CartClass(
    [new CardClass(), new CardClass(), new CardClass()],
    [new CardClass(), new CardClass(), new CardClass()],
    [new CardClass(), new CardClass(), new CardClass()]
  )

  const [contactVisible, toggleContact] = useState(false);

  const displayContact = () => {
    if (contactVisible) {
      return <div className="contact">Skontaktuj się z nami poprzez<span className="bold"> kontakt@tripy.pl</span></div>;
    }
    return;
  }

  return (
    <div>
      <Navbar top={0}/>
      <div className="user-page">
        <span className="title-1">Twoje wyjazdy</span>
        <div className="cart-list">
          <div className="cart-list-item"><Cart pointer={carts.cart1} name="Cudowna Polska Praga"/></div>
          <div className="cart-list-item"><Cart pointer={carts.cart2} name="Wspaniałe Krupówki"/></div>
          <div className="cart-list-item"><Cart pointer={carts.cart3} name="Miłość w Zakopanem"/></div>
        </div>
        <div className="panel">
          {displayContact()}
          <div className="support" onClick={ () => {
            toggleContact(!contactVisible)
          }}>Potrzebujesz pomocy?</div>
          <div className="logout">Wyloguj (W.I.P.)</div>
        </div>
      </div>
    </div>
   );
}
 
export default UserPage; 