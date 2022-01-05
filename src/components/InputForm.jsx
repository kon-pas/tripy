import { Component } from "react/cjs/react.production.min";
import { Navigate } from "react-router-dom";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      wylot: '',
      powrot: '',
      miejscowosc: '',
      liczba_osob: '',
      budzet_minimalny: '',
      budzet_maksymalny: '',
      submitSuccess: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    this.setState({
      submitSuccess: true
    });
    event.preventDefault();
  }

  render() {
    if (this.state.submitSuccess) {
      return <Navigate to="/planning" />
    }
    return ( 
      <div className="input-form">
        <form onSubmit={this.handleSubmit}>
          <input className="wylot" type="text" value={this.state.wylot} onChange={this.handleChange} name="wylot" placeholder="Wylot"/>
          <input className="powrot" type="text" value={this.state.powrot} onChange={this.handleChange} name="powrot" placeholder="Adres e-mail"/>
          <input className="miejscowosc" type="text" value={this.state.miejscowosc} onChange={this.handleChange} name="miejscowosc" placeholder="Miejscowość"/>
          <input className="liczba_osob" type="text" value={this.state.liczba_osob} onChange={this.handleChange} name="liczba_osob" placeholder="Liczba osób"/>
          <input className="budzet_minimalny" type="text" value={this.state.budzet_minimalny} onChange={this.handleChange} name="budzet_minimalny" placeholder="Budżet minimalny"/>
          <input className="budzet_maksymalny" type="text" value={this.state.budzet_maksymalny} onChange={this.handleChange} name="budzet_maksymalny" placeholder="Budżet maksymalny"/>
          <input type="submit" value="Lecimy!" />
        </form>
      </div>
    );
  }
}
 
export default InputForm;