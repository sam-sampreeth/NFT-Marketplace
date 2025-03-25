import React from 'react'
//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, Service } from "../Components/componentindex";

const Home = () => {
  return (
    
    <div className={Style.homepage}>
      <HeroSection/>
      <Service />
    </div>
  );
};

export default Home;