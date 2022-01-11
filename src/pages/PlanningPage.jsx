import { Component } from "react/cjs/react.production.min";
import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import CardListPlanning from "../components/CardListPlanning";
import PlanningCart from "../components/PlanningCart";
import Cart from "../components/Cart";

import * as carts from "../scripts/carts";
import * as search from "../scripts/search";

class PlanningPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "lot",
      flights: [],
      hotels: [],
      attraction: []
  }
    this.changePage = this.changePage.bind(this);
  }

  changePage(pageName){
    this.setState({
      currentPage: pageName
    });
  }

  componentDidMount() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin', 'http://localhost:3000');

    fetch(`http://51.83.185.162:4000/flights`, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .then(data => {
            this.setState({flights: data})
        })

    fetch(`http://51.83.185.162:4000/hotels`, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .then(data => {
            this.setState({hotels: data})
        })
    fetch(`http://51.83.185.162:4000/attraction/all`, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .then(data => {
            this.setState({attraction: data})
        })
  }

  render() {
    if (this.state.currentPage === "lot") {
      return ( 
        <div className="planning-page">
          <Navbar top={0}/>
          <div className="content">
            <InputForm type="planning-page" />
            <div className="content-bottom">
              <div className="content-bottom-left">
                <div className="planning-navbar">
                  <div className="planning-navbar-button active"><span>Lot</span></div>
                  <div className="planning-navbar-button"><span>Hotel</span></div>
                  <div className="planning-navbar-button"><span>Atrakcje</span></div>
                  <div className="planning-navbar-button"><span>Sfinalizuj</span></div>
                </div>
                <CardListPlanning
                  currentPage={this.state.currentPage}
                  attraction={this.state.attraction.map((value) => value)}
                  hotels={this.state.hotels.map((value) => value)}
                  flights={this.state.flights.map((value) => value)}
                />
              </div>
              <div className="content-bottom-right">
                <PlanningCart currentCart={carts.currentCart} />
                <button onClick={() => {
                  carts.currentCart.setLoty(carts.getCurrentPlanningPageCards());
                  carts.setCurrentPlanningPageCards([]);
                  this.changePage('hotel');
                }}>Dalej</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.currentPage === "hotel") {
      return ( 
        <div className="planning-page">
          <Navbar top={0}/>
          <div className="content">
            <InputForm type="planning-page" />
            <div className="content-bottom">
              <div className="content-bottom-left">
                <div className="planning-navbar">
                  <div className="planning-navbar-button active"><span>Lot</span></div>
                  <div className="planning-navbar-button active"><span>Hotel</span></div>
                  <div className="planning-navbar-button"><span>Atrakcje</span></div>
                  <div className="planning-navbar-button"><span>Sfinalizuj</span></div>
                </div>
                <CardListPlanning
                  currentPage={this.state.currentPage}
                  attraction={this.state.attraction.map((value) => value)}
                  hotels={this.state.hotels.map((value) => value)}
                  flights={this.state.flights.map((value) => value)}
                />
              </div>
              <div className="content-bottom-right">
                <PlanningCart currentCart={carts.currentCart} />
                <button onClick={() => {
                  carts.currentCart.setHotele(carts.getCurrentPlanningPageCards());
                  carts.setCurrentPlanningPageCards([]);
                  this.changePage('atrakcje');
                }}>Dalej</button>
                <button onClick={() => this.changePage('lot')}>Powrót</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.currentPage === "atrakcje") {
      return ( 
        <div className="planning-page">
          <Navbar top={0}/>
          <div className="content">
            <InputForm type="planning-page" />
            <div className="content-bottom">
              <div className="content-bottom-left">
                <div className="planning-navbar">
                  <div className="planning-navbar-button active"><span>Lot</span></div>
                  <div className="planning-navbar-button active"><span>Hotel</span></div>
                  <div className="planning-navbar-button active"><span>Atrakcje</span></div>
                  <div className="planning-navbar-button"><span>Sfinalizuj</span></div>
                </div>
                <CardListPlanning
                  currentPage={this.state.currentPage}
                  attraction={this.state.attraction.map((value) => value)}
                  hotels={this.state.hotels.map((value) => value)}
                  flights={this.state.flights.map((value) => value)}
                />
              </div>
              <div className="content-bottom-right">
                <PlanningCart currentCart={carts.currentCart} />
                <button onClick={ () => {
                  carts.currentCart.setAtrakcje(carts.getCurrentPlanningPageCards());
                  carts.setCurrentPlanningPageCards([]);
                }}>Sfinalizuj</button>
                <button onClick={() => this.changePage('hotel')}>Powrót</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.currentPage === "sfinalizuj") {
      return ( 
        <div className="planning-page">
          <Navbar top={0}/>
          <div className="content">
            <InputForm type="planning-page" />
            <div className="content-bottom">
              <div className="content-bottom-left">
                <div className="planning-navbar">
                  <div className="planning-navbar-button active"><span>Lot</span></div>
                  <div className="planning-navbar-button active"><span>Hotel</span></div>
                  <div className="planning-navbar-button active"><span>Atrakcje</span></div>
                  <div className="planning-navbar-button"><span>Sfinalizuj</span></div>
                </div>
                <CardListPlanning currentPage={this.state.currentPage}/>
              </div>
              <div className="content-bottom-right">
                <PlanningCart currentCart={carts.currentCart} />
                <button onClick={ () => {
                  carts.currentCart.setAtrakcje(carts.getCurrentPlanningPageCards());
                  carts.setCurrentPlanningPageCards([]);
                }}>Gotowe!</button>
                <button onClick={() => this.changePage('hotel')}>Powrót</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
 
export default PlanningPage;