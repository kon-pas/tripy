import { useState } from "react";
import { ATTRACTION_FIELDS } from "../consts/contractor";
import useUserData from "../hooks/useUserData";

const AddNewAttraction = ({ onCancel, onSuccess }) => {
  const [values, setValues] = useState({});
  const { jwt } = useUserData();
  const handleAddAttraction = async (e) => {
    e.preventDefault();
    fetch('http://51.83.185.162:4000/attraction/register', {
      method: 'POST',
      body: JSON.stringify(values),
      credentials: "same-origin",
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'http://localhost:3000',
          'Authorization': `Bearer ${jwt}`,
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      onSuccess();
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form className="contractor-page-form" onSubmit={handleAddAttraction}>
        <h2>Dodaj atrakcję</h2>
      {ATTRACTION_FIELDS.map(field => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input type="text" name={field.name} value={values[field.name]} onChange={handleChange}  />
        </div>
      ))}
      <button type="submit">Dodaj</button>
      <button type="button" onClick={onCancel}>Anuluj</button>
    </form>
  )
}

 
export default AddNewAttraction;