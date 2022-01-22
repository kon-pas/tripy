import { Component } from "react/cjs/react.production.min";
import {Link, Navigate} from "react-router-dom";
import {RegisterUser} from "../scripts/Database";




class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_2: '',
      is_success: false
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getReg = async (e) =>{
    e.preventDefault();
    try {
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Origin', 'http://localhost:3000');
      let usrfullyName = this.state.username.split(" ");
      console.log(usrfullyName[0], usrfullyName[1])
      if(usrfullyName[0] === undefined || usrfullyName[1] === undefined){
        alert("Niepoprawna nazwa użytkownika")
      }
      await RegisterUser(this.state.email,usrfullyName[0],usrfullyName[1],this.state.password).then(response =>{
        console.log(response)
        if(response === 1){
          alert('Rejestracja przebiegła pomyślnie')
          this.setState({
            is_success: true,
          });
        }
        if(response === 0){
          alert('Niepowodzenie')
        }
      })

    } catch (error) {
      console.log(error);
    }

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert(`Username: ${this.state.username}\nEmail: ${this.state.email}\nPassword: ${this.state.password}`);
    event.preventDefault();
  }

  render() {
    if (this.state.is_success === true) {
      return <Navigate to="/"></Navigate>
    }else{
      return (
          <div className="login-page">
            <div className="panel">
              <span className="item-1">Zarejestruj się</span>
              <div className="item-2">
                <form onSubmit={this.getReg}>
                  <input className="username" type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Nazwa użytkownika"/>
                  <input className="email" type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Adres e-mail"/>
                  <input className="password" type="text" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Hasło"/>
                  <input className="password_2" type="text" value={this.state.password_2} onChange={this.handleChange} name="password_2" placeholder="Powtórz hasło"/>
                  <input className="register" type="submit" value="Stwórz konto" />
                </form>
              </div>
              <span className="item-3"> Masz konto?</span>
              <Link className="item-4" to={'/login'}><div className="item-4">Zaloguj się</div></Link>

              <Link className="close" to={'/'}> <img src={require('../assets/icons/close.png')} /> </Link>
            </div>
          </div>
      );
    }
  }
}

export default RegisterPage;