import { Component } from "react/cjs/react.production.min";
import Card from "../components/Card";
import * as cards from "../scripts/cards";
import * as db from "../scripts/Database";
import componentDidMount from 'react';

class CardListHome extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      atrakcje: [],
      hotele: [],
      loty: [],
    }
  }

  componentDidMount() {
    db.fetchAttractions().then( result => {
      this.setState({
        atrakcje: [...result]
      })
    });
    db.fetchHotel().then( result => {
      this.setState({
        hotele: [...result]
      })
    });
    db.fetchFlights().then( result => {
      this.setState({
        loty: [...result]
      })
    });
  }

  render() { 
    return ( 
      <div>
        <div className="card-list card-list-home">
          <div className="title-wrapper-list"><span className="title">Polecamy atrakcje</span> </div> 
          <div className="container">
            {this.state.atrakcje.map( e => <Card display="vanilla" key={Math.random()} name={e.getName()} pointer={e} /> )}
          </div>
        </div>

        <div className="card-list card-list-home">
          <div className="title-wrapper-list"><span className="title">Polecamy hotele</span> </div> 
          <div className="container">
            {this.state.hotele.map( e => <Card display="vanilla" key={Math.random()} name={e.getName()} pointer={e} /> )}
          </div>
        </div>

        <div className="card-list card-list-home">
          <div className="title-wrapper-list"><span className="title">Polecamy loty </span> </div> 
          <div className="container">
            {this.state.loty.map( e => <Card display="vanilla" key={Math.random()} name={e.getName()} pointer={e} /> )}
          </div>
        </div>
      </div>
    );
  }
}
 
export default CardListHome;

// const CardListHome = () => {
//   const atrakcje = [];
//   const hotele = [];
//   const loty = [];

//   db.fetchAttractions().then( result => {atrakcje = result})
//   db.fetchHotel().then( result => {hotele = result})
//   db.fetchFlights().then( result => {loty = result})

//   return ( 
//     <div>
//       <div className="card-list card-list-home">
//         <div className="title-wrapper-list"><span className="title">Polecamy atrakcje</span> </div> 
//         <div className="container">
//           {atrakcje.map( e => <Card display="vanilla" key={e.getKey()} name={e.getName()} /> )}
//         </div>
//       </div>

//       <div className="card-list card-list-home">
//         <div className="title-wrapper-list"><span className="title">Polecamy hotele</span> </div> 
//         <div className="container">
//           {hotele.map( e => <Card display="vanilla" key={e.getKey()} name={e.getName()} /> )}
//         </div>
//       </div>

//       <div className="card-list card-list-home">
//         <div className="title-wrapper-list"><span className="title">Polecamy loty </span> </div> 
//         <div className="container">
//           {loty.map( e => <Card display="vanilla" key={e.getKey()} name={e.getName()} /> )}
//         </div>
//       </div>
//     </div>
//    );
// }
 
// export default CardListHome;