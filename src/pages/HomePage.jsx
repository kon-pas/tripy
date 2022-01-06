import InputForm from "../components/InputForm";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import * as states from '../scripts/states';

const HomePage = () => {
  return ( 
    <div className="home-page">
      <Header />
      <section className="input-section">
        <InputForm />
      </section>
      <section className="register-section">
        <Link to={'/register'} style={{ textDecoration: 'none' }}>
          <div>Zarejestruj się</div>
        </Link>
      </section>
      <section className="promotional-section">
        Polecamy
      </section>
    </div>
   );
}
 
export default HomePage;