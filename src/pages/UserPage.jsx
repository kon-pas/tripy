import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import { Card as CardClass } from "../scripts/Card";
import { Cart as CartClass } from "../scripts/Cart"; 

const UserPage = () => {

  const Koszyk = new CartClass(
    [new CardClass(), new CardClass(), new CardClass()],
    [new CardClass(), new CardClass(), new CardClass()],
    [new CardClass(), new CardClass(), new CardClass()]
  )

  return (
    <div>
      <Navbar top={0}/>
      <div className="user-page">
        <span className="title-1">Twoje wyjazdy</span>
        <div className="cart-list">
          <div className="cart-list-item"><Cart /></div>
          <div className="cart-list-item"><Cart /></div>
          <div className="cart-list-item"><Cart /></div>
        </div>
        <div className="panel">
          <div className="support">Potrzebujesz pomocy?</div>
          <div className="logout">Wyloguj</div>
        </div>
      </div>
    </div>
   );
}
 
export default UserPage;