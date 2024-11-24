import React from 'react';


const Banner2 = () => {
    return (
       <div className='mx-5 my-5'>
        <div className=' my-5  px-32 bg-[#EEECFB] lg:flex items-center justify-between '>
        <div>
            <h1 className='lg:text-4xl text-xl font-semibold'><span className='text-[#6F42C1]'>30%</span> Off for New Customers</h1>
            <button className='bg-[#8c5ce4] mt-3 text-white rounded-xl px-3 py-1'>Shop Now</button>
        </div>
        <div>
            <img src='https://i.postimg.cc/nr84nV7j/image-2-1.png' alt="" />
        </div>
       </div>
       <div className='lg:flex mb-5 items-center gap-5 px-32 '>
        {/* for image */}
        <div>
            <img className='' src="https://i.postimg.cc/HnpLwf1v/man.png" alt="" />
        </div>
        <div>
            <h1 className='text-4xl font-semibold'>MEN COLLECTION</h1>
            <button className='bg-[#8c5ce4] mt-3 text-white rounded-xl px-3 py-1'>Shop Now</button>
        </div>
       </div>
       </div>
      
    );
};

export default Banner2;