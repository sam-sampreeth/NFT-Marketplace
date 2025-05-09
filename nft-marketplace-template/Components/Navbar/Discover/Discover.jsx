import React from 'react'
import Link from 'next/link'

// Internal Imports
import Styles from './Discover.module.css'

const Discover = () => {
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

  return (
    <div>
      {discover.map((el, i)=> (
        <div key={i+1} className={Styles.discover}>
          <Link href={{pathname: `${el.link}`}}>
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Discover