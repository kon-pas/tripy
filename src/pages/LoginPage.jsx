import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {LoginUser} from "../scripts/Database";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      success: [],
      isLogged: false,
      isLogged2: false
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
      if(this.state.username === '' || this.state.password === ''){
        alert('Puste pole, uzupełnij dane aby się zalogować')
        return;
      }
      LoginUser(this.state.username,this.state.password).then(response =>{
        if(response !== undefined){
          alert('Udało się!')
          this.setState({
            isLogged: true,
          });
        }
        else{
          alert('Nieprawidłowe dane')
        }
      })
      //let user = new User(data.data.id,data.data.attributes.email,'default',data.data.attributes.name,data.data.attributes.surname)
      //Save to localStorage
      //localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.isLogged === true && this.state.isLogged2 === true) {
      return <Navigate to="/"></Navigate>
    }
    else return (
        <div className="login-page">
          <div className="panel">
            <span className="item-1">Zaloguj się</span>
            <div className="item-2">
              <form onSubmit={this.getGIY}>
                <input className="username" type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="E-mail (edward@gmail.com)"/>
                <input className="password" type="text" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Hasło (12345678)"/>
                <input className="login" type="submit" value="Zaloguj się" onClick={ () => {
                  this.setState({
                    isLogged2: true,
                  });
                }}/>
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