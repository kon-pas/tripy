import { useState } from "react";
import { CONTRACTOR_TYPES } from "../consts/contractor";
import useUserData from "../hooks/useUserData";

const AddNewAttraction = ({ type, onCancel, onSuccess }) => {
  const details = CONTRACTOR_TYPES[type];
  const [values, setValues] = useState({});
  const { jwt } = useUserData();
  const [error, setError] = useState('');
  const handleAddAttraction = async (e) => {
    e.preventDefault();
    setError('');
    const parsedValues = {};
    Object.keys(values).forEach(key => {
      const config = details.fields[key];
      parsedValues[key] = config.parseInput ? config.parseInput(values[key]) : values[key];
    });
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
      })
      .catch(e => setError(e.message))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form className="contractor-page-form" onSubmit={handleAddAttraction}>
      <h2>Dodawanie - {details.title}</h2>
      {error && <h3 style={{ color: 'red' }}>{error}</h3>}
      {details.fields.map(field => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input type="text" name={field.name} value={values[field.name]} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Dodaj</button>
      <button type="button" onClick={onCancel}>Anuluj</button>
    </form>
  )
}


export default AddNewAttraction;