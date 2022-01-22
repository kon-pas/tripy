import { useState } from "react";
import { ATTRACTION_FIELDS } from "../consts/contractor";
import useUserData from "../hooks/useUserData";
import Cookies from 'js-cookie';
window.cook = Cookies;

const EditAttraction = ({ data, onCancel, onSuccess }) => {
  const [values, setValues] = useState(data);
  const { jwt } = useUserData();
  const handleEditAttraction = async (e) => {
    e.preventDefault();
    console.log(values);
    fetch('http://51.83.185.162:4000/attraction/update', {
      method: 'PATCH',
      credentials: "same-origin",
      body: JSON.stringify({
        data: values
      }),
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
    <form className="contractor-page-form" onSubmit={handleEditAttraction}>
      <h2>Edytuj atrakcję</h2>
      {ATTRACTION_FIELDS.map(field => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input type="text" name={field.name} defaultValue={data[field.name]} value={values[field.name]} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Zapisz</button>
      <button type="button" onClick={onCancel}>Anuluj</button>
    </form>
  )
}

export default EditAttraction;