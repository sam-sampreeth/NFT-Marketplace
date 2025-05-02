import React from 'react'
//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab} from "../Components/componentindex";

const Home = () => {
  return (
    
    <div className={Style.homepage}>
      <HeroSection/>
      <Service />
      <BigNFTSlider />
      <Title heading="New Collection" paragraph="Explore the best NFTs in our featured categories"/>
      <FollowerTab />
      <Collection />
      <Title heading="Browse by Category" paragraph="Explore the best NFTs in our featured categories"/>
      <Filter/>
      <NFTCard/>
      <Category />
      <Subscribe />
      

    </div>
  );
};

export default Home;