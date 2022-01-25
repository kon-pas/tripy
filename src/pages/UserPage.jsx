import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { Card as CardClass } from "../scripts/Card";
import { Cart as CartClass } from "../scripts/Cart";
import { useState } from "react";
import * as carts from "../scripts/carts";
import useLogout from "../hooks/useLogout";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const UserPage = () => {
  const logout = useLogout();
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
      <Header/>
      <div className="user-page">
        <span className="title-1">Twoje wyjazdy</span>
        <div className="cart-list">
          <div className="cart-list-item"><Cart pointer={carts.cart1} name="Cudowna Polska Praga" /></div>
          <div className="cart-list-item"><Cart pointer={carts.cart2} name="Wspaniałe Krupówki" /></div>
          <div className="cart-list-item"><Cart pointer={carts.cart3} name="Miłość w Zakopanem" /></div>
        </div>
        {/* <span className="title-1">Kontraktor</span> */}
        <div className="cart-list">
          <div className="cart-list-item">
            <Link to={'/contractor'} style={{ textDecoration: 'none' }}><Button variant="contained">Dodaj nową atrakcję, hotel lub lot</Button></Link><br />
          </div>
        </div>
        <div className="panel">
          {displayContact()}
          <div className="support" onClick={() => {
            toggleContact(!contactVisible)
          }}>Potrzebujesz pomocy?</div>
          <div className="logout" onClick={logout}>Wyloguj</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default UserPage;