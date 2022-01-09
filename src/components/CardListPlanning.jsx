import Card from "../components/Card";

import * as cards from "../scripts/cards";
import * as search from "../scripts/search";

const CardListPlanning = ({currentPage}) => {
  const atrakcje = [...cards.cards.atrakcje];
  const hotele = [...cards.cards.hotele];
  const loty = [...cards.cards.loty];

  if (currentPage === "lot") {
    return (
      <div className="card-list card-list-planning">
        <div className="container">
          {loty.map( e => <Card display="planning" key={e.getKey()} name={e.getName()} /> )}
        </div>
      </div>
     );
  }
  else if(currentPage === "hotel") {
    return (
      <div className="card-list card-list-planning">
        <div className="container">
          {hotele.map( e => <Card display="planning" key={e.getKey()} name={e.getName()} /> )}
        </div>
      </div>
     );
  }
  else if(currentPage === "atrakcje") {
    return (
      <div className="card-list card-list-planning">
        <div className="container">
          {atrakcje.map( e => <Card display="planning" key={e.getKey()} name={e.getName()} /> )}
        </div>
      </div>
     );
  }
}
 
export default CardListPlanning;