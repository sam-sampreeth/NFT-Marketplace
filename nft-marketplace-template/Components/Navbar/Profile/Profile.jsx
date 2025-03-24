import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FaUserAlt, FaRegImage, FaUserEdit} from 'react-icons/fa'; 
import {MdHelpCenter} from 'react-icons/md';
import {TbDownloadOff, TbDownload} from 'react-icons/tb';

//Internal Imports
import Styles from './Profile.module.css';
import images from '../../../img';

const Profile = () => {
  return (
    <div className={Styles.profile}>
      <div className={Styles.profile_account}>
        <Image src={images.user1} alt='User Profile' width={50} height={50} className={Styles.profile_account_img}/>
        <div className={Styles.profile_account_info}>
          <p>Sampreethh</p>
          <small>x03554898922...</small>
        </div>
      </div>
      <div className={Styles.profile_menu}>
        <div className={Styles.profile_menu_one}>
          <div className={Styles.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{pathname: '/my-profile'}}>My Profile</Link> 
            </p>
          </div>

          <div className={Styles.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{pathname: '/my-items'}}>My Items</Link>
            </p>
          </div>

          <div className={Styles.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{pathname: '/edit-profile'}}>Edit Profile</Link>
            </p>
          </div>
          
        </div>
        <div className={Styles.profile_menu_two}>
          <div className={Styles.profile_menu_one_item}>
            <MdHelpCenter/>
            <p>
              <Link href={{pathname: '/help'}}>Help</Link>
            </p>
          </div>

          <div className={Styles.profile_menu_one_item}>
            <TbDownload/>
            <p>
              <Link href={{pathname: '/disconnect'}}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile