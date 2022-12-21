import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import BrandCategories from '../BrandCategories/BrandCategories';
import Brands from '../Brands/Brands';
import ContactUs from '../ContactUs/ContactUs';
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
            <ContactUs></ContactUs>
        </div> 
    );
};

export default Home;