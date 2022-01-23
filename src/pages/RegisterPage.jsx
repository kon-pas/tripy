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
      let isError = false;
      let usrfullyName = this.state.username.split(" ");
      if (this.state.username === ""){
        document.getElementById("usernameError").innerHTML = "Puste pole, uzupełnij dane";
        isError = true;
      } else if(usrfullyName[0] === undefined || usrfullyName[1] === undefined){
        document.getElementById("usernameError").innerHTML = "Wpisz swoje imię i nazwisko";
        isError = true;
      } else if(this.state.username.match(/\d/)){
        document.getElementById("usernameError").innerHTML = "Imię i nazwisko nie mogą zawierać liczb";
        isError = true;
      } else {
        document.getElementById("usernameError").innerHTML = "";
      }
      
      if (this.state.email === ""){
        document.getElementById("emailError").innerHTML = "Puste pole, uzupełnij dane";
        isError = true;
      } else if(! this.state.email.match(/.+@.+/)){
        document.getElementById("emailError").innerHTML = "Niepoprawny e-mail";
        isError = true;
      } else {
        document.getElementById("emailError").innerHTML = "";
      } 
      
      if(this.state.password != this.state.password_2){
        document.getElementById("passwordError").innerHTML = "Hasla musza byc identyczne";
        isError = true;
      }
      if(isError) return;

      await RegisterUser(this.state.email,usrfullyName[0],usrfullyName[1],this.state.password).then(response =>{
        console.log(response)
        if(response === 1){
          alert('Rejestracja przebiegła pomyślnie')
          this.setState({
            is_success: true,
          });
        }
        if(response === 0){
          alert('Rejestracja się niepowiodła')
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
      
      // I haslo zeby bylo w gwiazdkach
      return (
          <div className="login-page">
            <div className="panel">
              <span className="item-1">Zarejestruj się</span>
              <div className="item-2">
                <form onSubmit={this.getReg}>
                  <p></p>
                  <span id="usernameError" className="error"></span>
                  <p></p>
                  <input className="username" type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Imie i Nazwisko"/>
                  <p></p>
                  <span id="emailError" className="error"></span>
                  <p></p>
                  <input className="email" type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Adres e-mail"/>
                  <p></p>
                  <span id="passwordError" className="error"></span>
                  <p></p>
                  <input className="password" type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Hasło"/>
                  <input className="password_2" type="password" value={this.state.password_2} onChange={this.handleChange} name="password_2" placeholder="Powtórz hasło"/>
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