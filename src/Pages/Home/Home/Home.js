import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import BrandCategories from '../BrandCategories/BrandCategories';
import Brands from '../Brands/Brands';
import Offerings from '../Offerings/Offerings';
import Slider from '../Slider/Slider'; 

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Offerings></Offerings>
            <BrandCategories></BrandCategories>
            <Brands></Brands>
            <AdvertisedItems></AdvertisedItems>
        </div> 
    );
};

export default Home;