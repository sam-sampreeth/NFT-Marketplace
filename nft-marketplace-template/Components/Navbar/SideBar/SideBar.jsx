import React, {use, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {GrClose} from 'react-icons/gr';
import {TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti';

//Internal Imports
import Styles from './SideBar.module.css';
import images from '../../../img';
import Button from '../../Button/Button';

const SideBar = ({setOpenSideMenu}) => {
  // Use States
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  
  // Discover Navigation Menu
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Settings",
      link: "account-settings"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    }
  ];

  //HelpCenter Menu
  const helpcenter = [
    {
      name: "About",
      link: "about"
    },
    {
      name: "Contact Us",
      link: "contact-us"
    },
    {
      name: "Sign Up",
      link: "sign-up"
    },
    {
      name: "Sign In",
      link: "sign-in"
    },
    {
      name: "Subscription",
      link: "subscription"
    }
  ];

  const openDiscoverMenu = () =>{
    if(!openDiscover){
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () =>{
    if(!openHelp){
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSidebar = () => {
    setOpenSideMenu(false);
  };

  return(
    <div className={Styles.sidebar}>
      <GrClose className={Styles.sidebar_closebtn} onClick={()=> closeSidebar()}/>
      <div className={Styles.sidebar_box}>
        <Image src={images.logo} alt='NFT Logo' height={150} width={150} />
        <p>Discovering most useful articles about A to Z on NFTs!</p>
        <div className={Styles.sidebar_social}>
          <a href="#">
            <TiSocialFacebook/>
          </a>
          <a href="#">
            <TiSocialLinkedin/>
          </a>
          <a href="#">
            <TiSocialInstagram/>
          </a>
          <a href="#">
            <TiSocialTwitter/>
          </a>
          <a href="#">
            <TiSocialYoutube/>
          </a>
        </div>
      </div>

      <div className={Styles.sidebar_menu}>
        <div>
          <div className={Styles.sidebar_menu_box} onClick={()=> openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {
            openDiscover && (
              <div className={Styles.sidebar_discover}>
                {discover.map((el, i) => (
                  <p key={i+1}>
                    <Link href={{pathname: `${el.link}`}}>
                      {el.name}
                    </Link>
                  </p>
                ))}
              </div>
            )}
        </div>

        <div>
          <div className={Styles.sidebar_menu_box} onClick={()=> openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {
            openHelp && (
              <div className={Styles.sidebar_discover}>
                {helpcenter.map((el, i)=>(
                  <p key={i+1}>
                    <Link href={{pathname: `${el.link}`}}>
                      {el.name}
                    </Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
      </div>

      <div className={Styles.sidebar_button}>
        <Button btnName='Create'/>
        <Button btnName='Connect Wallet'/>
      </div>
    </div>
  )
};

export default SideBar