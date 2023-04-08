import React, { useState } from 'react'
import logo  from '../../assets/dev-to.png'
import { FiSearch } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";

const Navbar = ({ openMenu }) => {
  const [showMenu, setshowMenu] = useState(false);

  const toggle = () => {
    setshowMenu(!showMenu);
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <i
          className="hamburgerMenu"
          onClick={() => {
            openMenu();
          }}
        >
          <BiMenu />
        </i>

        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="searchBox hidden-items">
          <form action="">
            <input type="text" name="" id="" placeholder="Search..." />
            <i className="search_icon">
              <FiSearch />
            </i>
          </form>
        </div>

        <div className="right_col">
          <button className="btn hidden-items">Create Post</button>
          <i className="hiddenSearchIcon">
            <FiSearch />
          </i>
          <i>
            <RiNotification3Line />
          </i>
          <div className="profile" onClick={toggle}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQWM_6IOnrCujlkRF6-xHP9d8AZJcIiiefYQIfsGv6vSpY5rdSybf-n_ZH4AZoutO6HA&usqp=CAU"
              alt="profile picture"
            />
          </div>
        </div>
      </div>

      <div className={showMenu ? "showdropDownMenu" : "hidedropDownMenu"}>
        <ul>
          <li>
            <a href="/profile" className="profile" onClick={toggle}>
              <div className="userName">sujit kumar</div>
              <small className="userHandle">@userhandle</small>
            </a>
          </li>

          <li>
            <a href="/dashboard" onClick={toggle}>
              dashboard
            </a>
          </li>

          <li>
            <a href="/create-post" onClick={toggle}>
              create post
            </a>
          </li>

          <li>
            <a href="/readin-list" onClick={toggle}>
              reading list
            </a>
          </li>

          <li>
            <a href="/settings" onClick={toggle}>
              settings
            </a>
          </li>

          <li>
            <a href="/sign-out" onClick={toggle}>
              sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar