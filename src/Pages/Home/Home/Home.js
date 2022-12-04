import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import BrandCategories from '../BrandCategories/BrandCategories';
import Brands from '../Brands/Brands';
import Offerings from '../Offerings/Offerings';
import Slider from '../Slider/Slider'; 

const Home = () => {
    useTitle('Home');
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