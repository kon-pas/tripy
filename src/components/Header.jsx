import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import * as section from "../scripts/section.js";
import * as Database from "../scripts/Database.js";

const Header = () => {
  const isLogged = () => {
    if(Database.isLoggedIn()) {
      return <Link to={'/user'} style={{ textDecoration: 'none' }}><div className="konto"><span>Moje konto</span></div></Link>
    } else {
      return <div>
        <Link to={'/login'} style={{ textDecoration: 'none' }}><div className="login"><span>Zaloguj się</span></div></Link>
        <Link to={'/register'} style={{ textDecoration: 'none' }}><div className="register"><span>Stwórz konto</span></div></Link>
      </div>
    }
  }

  return (
    <div className="header-wrapper">
      <div className="header">

        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <img className="logo" src={require('../assets/icons/tripy-logo.png')}/>
        </Link>

        <Link to={'/planning'} style={{ textDecoration: 'none' }}>
          <div className="lecimy">
            <div className="lecimy-icon">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16" enableBackground="new 0 0 16 16">
              <path d="M0,9l4,1.5L6,16l2.861-3.82L14,14l2-14L0,9z M7.169,11.44l-0.916,2.485l-1.086-3.118l8.402-7.631L7.169,11.44z"/>
              </svg>
            </div>
            <div className="lecimy-text"><span>Lecimy!</span></div>
          </div>
        </Link>
        
        <div className="navbar">
          <Link to={'/'} style={{ textDecoration: 'none' }}><div className="navbar-item loty"><span>Loty</span></div></Link>
          <Link to={'/'} style={{ textDecoration: 'none' }}><div className="navbar-item hotele"><span>Hotele</span></div></Link>
          <Link to={'/'} style={{ textDecoration: 'none' }}><div className="navbar-item atrakcje"><span>Atrakcje</span></div></Link>
        </div>
        
        {isLogged()}
        {/* <Link to={section.handleAccLogin()}>
          <div className="login">
            <img src={require('../assets/icons/user.png')}/>
          </div>
        </Link> */}
      </div>
    </div>
  );
}
 
export default Header;