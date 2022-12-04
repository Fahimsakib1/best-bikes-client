import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <footer className="footer p-8 bg-black text-white mt-64 dark:bg-gray-900">

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
                    <a className="link link-hover hover:text-blue-600" href='/'>Contact</a>
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

                        {/* <a href='/' title='Twitter'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-blue-600"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>

                        <a href='/' title='Youtube'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-red-600"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>

                        <a href='https://www.facebook.com/fahim.sakib.5' target="blank" title='Facebook'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-blue-500"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a> */}

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