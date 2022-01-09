import Card from "../components/Card";
import * as cards from "../scripts/cards";


const CardListHome = () => {
  const atrakcje = [...cards.cards.atrakcje];
  const hotele = [...cards.cards.hotele];
  const loty = [...cards.cards.loty];

  return ( 
    <div className="card-list card-list-home">

      <div className="title-wrapper"><span className="title">Polecamy atrakcje</span> </div> 
      <div className="container">
        {atrakcje.map( e => <Card display="vanilla" key={e.getKey()} name={e.getName()} /> )}
      </div>

      <div className="title-wrapper"><span className="title">Polecamy hotele</span> </div> 
      <div className="container">
        {hotele.map( e => <Card display="vanilla" key={e.getKey()} name={e.getName()} /> )}
      </div>

      <div className="title-wrapper"><span className="title">Polecamy loty </span> </div> 
      <div className="container">
        {loty.map( e => <Card display="vanilla" key={e.getKey()} name={e.getName()} /> )}
      </div>

    </div>
   );
}
 
export default CardListHome;