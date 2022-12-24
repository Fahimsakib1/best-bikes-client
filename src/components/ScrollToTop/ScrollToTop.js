import React from 'react';
import { FiArrowUpCircle } from 'react-icons/fi'; 
import {TbArrowTopTail} from 'react-icons/tb'



const ScrollToTop = () => {
    
    const handleBackToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior:"smooth"}) 
    }
    
    
    return (
        <div>
            <div className='shadow-xl '>
            <div className='fixed bottom-5 right-8 '>
                <button onClick={handleBackToTop} className='tooltip' data-tip='Back To Top'><FiArrowUpCircle className='text-[50px] text-amber-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 animate-bounce' ></FiArrowUpCircle></button>
            </div>
        </div>
        </div>
    );
};

export default ScrollToTop;