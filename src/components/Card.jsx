const Card = (props) => {
  if (props.display === "vanilla") {
    return (
      <div className="card">
        <div className="image-wrapper">
          <img src={props.image} style={{width: 360, height: 260}} />
        </div>
        <div className="info-wrapper">
          <div className="title-wrapper"> {props.name} </div>
          <div className="subtitle-wrapper">
            <div className="price-wrapper"> {props.price + ' PLN/os.'} </div>
            <div className="rating-wrapper"> {props.rating + '/5'}</div>
          </div>
        </div>
      </div>
    )
  }
  else if (props.display === "planning") {
    return (
      <div className="card">
        <div className="image-wrapper">
          <img src={props.image} style={{width: 360, height: 260}} />
        </div>
        <div className="info-wrapper">
          <div className="title-wrapper"> {props.name} </div>
          <div className="subtitle-wrapper">
            <div className="price-wrapper"> {props.price + ' PLN/os.'} </div>
            <div className="rating-wrapper"> {props.rating + '/5'}</div>
          </div>
        </div>
        <div className="info-button">i</div>
        <div className="add-button">+</div>
      </div>
    )
  }
};

Card.defaultProps = { 
  display: "vanilla",
  type: null,
  name: "default name",
  image: "https://plikimpi.krakow.pl/pliki/243693/4.jpg",
  desc: "opis",
  rating: 5.0,
  link: "www.x.com",
  contact: "example@gmail.com",
  price: 100
};

export default Card;