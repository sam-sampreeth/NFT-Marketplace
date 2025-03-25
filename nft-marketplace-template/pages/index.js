import React from 'react'
//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, Service, BigNFTSlider, Subscribe } from "../Components/componentindex";

const Home = () => {
  return (
    
    <div className={Style.homepage}>
      <HeroSection/>
      <Service />
      <BigNFTSlider />
      <Subscribe />
    </div>
  );
};

export default Home;