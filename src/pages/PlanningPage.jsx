import { Component } from "react/cjs/react.production.min";
import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import CardListPlanning from "../components/CardListPlanning";
import PlanningCart from "../components/PlanningCart";

class PlanningPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="planning-page">
        <Navbar top={0}/>
        <div className="content">
          <InputForm type="planning-page" />
          <div className="content-bottom">
            <div className="content-bottom-left">
              <div className="planning-navbar">
                <div className="planning-navbar-button">Hotel</div>
                <div className="planning-navbar-button">Lot</div>
                <div className="planning-navbar-button">Atrakcje</div>
                <div className="planning-navbar-button">Sfinalizuj</div>
              </div>
              <CardListPlanning />
            </div>
            <div className="content-bottom-right">
              <PlanningCart />
              <button>Dalej</button>
              <button>Powrót</button>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default PlanningPage;