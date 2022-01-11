import { Component } from "react/cjs/react.production.min";
import { Navigate } from "react-router-dom";
import { currentSearch as search, getWylot } from "../scripts/search";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      wylot:  getWylot(),
      powrot:  search.powrot,
      miejscowosc:  search.miejscowosc,
      liczbaOsob: search.liczbaOsob,
      budzetMinimalny:  search.budzetMinimalny,
      budzetMaksymalny:  search.budzetMaksymalny,
      submitSuccess: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    this.setState({
      submitSuccess: true,
      wylot: search.wylot
    });
    event.preventDefault();
  }

  handleSearch(event) {
    console.log(this.state.wylot);
  }

  render() {
    if (this.state.submitSuccess) {
      return <Navigate to="/planning" />
    }
    if (this.props.type === "planning-page") {
      return ( 
        <div>
          <form onSubmit={this.handleSearch} className="input-form-planning">
            <input
              className="wylot"
              type="text"
              value={this.state.wylot}
              onChange={this.handleChange}
              name="wylot"
              placeholder="Wylot"
            />
            <input className="powrot"
              type="text"
              value={this.state.powrot}
              onChange={this.handleChange}
              name="powrot"
              placeholder="Adres e-mail"
            />
            <input className="miejscowosc"
              type="text"
              value={this.state.miejscowosc}
              onChange={this.handleChange}
              name="miejscowosc"
              placeholder="Miejscowość"
            />
            <input className="liczba-osob"
              type="text"
              value={this.state.liczba_osob}
              onChange={this.handleChange}
              name="liczbaOsob"
              placeholder="Liczba osób"
            />
            <input className="budzet-minimalny"
              type="text"
              value={this.state.budzet_minimalny}
              onChange={this.handleChange}
              name="budzetMinimalny"
              placeholder="Budżet minimalny"
            />
            <input className="budzet-maksymalny"
              type="text"
              value={this.state.budzet_maksymalny}
              onChange={this.handleChange}
              name="budzetMaksymalny"
              placeholder="Budżet maksymalny"
            />
            <input className="submit-button"
              type="submit"
              value="Szukaj"
            />
          </form>
        </div>
      );
    }
    else if (this.props.type === "home-page") {
      return ( 
        <div>
          <form onSubmit={this.handleSubmit} className="input-form-home">
            <input
              className="wylot"
              type="text"
              value={this.state.wylot}
              onChange={this.handleChange}
              name="wylot"
              placeholder="Wylot"
            />
            <input className="powrot"
              type="text"
              value={this.state.powrot}
              onChange={this.handleChange}
              name="powrot"
              placeholder="Adres e-mail"
            />
            <input className="miejscowosc"
              type="text"
              value={this.state.miejscowosc}
              onChange={this.handleChange}
              name="miejscowosc"
              placeholder="Miejscowość"
            />
            <input className="liczba-osob"
              type="text"
              value={this.state.liczba_osob}
              onChange={this.handleChange}
              name="liczbaOsob"
              placeholder="Liczba osób"
            />
            <input className="budzet-minimalny"
              type="text"
              value={this.state.budzet_minimalny}
              onChange={this.handleChange}
              name="budzetMinimalny"
              placeholder="Budżet minimalny"
            />
            <input className="budzet-maksymalny"
              type="text"
              value={this.state.budzet_maksymalny}
              onChange={this.handleChange}
              name="budzetMaksymalny"
              placeholder="Budżet maksymalny"
            />
            <input className="submit-button"
              type="submit"
              value="Lecimy!"
            />
          </form>
        </div>
      );
    }
  }
}
 
export default InputForm;