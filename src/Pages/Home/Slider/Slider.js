import React from 'react';
import pic1 from '../../../images/Bikes/Resized/1.png';
import pic2 from '../../../images/Bikes/Resized/2.png';
import pic3 from '../../../images/Bikes/Resized/3.png';
import pic4 from '../../../images/Bikes/Resized/4.png';

const Slider = () => {
    return (
        <div className='mt-8'>
            <div className="carousel w-full">
                
                <div id="slide1" className="carousel-item relative w-full  ">
                    <img src={pic1} className="w-full rounded-md " alt="pic"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full ">
                    <img src={pic2} className="w-full rounded-md"  alt="pic" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={pic3} className="w-full rounded-md"  alt="pic" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={pic4} className="w-full rounded-md"   alt="pic"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div> 
    );
}; 

export default Slider; 