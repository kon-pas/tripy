import InputForm from "../components/InputForm";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CardList from "../components/CardList";

const HomePage = () => {
  return ( 
    <div className="home-page">
      <Header top={100}/>
      <section className="input-section">
        <InputForm type="home-page"/>
      </section>
      <section className="register-section">
        <Link to={'/register'} style={{ textDecoration: 'none' }}>
          <div>Zarejestruj się</div>
        </Link>
      </section>
      <section className="promotional-section">
        Polecamy
        <CardList />
      </section>
    </div>
   );
}
 
export default HomePage;