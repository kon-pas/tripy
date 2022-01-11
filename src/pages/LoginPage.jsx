import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import {User} from "../scripts/User";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      success: []
    }
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  getGIY = async (e) =>{
    e.preventDefault();
    try {
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Origin', 'http://localhost:3000');
      
      const response = await fetch(`http://51.83.185.162:4000/auth/login`, {
        method: 'POST',
        body:JSON.stringify({ email: this.state.username,password:this.state.password }),
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

  render() {
    return (
        <div className="login-page">
          <div className="panel">
            <span className="item-1">Zaloguj się</span>
            <div className="item-2">
              <form onSubmit={this.getGIY}>
                <input className="username" type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Nazwa użytkownika"/>
                <input className="password" type="text" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Hasło"/>
                <input className="login" type="submit" value="Zaloguj się" />
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