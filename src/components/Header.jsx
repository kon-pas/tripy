import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
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
      <Navbar top={100} />
    </div>
   );
}
 
export default Header;