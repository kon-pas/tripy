import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

import * as states from '../scripts/states';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: ''
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
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    event.preventDefault();
  }

  render() { 
    return ( 
      <div className="login-page">
        <div className="panel">
          <span className="item-1">Zaloguj się</span>
          <div className="item-2">
            <form onSubmit={this.handleSubmit}>
              <input className="username" type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Nazwa użytkownika"/>
              <input className="password" type="text" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Hasło"/>
              <input type="submit" value="Zaloguj się" />
            </form>
          </div>
          <span className="item-3">Nie masz konta?</span>
          <Link className="item-4" to={'/register'}><div className="item-4">Zarejestruj sie</div></Link>

          <Link className="close" to={'/'}> <img src={require('../assets/icons/close.png')} /> </Link>
        </div>
      </div>
     );
  }
}
 
export default LoginPage;