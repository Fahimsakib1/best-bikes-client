import React from 'react';
import { toast } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiPhoneCall } from 'react-icons/fi';
import { ImLocation2 } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';



const ContactUs = () => {
    return (
        <div className='bg-gray-900 mt-16'>
            <div className="px-2 sm:px-2 md:px-4 lg:px-8  py-4">
                <h1 id='contact' className='uppercase mt-6  text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-mono mb-20 text-white'>Contact <span className='text-rose-600 text-6xl'>Me</span> <hr className='mx-auto mt-2 ' width="200px" /></h1>

                <div className='flex justify-evenly gap-x-6 lg:flex-row md:flex-col sm:flex-col flex-col '>


                    <div className='w-full sm:w-full md:w-3/4 lg:w-1/2 lg:mx-0 md:mx-auto sm:mx-auto mx-auto backdrop-blur-md text-white'>

                        <p className='text-lg sm:text-lg md:text-xl lg:text-xl text-center md:px-0 sm:px-3 px-3'>If you have any queries or want to know more about Best Bikes then please don't hesitate to contact us. You can also connect with us by social media. If you like our bikes, please sent your valuable feedbacks via email. It will be appreciated</p>

                        <div className='text-center mt-8'>

                            <div className='flex justify-center gap-x-3 items-center my-4'>
                                <FiPhoneCall className='text-xl'></FiPhoneCall>
                                <p className='text-lg sm:text-lg md:text-xl lg:text-xl'>Mobile: +8801870203220</p>
                            </div>

                            <div className='flex justify-center gap-x-3 items-center my-4'>
                                <ImLocation2 className='text-xl'></ImLocation2>
                                <p className='text-lg sm:text-lg md:text-xl lg:text-xl'>Address: Dhanmondi, Dhaka</p>
                            </div>

                            <div className='flex justify-center gap-x-3 items-center my-4'>
                                <HiOutlineMail className='text-2xl'></HiOutlineMail>
                                <p className='text-lg sm:text-lg md:text-xl lg:text-xl'>Email: fahim.sakib.10@gmail.com</p>
                            </div>

                            <div className='flex justify-center items-center gap-x-4 mt-8'>
                                <a href='https://www.facebook.com/fahim.sakib.5' className='facebook-icon' title="Facebook" target="blank"><FaFacebook className='text-3xl hover:text-blue-500'></FaFacebook></a>

                                <a href='https://www.instagram.com/i_fahiim/' className='instagram-icon ' title="Instagram" target="blank"  ><FaInstagram className='text-3xl hover:text-red-500'></FaInstagram></a>

                                <a href='https://www.linkedin.com/in/fahim-sakib-57029518b/' className=' linkedin-icon' title="LinkedIn" target="blank" ><FaLinkedin className='text-3xl hover:text-blue-600'></FaLinkedin></a>

                                <a href='https://github.com/Fahimsakib1' className='github-icon' title="GitHub" target="blank" ><FaGithub className='text-3xl hover:text-black hover:bg-white hover:rounded-full border-0'></FaGithub></a>

                                <a href='https://www.youtube.com/results?search_query=best+bikes' className='github-icon' title="Youtube" target="blank" ><FaYoutube className='text-3xl hover:text-red-600'></FaYoutube></a>

                            </div>

                        </div>


                    </div>





                    <div className="divider lg:divider-horizontal my-8 border-white"></div>

                    <div className='lg:w-1/2 md:w-[620px] sm:w-full w-full lg:mx-auto md:mx-auto  sm:px0 px-0 md:px-6 py-4 rounded-xl mb-16  -mt-2'>

                        <form
                            action='https://formspree.io/f/xzbwnkow'
                            method='POST'
                            className='lg:mx-0 md:mx-0 sm:mx-4 mx-4 -mt-2'>

                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input
                                    type="text" name='name' className="input input-bordered w-full my-2 font-semibold  text-black" required
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input
                                    type="email" name='email' className="input input-bordered w-full my-2 font-semibold  text-black" required
                                />
                            </div>

                            <div>
                                <textarea
                                    name='message'
                                    className="textarea textarea-bordered w-full h-24 mt-4 text-black" placeholder="Write Message"></textarea>
                            </div>


                            <div className='relative group mt-4' >
                                <div className='absolute -inset-0.5 mt-4 rounded-xl blur bg-gradient-to-r from-pink-600 to-violet-400 opacity-70 group-hover:opacity-90 transition duration-300 '>

                                </div>
                                <button type='submit' value="Submit" className='w-full py-4 text-center text-white text-2xl mt-4 bg-black rounded-xl leading-none relative transition duration-300 ease-in-out delay-150 group-hover:-translate-y-0.5 group-hover:scale-102'>
                                    <div className='flex space-x-3 justify-center items-center'>
                                        <span>Send Message</span>
                                    </div>
                                </button>

                            </div>

                        </form>
                    </div>


                </div>
            </div >
        </div>
    );
};

export default ContactUs;