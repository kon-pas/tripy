import { Link } from "react-router-dom";

const Navbar = (props) => {
  return ( 
    <div className="navbar" style={{top: props.top}}>
      <div className="navbar-item"><span>tripy</span></div>
      <div className="navbar-item"><span>Lecimy!</span></div>
      <div className="navbar-item"><span>Wyszukaj</span></div>
      <div className="navbar-item"><span>Loty</span></div>
      <div className="navbar-item"><span>Hotele</span></div>
      <div className="navbar-item"><span>Atrakcje</span></div>
      <Link to={'/login'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Login</span></div></Link>
    </div>
   );
}

Navbar.defaultProps = {top: 0};
 
export default Navbar;