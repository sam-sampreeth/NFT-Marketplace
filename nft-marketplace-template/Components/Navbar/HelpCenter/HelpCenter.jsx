import React from 'react';
import Link from 'next/link';

//Internal Imports
import Styles from './HelpCenter.module.css'

const HelpCenter = () => {
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
  return (
    <div className={Styles.box}>
      {
        helpcenter.map((el, i)=>(
          <div className={Styles.helpcenter}>
            <Link href={{pathname: `${el.link}`}}>
              {el.name}
            </Link>
          </div>
        ))
      }
    </div>
  )
};

export default HelpCenter