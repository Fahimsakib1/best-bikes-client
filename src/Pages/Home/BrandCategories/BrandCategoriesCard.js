import React from 'react';
import {FaArrowRight} from 'react-icons/fa';

const BrandCategoriesCard = ({ category }) => {

    const { category_name, img } = category;
    return (
        <div className="card card-compact w-96 shadow-2xl mx-auto border-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:rounded-xl rounded-xl">
            <figure><img src={img} alt="Brands" className='h-64 rounded-md' /></figure>
            <div className="card-body ">
                <h2 className=" bg-purple-900 text-white text-center py-1 text-xl rounded-md">Brand: {category_name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-ghost" title='Click For More Bikes'><FaArrowRight className='text-3xl text-orange-600'></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default BrandCategoriesCard;