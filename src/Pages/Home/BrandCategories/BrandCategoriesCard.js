import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BrandCategoriesCard = ({ category }) => {

    const { category_name, img, _id, category_id } = category;
    return (
        <div className="card card-compact  shadow-2xl border-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:rounded-xl rounded-xl mx-auto md:w-full lg:w-full sm:w-[350px] w-[350px]">
            <figure><img src={img} alt="Brands" className='h-64 rounded-md' /></figure>
            <div className="card-body ">
                <h2 className=" bg-purple-900 text-white text-center py-1 text-xl rounded-md">Brand: {category_name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/category/${category_id}`}>
                        <button className="btn btn-ghost" title='Click For More Bikes'><FaArrowRight className='text-3xl text-orange-600'></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BrandCategoriesCard;