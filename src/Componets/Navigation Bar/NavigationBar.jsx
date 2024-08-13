import React from "react";
import "./navigationbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImage from "../../assets/profile_img.png";
import dropDown from "../../assets/caret_icon.svg";


function NavigationBar() {

  function handelfun() {
    const signout = document.querySelector('.Sign-out');
    signout.style.display = 'block';
  }

  function handleclick() {
    const signout = document.querySelector('.Sign-out');
    signout.style.display = 'none';
  }

  return (
    <>
      <div className="container">
        <div className="Navigation">
          <ul>
            <li>
              <img src={logo} alt="..." className="logo-image" />
            </li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My List</li>
            <li>Browse By Languages</li>
          </ul>
        </div>
        <div className="user">
          <ul>
            <li>
              <img src={searchIcon} alt="...." />
            </li>
            <li>Children</li>
            <li>
              <img src={bellIcon} alt="...." />
            </li>
            <li className="DropDown" onMouseOver={handelfun}>
              <img src={profileImage} alt="...." />
              <img src={dropDown} alt="" />
            </li>
            <div className="Sign-out">
              <p>Sign out of Netflix <span onClick={handleclick}>x</span></p>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
