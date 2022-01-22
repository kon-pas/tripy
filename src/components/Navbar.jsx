import { Link } from "react-router-dom";
import * as section from "../scripts/section.js";
import * as Database from "../scripts/Database.js";

const Navbar = (props) => {
  const block = () => {
    if(props.top === 0) return null;
    return <div style={{height: props.top}} />;
  }

  const isLogged = () => {
    if(Database.isLoggedIn()) return <Link to={'/user'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Konto</span></div></Link>;
    else return <Link to={'/login'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Zaloguj się</span></div></Link>;
  }

  return (
    <div>
      {block()}
      <div className="navbar">
        <Link to={'/'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Strona główna</span></div></Link>
        <Link to={'/planning'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Lecimy!</span></div></Link>
        {/* <Link to={'/search'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Wyszukaj</span></div></Link> */}
        {/* <div className="navbar-item"><span>Loty</span></div>
        <div className="navbar-item"><span>Hotele</span></div>
        <div className="navbar-item"><span>Atrakcje</span></div> */}
        <Link to={'/'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Przeglądaj</span></div></Link>
        {isLogged()}
        {/* <Link to={'/login'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Zaloguj się</span></div></Link> */}
        {/* <Link to={'/user'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Konto</span></div></Link> */}
      </div>
    </div>
   );
}

Navbar.defaultProps = {top: 0, closePath: '/'};
 
export default Navbar;