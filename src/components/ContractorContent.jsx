import { useCallback, useEffect, useState } from "react";
import useUserData from "../hooks/useUserData";
import AddNewAttraction from "./AddNewAttraction";
import EditAttraction from "./EditAttraction";

const ContractorContent = () => {
  const { userId } = useUserData();
  const [isAdding, setIsAdding] = useState(false);
  const [editAttraction, setEditAttraction] = useState(null);
  const [currentAttractions, setCurrentAttractions] = useState([]);

  const reload = useCallback(() => {
    fetch('http://51.83.185.162:4000/attraction/all')
      .then(response => response.json())
      .then(data => {
        return data.filter(attraction => attraction.userId === userId);
      })
      .then(data => {
        console.log(data);
        setCurrentAttractions(data);
      })
  }, [userId]);

  useEffect(() => {
    reload()
  }, [reload]);

  const handleSuccess = () => {
    setIsAdding(false);
    setEditAttraction(null);
    reload();
  }

  if (isAdding) {
    return <AddNewAttraction onCancel={() => setIsAdding(false)} onSuccess={handleSuccess} />;
  }

  if (editAttraction) {
    return <EditAttraction data={editAttraction} onCancel={() => setEditAttraction(null)} onSuccess={handleSuccess} />;
  }

  return ( 
    <div>
      <div>
        <button onClick={() => setIsAdding(true)}>Dodaj atrakcję +</button>
      </div>
      <div className="content">
        <div className="attractions">
            {currentAttractions.map(attraction => (
            <div key={attraction.id} className={'attraction'}>
                <button onClick={() => setEditAttraction(attraction)}>Uaktualnij</button>
                <div className="box">
                    <div className="box-header">
                        <h3>{attraction.header}</h3>
                    </div>
                    <img src={attraction.image} alt='attraction' width="100%" height="100%" />
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
   );
}

export default ContractorContent;