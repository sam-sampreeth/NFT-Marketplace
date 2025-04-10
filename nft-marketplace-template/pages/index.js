import React from 'react'
//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter ,NFTCard} from "../Components/componentindex";

const Home = () => {
  return (
    
    <div className={Style.homepage}>
      <HeroSection/>
      <Service />
      <BigNFTSlider />
      <Filter/>
      <NFTCard/>
      <Title heading="Browse by Category" paragraph="Explore the best NFTs in our featured categories"/>
      <Category />
      <Subscribe />
      

    </div>
  );
};

export default Home;