import InputForm from "../components/InputForm";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CardListHome from "../components/CardListHome";
import Footer from "../components/Footer";

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
        <CardListHome />
      </section>

      <Footer />
    </div>
   );
}
 
export default HomePage;