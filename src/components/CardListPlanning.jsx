import Card from "../components/Card";
import componentDidMount from 'react';
import { Card as CardV } from "../scripts/Card";

import * as cards from "../scripts/cards";
import * as search from "../scripts/search";

const CardListPlanning = ({currentPage,attraction,hotels,flights}) => {
  // const atrakcje = [...cards.cards.atrakcje];
  // const hotele = [...cards.cards.hotele];
  // const loty = [...cards.cards.loty];

  const atrakcje = attraction.map((value) => {
    let card = new CardV();
    card.name = value.header;
    card.image = value.image;
    card.price = value.price;
    card.contact = value.email;
    return card
  });
  const hotele = hotels.map((value) => {
      let card = new CardV();
      card.name = value.header;
      card.image = value.image;
      card.price = value.price;
      card.contact = "example@gmail.com"
      return card
  });
  const loty = flights.map((value) => {
      let card = new CardV();
      card.name = value.header;
      card.image = value.image;
      card.price = value.price;
      return card
  })

  if (currentPage === "lot") {
    return (
      <div className="card-list card-list-planning">
        <div className="container">
          {loty.map( e => <Card display="planning" key={e.getKey()} pointer={e} /> )}
        </div>
      </div>
     );
  }
  else if(currentPage === "hotel") {
    return (
      <div className="card-list card-list-planning">
        <div className="container">
          {hotele.map( e => <Card display="planning" key={e.getKey()} pointer={e} /> )}
        </div>
      </div>
     );
  }
  else if(currentPage === "atrakcje") {
    return (
      <div className="card-list card-list-planning">
        <div className="container">
          {atrakcje.map( e => <Card display="planning" key={e.getKey()} pointer={e} /> )}
        </div>
      </div>
     );
  }
}
 
export default CardListPlanning;