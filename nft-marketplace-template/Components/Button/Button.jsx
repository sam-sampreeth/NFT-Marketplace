import React from 'react';

//Internal Imports
import Styles from './Button.module.css';


const Button = ({ btnName, handleClick }) => {
  return (
    <div className={Styles.box}>
      <button className={Styles.button} onClick={()=> handleClick()}>
        {btnName}
      </button>
    </div>
  )
};

export default Button