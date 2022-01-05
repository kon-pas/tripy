import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

class LoginPage extends Component {
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
            <form onSubmit={this.handleSubmit}>
              <input className="username" type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Nazwa użytkownika"/>
              <input className="email" type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Adres e-mail"/>
              <input className="password" type="text" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Hasło"/>
              <input className="password_2" type="text" value={this.state.password_2} onChange={this.handleChange} name="password_2" placeholder="Powtórz hasło"/>
              <input type="submit" value="Stwórz konto" />
            </form>
          </div>
          <span className="item-3">Masz konto?</span>
          <Link className="item-4" to={'/login'}><div className="item-4">Zaloguj się</div></Link>
          
          <Link className="close" to={'/'}> <img src={require('../assets/icons/close.png')} /> </Link>
        </div>
      </div>
     );
  }
}
 
export default LoginPage;