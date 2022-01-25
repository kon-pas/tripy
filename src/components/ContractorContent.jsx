import { useCallback, useEffect, useState } from "react";
import useUserData from "../hooks/useUserData";
import AddNewAttraction from "../components/AddNewAttraction";
import EditAttraction from "../components/EditAttraction";

import Card from "../components/Card";

const ContractorContent = () => {
  const { email } = useUserData();
  const [type, setType] = useState('');
  const [edit, setEdit] = useState(null);
  const [currentAttractions, setCurrentAttractions] = useState([]);
  const [currentFlights, setCurrentFlights] = useState([]);
  const [currentHotels, setCurrentHotels] = useState([]);

  const reload = useCallback(() => {
    fetch('http://51.83.185.162:4000/attraction/all')
      .then(response => response.json())
      .then(data => {
        return data.filter(attraction => attraction.email === email);
      })
      .then(data => {
        setCurrentAttractions(data);
      })
    fetch('http://51.83.185.162:4000/flights')
      .then(response => response.json())
      .then(data => {
        return data.filter(flight => flight.email === email);
      })
      .then(data => {
        setCurrentFlights(data);
      })
    fetch('http://51.83.185.162:4000/hotels')
      .then(response => response.json())
      .then(data => {
        return data.filter(hotel => hotel.email === email);
      })
      .then(data => {
        setCurrentHotels(data);
      })
  }, [email]);

  useEffect(() => {
    reload()
  }, [reload]);

  const handleSuccess = () => {
    setType('');
    setEdit(null);
    reload();
  }

  if (edit) {
    return <EditAttraction type={type} data={edit} onCancel={() => { setType(''); setEdit(null) }} onSuccess={handleSuccess} />;
  }

  if (type) {
    return <AddNewAttraction type={type} onCancel={() => setType('')} onSuccess={handleSuccess} />;
  }

  return (
    <div>
      <div className="buttons">
        <button onClick={() => setType('attraction')}>Dodaj atrakcję</button>
        <button onClick={() => setType('flight')}>Dodaj lot</button>
        <button onClick={() => setType('hotel')}>Dodaj hotel</button>
      </div>
      <div className="content">
        <div className="items">
          <h2>Atrakcje</h2> <br />
          {currentAttractions.map(attraction => (
            <div key={attraction.id} className={'item'}>
              <button onClick={() => { setType('attraction'); setEdit(attraction) }}>Uaktualnij</button>
              <div className="box">
                <Card display="vanilla" pointer={attraction}></Card>
                {/* <div className="box-header">
                  <h3>{attraction.header}</h3>
                </div>
                <img src={attraction.image} alt='attraction' width="100%" height="100%" /> */}
              </div>
            </div>
          ))}
        </div>
        <div className="items">
          <h2>Loty</h2> <br />
          {currentFlights.map(flight => (
            <div key={flight.id} className={'item'}>
              <button onClick={() => { setType('flight'); setEdit(flight) }}>Uaktualnij</button>
              <div className="box">
                <Card display="vanilla" pointer={flight}></Card>
                {/* <div className="box-header">
                  <h3>{flight.header}</h3>
                </div>
                <img src={flight.image} alt='flight' width="100%" height="100%" /> */}
              </div>
            </div>
          ))}
        </div>
        <div className="items">
          <h2>Hotele</h2> <br />
          {currentHotels.map(hotel => (
            <div key={hotel.id} className={'item'}>
              <button onClick={() => { setType('hotel'); setEdit(hotel) }}>Uaktualnij</button>
              <div className="box">
                <Card display="vanilla" pointer={hotel}></Card>
                {/* <div className="box-header">
                  <h3>{hotel.header}</h3>
                </div>
                <img src={hotel.image} alt='hotel' width="100%" height="100%" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContractorContent;