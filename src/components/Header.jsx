import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return ( 
    <div className="header">
      <Link to={'/'}>
        <div className="logo">
          tripy
        </div>
      </Link>
      <Link to={'/login'}>
        <div className="login">
          <img src={require('../assets/icons/user.png')}/>
        </div>
      </Link>
      <Navbar top={props.top} />
    </div>
   );
}

Header.defaultProps = {top: 100};
 
export default Header;