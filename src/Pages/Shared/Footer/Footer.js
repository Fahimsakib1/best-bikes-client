import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='print:hidden'>

            <footer className="footer p-8 bg-black text-white mt-64 dark:bg-gray-900 ">

                <div className='px-16'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover hover:text-blue-600" href='/'>Used Bikes</a>
                    <a className="link link-hover hover:text-blue-600" href='/'>Best Brands</a>
                    <a className="link link-hover hover:text-blue-600" href='/'>EMI System</a>
                    <a className="link link-hover hover:text-blue-600" href='/'>Less Price</a>
                </div>

                <div className='px-16'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover hover:text-blue-600" href='/'>About Us</a>
                    <Link className="link link-hover hover:text-blue-600" to='/contactUs'>Contact</Link>
                    <a className="link link-hover hover:text-blue-600" href='/'>Upcoming Services</a>
                    <a className="link link-hover hover:text-blue-600" href='/'>Events</a>
                </div>

                <div className='px-16'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover hover:text-blue-600" href='/'>Terms Of Use</a>
                    <a className="link link-hover hover:text-blue-600" href='/'>Privacy Policy</a>
                    <a className="link link-hover hover:text-blue-600" href='/'>Cookie Policy</a>
                </div>

            </footer>

            <footer className="footer px-16 py-3 border-t bg-black text-white border-base-300 dark:bg-gray-900">

                <div className="items-center md:grid-flow-col lg:grid-flow-col sm:grid-flow-row">

                    <p ><span className='text-2xl text-orange-400'>Best Bikes</span><br /><span className='text-md text-orange-300'>Selling Used Bikes Since 2010</span></p>
                </div>

                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">

                        <a  href='https://www.facebook.com/fahim.sakib.5' className='facebook-icon' title="Facebook" target="blank"><FaFacebook className='text-3xl hover:text-blue-500'></FaFacebook></a>

                        <a href='https://www.instagram.com/i_fahiim/'  className='instagram-icon ' title="Instagram" target="blank"  ><FaInstagram className='text-3xl hover:text-red-500'></FaInstagram></a>

                        <a href='https://www.linkedin.com/in/fahim-sakib-57029518b/' className=' linkedin-icon' title="LinkedIn" target="blank" ><FaLinkedin className='text-3xl hover:text-blue-600'></FaLinkedin></a>

                        <a href='https://github.com/Fahimsakib1' className='github-icon' title="GitHub" target="blank" ><FaGithub className='text-3xl hover:text-black hover:bg-white hover:rounded-full border-0'></FaGithub></a>

                    </div>
                </div>
            </footer> 

            <div className="text-sm text-center text-gray-400 bg-black pb-4 dark:bg-gray-900">© 2022 Best Bikes. All Rights Reserved By Fahim Faysal
            </div>


        </div>
    );
};

export default Footer;