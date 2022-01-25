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

import DateFnsUtils from "@date-io/date-fns";
import { pl } from "date-fns/locale";

import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';

const Input = styled(MuiInput)`
  width: 42px;
`;


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
    this.setSearch = this.setSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBudzetChange = this.handleBudzetChange.bind(this);
    this.handleLiczbaOsobChange = this.handleLiczbaOsobChange.bind(this);
    this.handleWylotChange = this.handleWylotChange.bind(this);
    this.handlePowrotChange = this.handlePowrotChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleBudzetChange0 = this.handleBudzetChange0.bind(this);
    this.handleBudzetChange1 = this.handleBudzetChange1.bind(this);
  }

  setSearch() {
    search.setWylot(this.state.wylot);
    search.setPowrot(this.state.powrot);
    search.setMiejscowosc(this.state.miejscowosc);
    search.setLiczbaOsob(this.state.liczbaOsob);
    search.setBudzetMinimalny(this.state.budzet[0]);
    search.setBudzetMaksymalny(this.state.budzet[1]);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.setSearch()
  }

  handleLiczbaOsobChange(event) {
    this.setState({
      liczbaOsob: event.target.value
    })
    this.setSearch()
  }

  handleBudzetChange(event) {
    this.setState({
      budzet: event.target.value
    })
    this.setSearch()
  }
  handleBudzetChange0(event) {
    this.setState({
      budzet: [event.target.value, this.state.budzet[1]]
    })
    this.setSearch()
  }
  handleBudzetChange1(event) {
    this.setState({
      budzet: [this.state.budzet[0], event.target.value]
    })
    this.setSearch()
  }

  handleWylotChange(event) {
    this.setState({
      wylot: event
    })
    this.setSearch()
  }
  
  handlePowrotChange(event) {
    this.setState({
      powrot: event
    })
    this.setSearch()
  }

  handleSubmit(event) {
    this.setState({
      submitSuccess: true,
      wylot: search.getWylot()
    })
    this.setSearch()
    event.preventDefault();
  }

  handleBlur() {
    if (this.state.liczbaOsob < 0) {
      this.setState({
        liczbaOsob: 0
      });
    } else if (this.state.liczbaOsob > 100) {
      this.setState({
        liczbaOsob: 100
      });
    }
  };

  handleSearch(event) {
    // setSearch().then( window.location.reload() );
    event.preventDefault();
  }

  render() {
    if (this.state.submitSuccess) {
      return <Navigate to="/planning" />
    }
    if (this.props.type === "planning-page") {
      return ( 
        <div className="input-form-planning">
          <div 
          // onSubmit={this.handleSubmit} 
          className="input-form">
            <div className="input-container">
              {/* WYLOT */}
              <div className="item-1">
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={pl}>
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
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={pl}>
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
                  id="outlined-basic" label="Miejscowość" variant="outlined" 
                />
              </div>
              {/* LICZBA OSÓB */}
              <div className="item-4">
                <Typography id="input-slider" gutterBottom>Liczba osób: 
                  <Input
                    value={this.state.liczbaOsob}
                    size="small"
                    onChange={this.handleLiczbaOsobChange}
                    onBlur={this.handleBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 10,
                     //  type: 'number',
                     //  'aria-labelledby': 'input-slider',
                    }}
                  />
                </Typography>
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
                <Typography id="input-slider" gutterBottom>Budżet: 
                  <Input
                    value={this.state.budzet[0]}
                    size="small"
                    onChange={this.handleBudzetChange0}
                    onBlur={this.handleBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 10,
                     //  type: 'number',
                     //  'aria-labelledby': 'input-slider',
                    }}
                  /> 
                  - 
                  <Input
                    value={this.state.budzet[1]}
                    size="small"
                    onChange={this.handleBudzetChange1}
                    onBlur={this.handleBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 10,
                     //  type: 'number',
                     //  'aria-labelledby': 'input-slider',
                    }}
                  /> PLN
                </Typography>
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
              {/* <Button className="submit" variant="contained" onClick={this.handleSearch}>Szukaj</Button> */}
            </div>
            <button className="submit-button" onClick={this.handleSubmit}>Szukam!</button> 
          </div>
        </div>
      );
      // return ( 
      //   <div>
      //     <form onSubmit={this.handleSearch} className="input-form-planning">
      //       <input
      //         className="wylot"
      //         type="text"
      //         value={this.state.wylot}
      //         onChange={this.handleChange}
      //         name="wylot"
      //         placeholder="Wylot"
      //       />
      //       <input className="powrot"
      //         type="text"
      //         value={this.state.powrot}
      //         onChange={this.handleChange}
      //         name="powrot"
      //         placeholder="Powrót"
      //       />
      //       <input className="miejscowosc"
      //         type="text"
      //         value={this.state.miejscowosc}
      //         onChange={this.handleChange}
      //         name="miejscowosc"
      //         placeholder="Miejscowość"
      //       />
      //       <input className="liczba-osob"
      //         type="text"
      //         value={this.state.liczba_osob}
      //         onChange={this.handleChange}
      //         name="liczbaOsob"
      //         placeholder="Liczba osób"
      //       />
      //       <input className="budzet-minimalny"
      //         type="text"
      //         value={this.state.budzet_minimalny}
      //         onChange={this.handleChange}
      //         name="budzetMinimalny"
      //         placeholder="Budżet minimalny"
      //       />
      //       <input className="budzet-maksymalny"
      //         type="text"
      //         value={this.state.budzet_maksymalny}
      //         onChange={this.handleChange}
      //         name="budzetMaksymalny"
      //         placeholder="Budżet maksymalny"
      //       />
      //       <input className="submit-button"
      //         type="submit"
      //         value="Szukaj"
      //       />
      //     </form>
      //   </div>
      // );
    }
    else if (this.props.type === "home-page") {
      return ( 
        <div className="input-form-home">
          <div 
          // onSubmit={this.handleSubmit} 
          className="input-form">
            <div className="input-container">
              {/* WYLOT */}
              <div className="item-1">
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={pl}>
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
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={pl}>
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
                  id="outlined-basic" label="Miejscowość" variant="outlined" 
                />
              </div>
              {/* LICZBA OSÓB */}
              <div className="item-4">
                <Typography id="input-slider" gutterBottom>Liczba osób: 
                  <Input
                    value={this.state.liczbaOsob}
                    size="small"
                    onChange={this.handleLiczbaOsobChange}
                    onBlur={this.handleBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 10,
                     //  type: 'number',
                     //  'aria-labelledby': 'input-slider',
                    }}
                  />
                </Typography>
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
                <Typography id="input-slider" gutterBottom>Budżet: 
                  <Input
                    value={this.state.budzet[0]}
                    size="small"
                    onChange={this.handleBudzetChange0}
                    onBlur={this.handleBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 10,
                     //  type: 'number',
                     //  'aria-labelledby': 'input-slider',
                    }}
                  /> 
                  - 
                  <Input
                    value={this.state.budzet[1]}
                    size="small"
                    onChange={this.handleBudzetChange1}
                    onBlur={this.handleBlur}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 10,
                     //  type: 'number',
                     //  'aria-labelledby': 'input-slider',
                    }}
                  /> PLN
                </Typography>
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
            <button className="submit-button" onClick={this.handleSubmit}>Szukam!</button> 
          </div>
        </div>
      );
    }
  }
}
 
export default InputForm;