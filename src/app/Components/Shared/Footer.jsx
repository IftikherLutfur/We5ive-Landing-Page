import React from 'react';
import { FaFacebook,FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";



const Footer = () => {
    return (
       <div className='bg-[#1D1D1D]'>
         <div className=' lg:flex lg:justify-between py-10 px-10 gap-5 '>
            <div className='lg:flex-1'>
           <div className='flex'>
           <svg xmlns="http://www.w3.org/2000/svg" width="62" height="35" viewBox="0 0 62 35" fill="none">
<g clip-path="url(#clip0_214_850)">
<path d="M38.2751 35C30.3162 23.3361 22.4205 11.7667 14.4385 0.0698853H46.9146C46.2929 1.02955 45.7366 1.91113 45.1572 2.77832C44.4513 3.83456 43.9497 5.2792 42.9446 5.81554C41.9374 6.35394 40.4202 5.99843 39.1264 6.00049C34.6718 6.00871 30.2172 6.0046 25.5244 6.0046C26.2346 7.07934 26.8098 8.039 27.4947 8.92058C27.6653 9.1384 28.1921 9.1569 28.5546 9.15895C32.101 9.17539 35.6453 9.16923 39.1917 9.16923H40.6752C39.7922 10.5543 38.8925 11.6619 38.332 12.9134C37.291 15.2313 35.6516 16.2239 33.0872 15.7143C32.8195 15.6608 32.5309 15.7081 32.0378 15.7081C32.3012 16.1335 32.4761 16.4397 32.6741 16.7294C35.4872 20.8599 38.294 24.9944 41.1282 29.1105C41.4906 29.6345 41.518 30.0106 41.1472 30.551C40.1758 31.971 39.2781 33.4382 38.2751 35.0041V35Z" fill="#7E53D4"/>
<path d="M23.1349 34.998C15.4078 23.3155 7.75659 11.7482 0 0.0205599C2.15566 0.0205599 4.13853 -0.00820953 6.11929 0.0534391C6.39323 0.061659 6.71142 0.470595 6.90738 0.760344C12.1669 8.47876 17.4139 16.2033 22.665 23.9279C22.8378 24.1807 23.0211 24.4273 23.2971 24.8136C24.3234 23.3402 25.2884 21.951 26.3399 20.4448C27.4715 22.0147 28.5462 23.4779 29.5724 24.9739C29.6967 25.1547 29.6482 25.5801 29.5113 25.7835C27.4315 28.8249 25.3243 31.8457 23.137 35L23.1349 34.998Z" fill="#F4F8FF"/>
<path d="M42.4031 28.6215C41.3411 27.0063 40.3465 25.5637 39.4509 24.0636C39.295 23.8026 39.4425 23.2313 39.6448 22.9272C43.227 17.5411 46.8408 12.1736 50.4484 6.80401C51.8117 4.77576 53.1983 2.76396 54.5279 0.715173C54.8735 0.180885 55.2528 -0.00817103 55.887 0.00210374C57.8699 0.0390929 59.8549 0.0144335 62 0.0144335C55.434 9.6008 48.967 19.0413 42.4031 28.6215Z" fill="#F4F8FF"/>
</g>
<defs>
<clipPath id="clip0_214_850">
<rect width="62" height="35" fill="white"/>
</clipPath>
</defs>
</svg>
                <h1 className='text-4xl'>We<span className='text-[#7436F1]'>5</span>ive</h1>
           </div>
                <p>Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est. </p>
            </div>
            <div className='flex-1'>
               <h1 className='text-xl'>Sign Up For Our Newsletter!</h1>
               <p>Get notified about updates and be the first to get early access to new Podcast episodes.</p> 
               <div className='flex items-center'>
                <input className='py-1 rounded-l-md px-3 text-black' type="text" placeholder='Your email address' />
                <button className='bg-[#7436F1] px-6 py-1 rounded-r-md'>Subscribe</button>
               </div>
            </div>
        </div>

        <div>
            <ul className='lg:flex justify-evenly gap-52 my-4 items-center space-y-4 '>
                <li>Contact Us <br />
                support@we5ive.com
                </li>
                <li>About Us <br />
                Contact Us
                </li>
                <li>Privacy policy <br />
                Terms & Condition
                </li>
                <li>
                Social Link <br />
                <ul className='flex gap-2'>
                    <li className='text-blue-700 text-xl'><FaFacebook/></li>
                    <li className='text-xl bg-black rounded-xl'><RiTwitterXFill/></li>
                    <li className='text-xl text-sky-600'><FaLinkedin/></li>
                </ul>
                </li>
            </ul>
        </div>

<div className='w-full text-center bg-[#7E53D4] py-2'>
© 2024 | We5ive
</div>


       </div>       
    );
}

export default Footer;
