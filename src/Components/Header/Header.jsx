import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";
import logo from "../../netflixLogo.png";
import {ImSearch} from "react-icons/im";


const Header = () => {

  console.log(logo)
  return (
    <>
    <nav className="header">
      <img src={logo} alt="netflixLogo" />

      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>

       <ImSearch />
    </nav>
    </>
  )
}

export default Header;
