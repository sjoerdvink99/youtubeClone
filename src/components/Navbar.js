import React from "react";
import "./Navbar.css";
import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <Menu className='navbar__leftIcon' />
        <img
          alt=''
          className='navbar__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png'
        />
      </div>
      <div className='navbar__middle'>
        <input
          className='navbar__input'
          type='text'
          placeholder='Search on YouTube'
        />
        <Search className='navbar__inputIcon' />
      </div>
      <div className='navbar__right'>
        <IconButton>
          <VideoCall className='navbar__rightIcon' />
        </IconButton>
        <IconButton>
          <Apps className='navbar__rightIcon' />
        </IconButton>
        <IconButton>
          <Notifications className='navbar__rightIcon' />
        </IconButton>
        <Avatar src='' />
      </div>
    </div>
  );
}
