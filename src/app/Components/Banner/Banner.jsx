import React from 'react';
import { BsTruck } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { TbExchange } from "react-icons/tb";




const Banner = () => {
    return (
        <div>
            <div className="relative  h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/NSWGNNB/pexels-photo-1127000.webp')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-3xl font-bold mb-4">Elevate Your Everyday Style</h1>
                        <p className="text-lg mb-6">Discover the Latest Trends in Sustainable Fashion</p>
                        <button className="px-6 py-3 text-xl bg-[#7436F1] text-white rounded-md hover:bg-[#5c2cb3] transition duration-300">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            <div className='bg-[#6441C2] lg:flex lg:items-center lg:justify-center lg:gap-20 py-2 px-3'>
                <div className='text-white flex my-4 gap-1'>
                    <div>
                        <span><BsTruck /></span>
                    </div>
                    <div>
                        <h1 className='font-bold'>FREE SHIPPING</h1>
                        <small>BUY BDT 3000+ & GET FREE DELIVERY</small>
                    </div>
                </div>
                <div className='text-white flex my-4 gap-1'>
                    <div>
                        <span><TbExchange/></span>
                    </div>
                    <div>
                        <h1 className='font-bold'>7 DAYS EXCHANGE</h1>
                        <small>EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</small>
                    </div>
                </div>
                <div className='text-white flex my-4 gap-1'>
                    <div>
                        <span><FaMoneyCheckDollar/></span>
                    </div>
                    <div>
                        <h1 className='font-bold'>100% PAYMENT SECURE</h1>
                        <small>CASH ON DELIVERY AND SECURED ONLINE PAYMENT</small>
                    </div>
                </div>
               

            </div>
        </div>
    );
};

export default Banner;