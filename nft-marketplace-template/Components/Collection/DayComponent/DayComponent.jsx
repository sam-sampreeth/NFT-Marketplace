import React from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';

//Internal Imports
import Styles from './DayComponent.module.css';
import images from '../../../img'

const DayComponent = () => {
  return (
    <div className={Styles.daysComponent}>
      <div className={Styles.daysComponent_box}>
        <div className={Styles.daysComponent_box_img}>
          <Image src={images.creatorbackground1} className={Styles.daysComponent_box_img_img} alt="Profile bg" width={500} height={300} objectFit="covers"/>
        </div>

        <div className={Styles.daysComponent_box_profile}>
          <Image src={images.creatorbackground2} alt="profile" width={200} height={200} className={Styles.daysComponent_box_img1} objectFit="covers" />
          <Image src={images.creatorbackground3} alt="profile" width={200} height={200} className={Styles.daysComponent_box_img2} objectFit="covers" />
          <Image src={images.creatorbackground4} alt="profile" width={200} height={200} className={Styles.daysComponent_box_img3} objectFit="covers" />
        </div>

        <div className={Styles.daysComponent_box_title}>
          <h2>Our Unique Collection</h2>
          <div className={Styles.daysComponent_box_title_info}>
            <div className={Styles.daysComponent_box_title_info_profile}>
              <Image src={images.user1} alt="Profile" width={30} height={30} objectFit="covers" className={Styles.daysComponent_box_title_info_profile_img}/>
              <p>Creator</p>
              <span>Becky Hawkins <small> <MdVerified/> </small></span>
            </div>
            <div className={Styles.daysComponent_box_title_info_price}>
              <small>1.77 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayComponent