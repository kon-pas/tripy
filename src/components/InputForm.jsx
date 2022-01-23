import { Component } from "react/cjs/react.production.min";
import { Navigate } from "react-router-dom";
import { searchSettings as search} from "../scripts/search";
import Slider from "@mui/material/Slider";
import Typography from '@mui/material/Typography';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      wylot:  search.getWylot(),
      powrot:  search.getPowrot(),
      miejscowosc:  search.getMiejscowosc(),
      liczbaOsob: search.getLiczbaOsob(),
      budzet:  [search.getBudzetMinimalny(), search.getBudzetMaksymalny()],
      submitSuccess: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBudzetChange = this.handleBudzetChange.bind(this);
    this.handleLiczbaOsobChange = this.handleLiczbaOsobChange.bind(this);
    this.handleWylotChange = this.handleWylotChange.bind(this);
    this.handlePowrotChange = this.handlePowrotChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleLiczbaOsobChange(event) {
    this.setState({
      liczbaOsob: event.target.value
    })
  }

  handleBudzetChange(event) {
    this.setState({
      budzet: event.target.value
    })
  }

  handleWylotChange(event) {
    this.setState({
      wylot: event
    })
  }
  
  handlePowrotChange(event) {
    this.setState({
      powrot: event
    })
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
    search.setBudzetMinimalny(this.state.budzet[0]);
    search.setBudzetMaksymalny(this.state.budzet[1]);
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
              {/* WYLOT */}
              <div className="item-1">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    // views={['day', 'month', 'year']}
                    label="Wylot"
                    minDate={new Date('2022-01-01')}
                    maxDate={new Date('2024-01-01')}
                    value={this.state.wylot}
                    onChange={this.handleWylotChange}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                  />
                </LocalizationProvider>
              </div>
              {/* POWRÓT */}
              <div className="item-2">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    // views={['day', 'month', 'year']}
                    label="Powrót"
                    minDate={new Date('2022-01-01')}
                    maxDate={new Date('2024-01-01')}
                    value={this.state.powrot}
                    onChange={this.handlePowrotChange}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                  />
                </LocalizationProvider>
              </div>
              {/* MIEJSCOWOŚĆ */}
              <div className="item-3">
                <TextField className="miejscowosc"
                  type="text"
                  value={this.state.miejscowosc}
                  onChange={this.handleChange}
                  name="miejscowosc"
                  label="Miejscowość"
                  id="filled-basic" variant="filled"
                />
              </div>
              {/* LICZBA OSÓB */}
              <div className="item-4">
                <Typography id="input-slider" gutterBottom>Liczba osób: {this.state.liczbaOsob}</Typography>
                <Slider
                  value={this.state.liczbaOsob}
                  onChange={this.handleLiczbaOsobChange}
                  defaultValue={2}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={10}
                />
              </div>
              {/* BUDŻET */}
              <div className="item-5">
                <Typography id="input-slider" gutterBottom>Budżet: {this.state.budzet[0]} - {this.state.budzet[1]}</Typography>
                <Slider
                  value={this.state.budzet}
                  onChange={this.handleBudzetChange}
                  valueLabelDisplay="auto"
                  defaultValue={[0, 20000]}
                  min={0}
                  max={20000}
                  step={100}
                />
              </div>
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