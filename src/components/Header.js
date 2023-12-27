import logo from '../../assets/images/logo-main.png';
import cart from '../../assets/images/cart.png';
import loggedIn from '../../assets/images/loggedin.png';
import loggedOut from '../../assets/images/loggedout.png';
import home from '../../assets/images/home.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';


export const ImgComponent = ({ item, itemname }) => {
  return (
    <Link to={"/"}> <img className="w-24" alt={itemname} src={item} /> </Link>
  )
}

export const Title = () => {
  return (
    <ImgComponent item={logo} itemname={"logo"} />
  )
};

export const NavComponent = () => {

  const onlineStatus = useOnlineStatus();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='flex justify-between bg-pink-300 shadow-xl m-2 sm:bg-yellow-300 lg:bg-green-300'>
      <div>
        <Title />
      </div>
      <div className="flex items-center">
        <ul className='flex p-5'>
          <li className='px-4'>Online Status{onlineStatus ? "🟢" : "🔴"}</li>
          <li className='px-4'><Link to={"/grocery"}>Grocery</Link></li>
          <li className='px-4'><Link to={"/"} >Home </Link> </li>
          <li className='px-4'><Link to={"/about"}>About Us</Link></li>
          <li className='px-4'><Link to={"/contact"}>Contact Us</Link></li>
          <li className='px-4'> Cart </li>
          <li className='w-12 px-4'> <img src={isLoggedIn ? loggedIn : loggedOut} className={isLoggedIn ? "loggedIn" : "loggedOut"}
            alt={isLoggedIn ? "loggedIn" : "loggedOut"}
            onClick={() => { setIsLoggedIn(!isLoggedIn); }} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export const Login = () => {
  return (
    <div>
      <button className="login-btn">Login</button>
    </div>
  )
}
export const Header = () => {

  return (
    <div className="header">
      {/* <Title /> */}
      <NavComponent />
    </div>
  );
};

export default Header;