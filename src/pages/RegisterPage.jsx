import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import {User} from "../scripts/User";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_2: ''
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

      const response = await fetch(`http://51.83.185.162:4000/register`, {
        method: 'POST',
        body:JSON.stringify({ email: this.state.username,firstName:'',lastName:'', password:this.state.password }),
        headers: headers
      });

      const data = await response.json();
      if(data.data === undefined){
        alert('Nie poprawne dane')
      }
      this.setState({
        success: data.data,
      });
      let user = new User(data.data.id,data.data.attributes.email,'default',data.data.attributes.name,data.data.attributes.surname)

      //Save to localStorage
      localStorage.setItem('user', JSON.stringify(user));


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

export default RegisterPage;