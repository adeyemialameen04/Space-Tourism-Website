import './navbar.css';
import { NavLink } from "react-router-dom";
import { links } from "../data/links";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { AiFillAmazonCircle } from 'react-icons/ai';
import Logo from '/static/images/shared/logo.svg';
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav id="nav">
      <div className="container nav__container flex">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div
          className="nav__btns"
          aria-controls="nav__links"
          aria-expanded="false"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          <button>
            {
              isNavShowing ? <FaTimes /> : <GiHamburgerMenu />
            }
          </button>
        </div>

        <ul id="nav__links" className={`nav__links flex ${isNavShowing && 'show__nav'}`}>
          {
            links.map(({ name, path, number }, index) => {
              return (
                <li key={index}>
                  <p
                    // to={path}
                    className={({ isActive }) => isActive ? 'active-nav' : ''}
                  >
                    <span aria-hidden="true">{number}</span> {name}
                  </p>
                </li>
              );
            })
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;