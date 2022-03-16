import React, { useState } from "react";
import { useSelector} from 'react-redux'
import axios from 'axios'
import "./Header.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

const Header = () => {
  const auth = useSelector(state => state.auth)

  const {user, isLogged} = auth

  const handleLogout = async () => {
    try {
        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/";
    } catch (err) {
        window.location.href = "/";
    }
}

  const userLink = () => {
    return <li className='drop-nav'>
                <Link to="/" className='avatar'>
                <img src={user.avatar} alt=""/> {user.name}<i className="fa fa-angle-down"></i>
                </Link>

                <ul className='dropdown'>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/"onClick={handleLogout} >Logout</Link></li>
                </ul>
            </li>
  }
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          {/* <h2>
            <span>E</span>-
            <span>T</span>icketing
          </h2> */}

      <h2 className="hi">  Heritage Of India</h2>  
      {/* <span className = "hi" style={{color:"#f37e11e5"}} >Heritage</span>
      <span className = "hi" style={{color:"#f7f8f7"}}>Of</span>
      <span className = "hi" style={{color:"#07680f"}}>India</span>
       */}
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Monuments</Link>
            </li>
            <li>
              <Link to="/service">Museums</Link>
            </li>
            {
                    isLogged
                    ? userLink()
                    :<li><Link to='/login'>Login</Link></li>
            }
            
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};


export default Header;
