import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

//Icon imports
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs';
import {CgMenuLeft, CgMenuRight} from 'react-icons/cg';

// Internal Imports
import Styles from './NavBar.module.css'
import { Discover, HelpCenter, Notifications, Profile, SideBar } from './index';
import { Button } from '../componentindex.js';
import images from '../../img';


const NavBar = () => {
  //Use state components
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e)=> {
    const buttonText = e.target.innerText;
    if(buttonText == 'Discover'){
      setDiscover(true);
      setHelp(false);
      setNotifications(false);
      setProfile(false);
    } else if(buttonText == 'Help Center') {
      setDiscover(false);
      setHelp(true);
      setNotifications(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotifications(false);
      setProfile(false);
    }
  };

  const openNotifications = ()=> {
    if(!notifications){
      setNotifications(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotifications(false);
    }
  };

  const openProfile = ()=> {
    if(!profile){
      setProfile(true);
      setHelp(false);
      setNotifications(false);
      setDiscover(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = ()=> {
    if(!openSideMenu){
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
    console.log(openSideMenu);
  };

  return (
    <div className={Styles.navbar}>
      <div className={Styles.navbar_container}>
        <div className={Styles.navbar_container_left}>
          <div className={Styles.logo}>
            <Image src={images.logo} alt='NFT Marketplace' width={100} height={100} />
          </div>
          <div className={Styles.navbar_container_left_box_input}>
            <div className={Styles.navbar_container_left_box_input_box}>
                <input type="text" placeholder='Search for an NFT'/>
                <BsSearch onClick={()=> {} } className={Styles.searchIcon}/>
            </div>
          </div>
        </div>
        {/* Left-Section Ends! */}

        <div className={Styles.navbar_container_right}>
          <div className={Styles.navbar_container_right_discover}>

            {/* Discover Menu Component */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Styles.navbar_container_right_discover_box}>
                <Discover/>
              </div>
            )}
          </div>

          {/* HelpCenter Menu Component */} 
          <div className={Styles.navbar_container_right_help}>
            <p onClick={(e)=> openMenu(e)}>Help Center</p>
            {help && (
              <div className={Styles.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notification Menu Component */}
          <div className={Styles.navbar_container_right_notifications}>
            <MdNotifications className={Styles.notifications} onClick={()=> openNotifications() } />
            { notifications && <Notifications /> }  
          </div>

          {/* Create Button Section */}
          <div className={Styles.navbar_container_right_button}>
            <Button btnName='Create' handleClick={()=>{}}/>
          </div>

          {/* User Profile */}
          <div className={Styles.navbar_container_right_profile_box}>
            <div className={Styles.navbar_container_right_profile}>
              <Image src={images.user1} alt='Profile' width={40} height={40} onClick={()=> openProfile() } className={Styles.navbar_container_right_profile} />
              {profile && <Profile />}
            </div>
          </div>

          {/* Menu Button (Mobile-only) */}
          <div className={Styles.navbar_container_right_menu_button}>
            <CgMenuRight className={Styles.menuIcon} onClick={()=> openSideBar()} />
          </div>
        </div>
      </div>

      {/* SideBar Component (Mobile-only) */}
      {openSideMenu && (
        <div className={Styles.sidebar}>
          <SideBar setOpenSideMenu = {setOpenSideMenu} />
        </div>
      )}
    </div>
  )
};

export default NavBar