import { Link } from "react-router-dom";
import * as section from "../scripts/section.js";

const Navbar = (props) => {
  const block = () => {
    if(props.top === 0) return null;
    return <div style={{height: props.top}} />;
  }

  return (
    <div>
      {block()}
      <div className="navbar">
        <Link to={'/'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>tripy</span></div></Link>
        <Link to={'/planning'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Lecimy!</span></div></Link>
        {/* <Link to={'/search'} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Wyszukaj</span></div></Link> */}
        {/* <div className="navbar-item"><span>Loty</span></div>
        <div className="navbar-item"><span>Hotele</span></div>
        <div className="navbar-item"><span>Atrakcje</span></div> */}
        <Link to={section.handleAccLogin()} style={{ textDecoration: 'none' }}><div className="navbar-item"><span>Konto</span></div></Link>
      </div>
    </div>
   );
}

Navbar.defaultProps = {top: 0, closePath: '/'};
 
export default Navbar;