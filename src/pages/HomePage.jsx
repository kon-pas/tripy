import InputForm from "../components/InputForm";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CardListHome from "../components/CardListHome";
import Footer from "../components/Footer";

const HomePage = () => {
  return ( 
    <div>
      <Header/>
      <div className="home-page">
        
        <section className="input-section">
          <img src={require("../assets/images/aircraft.png")} />
          <InputForm type="home-page"/>
        </section>

        <section className="home-register-container">
          <div className="home-register-card"></div>
          <div className="home-register-text-container">
            <span className="span-1">Już teraz</span><br/>
            <Link to={'/register'} style={{ textDecoration: 'none' }}><button>zarejestruj się</button></Link><br/>
            <span className="span-2">za darmo</span><br/>
            <span className="span-3">i poczuj się</span><br/>
            <span className="span-4">jak w domu</span>
          </div>
          <img src={require("../assets/images/home.png")} />
        </section>

        <section className="promotional-section">
          <CardListHome />
        </section>
      </div>
      <Footer />
    </div>
   );
}
 
export default HomePage;