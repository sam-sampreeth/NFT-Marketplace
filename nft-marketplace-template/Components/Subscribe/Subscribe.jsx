import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import Image from 'next/image';

//Internal Imports
import Styles from './Subscribe.module.css';
import images from '../../img'


const Subscribe = () => {
  return (
    <div className={Styles.subscribe}>
        <div className={Styles.subscribe_box}>
            <div className={Styles.subscribe_box_left}>
                <h2>Never miss an update!</h2>
                <p>Subscribe to our exclusive mailing list and be the first person to know about out upcoming drops!</p>

                <div className={Styles.subscribe_box_left_box}>
                    <span>01</span>
                    <small>Get extra discounts</small>
                </div>
                
                <div className={Styles.subscribe_box_left_box}>
                    <span>02</span>
                    <small>Get premium NFTs</small>
                </div>
                <div className={Styles.subscribe_box_left_input}>
                    <input type="email" placeholder='Enter your email'/>
                    <RiSendPlaneFill className={Styles.subscribe_box_left_input_icon}/>
                </div>
            </div>
            <div className={Styles.subscribe_box_right}>
                <Image src={images.update} alt="Get Updates" height={600} width={800} />
            </div>
        </div>
    </div>  
  )
};

export default Subscribe;