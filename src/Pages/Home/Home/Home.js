import React from 'react';
import Brands from '../Brands/Brands';
import Offerings from '../Offerings/Offerings';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Offerings></Offerings>
            <Brands></Brands>
        </div>
    );
};

export default Home;