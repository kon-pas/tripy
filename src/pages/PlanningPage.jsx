import { Component } from "react/cjs/react.production.min";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputForm from "../components/InputForm";
import CardListPlanning from "../components/CardListPlanning";
import PlanningCart from "../components/PlanningCart";
import Cart from "../components/Cart";
import * as section from "../scripts/section.js";
import { Link } from "react-router-dom";
import filter from "../scripts/filter.js";
// import { Navigate } from "react-router-dom";
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
            this.setState({flights: filter(data)})
        })

    fetch(`http://51.83.185.162:4000/hotels`, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .then(data => {
            this.setState({hotels: filter(data)})
        })
        
    fetch(`http://51.83.185.162:4000/attraction/all`, {
        method: 'GET',
        headers: headers
    }).then(response => response.json())
        .then(data => {
            this.setState({attraction: filter(data)})
        })
  }

  render() {
    if (this.state.currentPage === "lot") {
      return ( 
        <div>
          <Header />
          <div className="planning-page">
            <div className="content">
              <div className="menu">
                <InputForm type="planning-page"/>
              </div>
              <div className="content-bottom">
                <div className="list">
                  <CardListPlanning
                      currentPage={this.state.currentPage}
                      attraction={this.state.attraction.map((value) => value)}
                      hotels={this.state.hotels.map((value) => value)}
                      flights={this.state.flights.map((value) => value)}
                  />
                </div>
                <div className="cart-container">
                  <div className="cart">
                    <PlanningCart currentCart={carts.currentCart} />
                    <button onClick={() => {
                      carts.currentCart.setLoty(carts.getCurrentPlanningPageCards());
                      carts.setCurrentPlanningPageCards([]);
                      this.changePage('hotel');
                    }}>Dalej</button>
                  </div>
                </div>
              </div>
              {/* <InputForm/>
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
              </div> */}
            </div>
          </div>
          <Footer />
        </div>
      );
    }
    else if(this.state.currentPage === "hotel") {
      return ( 
        <div>
          <Header />
          <div className="planning-page">
            <div className="content">
              <div className="menu">
                <InputForm type="planning-page"/>
              </div>
              <div className="content-bottom">
                <div className="list">
                  <CardListPlanning
                      currentPage={this.state.currentPage}
                      attraction={this.state.attraction.map((value) => value)}
                      hotels={this.state.hotels.map((value) => value)}
                      flights={this.state.flights.map((value) => value)}
                  />
                </div>
                <div className="cart-container">
                  <div className="cart">
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
          </div>
          <Footer />
        </div>
      );
      // return ( 
      //   <div>
      //     <Header />
      //     <div className="planning-page">
      //       <div className="content">
      //         <InputForm type="planning-page" />
      //         <div className="content-bottom">
      //           <div className="content-bottom-left">
      //             <div className="planning-navbar">
      //               <div className="planning-navbar-button active"><span>Lot</span></div>
      //               <div className="planning-navbar-button active"><span>Hotel</span></div>
      //               <div className="planning-navbar-button"><span>Atrakcje</span></div>
      //               <div className="planning-navbar-button"><span>Sfinalizuj</span></div>
      //             </div>
      //             <CardListPlanning
      //               currentPage={this.state.currentPage}
      //               attraction={this.state.attraction.map((value) => value)}
      //               hotels={this.state.hotels.map((value) => value)}
      //               flights={this.state.flights.map((value) => value)}
      //             />
      //           </div>
      //           <div className="content-bottom-right">
      //             <PlanningCart currentCart={carts.currentCart} />
      //             <button onClick={() => {
      //               carts.currentCart.setHotele(carts.getCurrentPlanningPageCards());
      //               carts.setCurrentPlanningPageCards([]);
      //               this.changePage('atrakcje');
      //             }}>Dalej</button>
      //             <button onClick={() => this.changePage('lot')}>Powrót</button>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <Footer />
      //   </div>
      // );
    }
    else if(this.state.currentPage === "atrakcje") {
      return ( 
        <div>
          <Header />
          <div className="planning-page">
            <div className="content">
              <div className="menu">
                <InputForm type="planning-page"/>
              </div>
              <div className="content-bottom">
                <div className="list">
                  <CardListPlanning
                      currentPage={this.state.currentPage}
                      attraction={this.state.attraction.map((value) => value)}
                      hotels={this.state.hotels.map((value) => value)}
                      flights={this.state.flights.map((value) => value)}
                  />
                </div>
                <div className="cart-container">
                  <div className="cart">
                    <PlanningCart currentCart={carts.currentCart} />
                    <button onClick={ () => {
                      carts.currentCart.setAtrakcje(carts.getCurrentPlanningPageCards());
                      carts.setCurrentPlanningPageCards([]);
                      this.changePage('sfinalizuj');
                    }}>Sfinalizuj</button>
                    <button onClick={() => this.changePage('hotel')}>Powrót</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );

      // return (
      //   <div>
      //     <Header />
      //     <div className="planning-page">
      //       <div className="content">
      //         <InputForm type="planning-page" />
      //         <div className="content-bottom">
      //           <div className="content-bottom-left">
      //             <div className="planning-navbar">
      //               <div className="planning-navbar-button active"><span>Lot</span></div>
      //               <div className="planning-navbar-button active"><span>Hotel</span></div>
      //               <div className="planning-navbar-button active"><span>Atrakcje</span></div>
      //               <div className="planning-navbar-button"><span>Sfinalizuj</span></div>
      //             </div>
      //             <CardListPlanning
      //               currentPage={this.state.currentPage}
      //               attraction={this.state.attraction.map((value) => value)}
      //               hotels={this.state.hotels.map((value) => value)}
      //               flights={this.state.flights.map((value) => value)}
      //             />
      //           </div>
      //           <div className="content-bottom-right">
      //             <PlanningCart currentCart={carts.currentCart} />
      //             <button onClick={ () => {
      //               carts.currentCart.setAtrakcje(carts.getCurrentPlanningPageCards());
      //               carts.setCurrentPlanningPageCards([]);
      //               this.changePage('sfinalizuj');
      //             }}>Sfinalizuj</button>
      //             <button onClick={() => this.changePage('hotel')}>Powrót</button>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <Footer />
      //   </div>
      // );
    }
    // else if(this.state.currentPage === "sfinalizuj") {
    //   return ( 
    //     <div>
    //       <Header />
    //       <div className="planning-page">
    //         <div className="content">
    //           <InputForm type="planning-page" />
    //           <div className="content-bottom">
    //             <div className="content-bottom-left">
    //               <div className="planning-navbar">
    //                 <div className="planning-navbar-button active"><span>Lot</span></div>
    //                 <div className="planning-navbar-button active"><span>Hotel</span></div>
    //                 <div className="planning-navbar-button active"><span>Atrakcje</span></div>
    //                 <div className="planning-navbar-button active"><span>Sfinalizuj</span></div>
    //               </div>
    //                Work in progress
    //               {/* <CardListPlanning
    //                 currentPage={"lot"}
    //                 attraction={this.state.attraction.map((value) => value)}
    //                 hotels={this.state.hotels.map((value) => value)}
    //                 flights={this.state.flights.map((value) => value)}
    //               />
    //               <CardListPlanning
    //                 currentPage={"hotel"}
    //                 attraction={this.state.attraction.map((value) => value)}
    //                 hotels={this.state.hotels.map((value) => value)}
    //                 flights={this.state.flights.map((value) => value)}
    //               />
    //               <CardListPlanning
    //                 currentPage={"atrakcje"}
    //                 attraction={this.state.attraction.map((value) => value)}
    //                 hotels={this.state.hotels.map((value) => value)}
    //                 flights={this.state.flights.map((value) => value)}
    //               /> */}
    //             </div>
    //             <div className="content-bottom-right">
    //               <PlanningCart currentCart={carts.currentCart} />
    //               <Link to={"/"} style={{ textDecoration: 'none' }}> <div className="button">Sfinalizuj</div> </Link>
    //               <button onClick={() => this.changePage('hotel')}>Powrót</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <Footer />
    //     </div>
    //   );
    // }
  }
}
 
export default PlanningPage;