import { Component } from "react/cjs/react.production.min";
import { Navigate } from "react-router-dom";
import { searchSettings as search} from "../scripts/search";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      wylot:  search.getWylot(),
      powrot:  search.getPowrot(),
      miejscowosc:  search.getMiejscowosc(),
      liczbaOsob: search.getLiczbaOsob(),
      budzetMinimalny:  search.getBudzetMinimalny(),
      budzetMaksymalny:  search.getBudzetMaksymalny(),
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
      wylot: search.getWylot()
    });
    event.preventDefault();
  }

  handleSearch(event) {
    search.setWylot(this.state.wylot);
    search.setPowrot(this.state.powrot);
    search.setMiejscowosc(this.state.miejscowosc);
    search.setLiczbaOsob(this.state.liczbaOsob);
    search.setBudzetMinimalny(this.state.budzetMinimalny);
    search.setBudzetMaksymalny(this.state.budzetMaksymalny);
    event.preventDefault();
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
              placeholder="Powrót"
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
            <div className="input-container">
              <input
                className="wylot"
                type="text"
                value={this.state.wylot}
                onChange={this.handleChange}
                name="wylot"
                placeholder="Wylot (W.I.P.)"
              />
              <input className="powrot"
                type="text"
                value={this.state.powrot}
                onChange={this.handleChange}
                name="powrot"
                placeholder="Powrót (W.I.P.)"
              />
              <input className="miejscowosc"
                type="text"
                value={this.state.miejscowosc}
                onChange={this.handleChange}
                name="miejscowosc"
                placeholder="Miejscowość (W.I.P.)"
              />
              <input className="liczba-osob"
                type="text"
                value={this.state.liczba_osob}
                onChange={this.handleChange}
                name="liczbaOsob"
                placeholder="Liczba osób (W.I.P.)"
              />
              <input className="budzet-minimalny (W.I.P.)"
                type="text"
                value={this.state.budzet_minimalny}
                onChange={this.handleChange}
                name="budzetMinimalny"
                placeholder="Budżet minimalny (W.I.P.)"
              />
              <input className="budzet-maksymalny"
                type="text"
                value={this.state.budzet_maksymalny}
                onChange={this.handleChange}
                name="budzetMaksymalny"
                placeholder="Budżet maksymalny (W.I.P.)"
              />
            </div>
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