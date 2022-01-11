import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import * as section from "../scripts/section.js";

const Header = (props) => {
  return ( 
    <div className="header">
      <Link to={'/'}>
        <div className="logo">
          tripy
        </div>
      </Link>
      <Link to={section.handleAccLogin()}>
        <div className="login">
          <img src={require('../assets/icons/user.png')}/>
        </div>
      </Link>
      <Navbar top={props.top} closePath="/"/>
    </div>
   );
}

Header.defaultProps = {top: 0};
 
export default Header;