import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black flex justify-between px-10 gap-5 py-10'>
            <div className='flex-1'>
                <h1 className='text-4xl'>We<span className='text-[#7436F1]'>5</span>ive</h1>
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
    );
}

export default Footer;
