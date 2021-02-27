import React, { useState } from "react";
import "./Navbar.css";
import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <Menu />
        <Link to='/'>
          <img
            className='navbar__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png'
            alt=''
          />
        </Link>
      </div>
      <div className='navbar__middle'>
        <input
          type='text'
          value={inputSearch}
          className='navbar__input'
          placeholder='Search on YouTube'
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <Search className='navbar__inputIcon' />
        </Link>
      </div>
      <div className='navbar__right'>
        <VideoCall className='navbar__rightIcon' />
        <Apps className='navbar__rightIcon' />
        <Notifications className='navbar__rightIcon' />
        <Avatar src='' alt='sjoerd' />
      </div>
    </div>
  );
}
