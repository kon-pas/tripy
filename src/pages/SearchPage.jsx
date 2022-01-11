import { Component } from "react/cjs/react.production.min";
import CardListPlanning from "../components/CardListPlanning";

import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import PlanningCart from "../components/PlanningCart";
import Cart from "../components/Cart";

import * as carts from "../scripts/carts";
import * as search from "../scripts/search";

class SearchPage extends Component {
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
    return (
      <div className="search-page">
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
    );
  }
}
 
export default SearchPage;