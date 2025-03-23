import React from 'react';
import Image from 'next/image';

//Internal Imports
import Styles from './Notifications.module.css';
import images from '../../../img';

const Notifications = () => {
  return(
    <div className={Styles.notification}>
      <p>Notifications</p>
      <div className={Styles.notification_box}>
        <div className={Styles.notification_box_img}>
          <Image src={images.user1} alt='Profile Image' width={50} height={50} />
        </div>
        <div className={Styles.notification_box_info}>
          <h4>Sampreeth</h4>
          <p>Message goes in here..</p>
          <small>30 seconds ago</small>
        </div>
        <span className={Styles.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notifications