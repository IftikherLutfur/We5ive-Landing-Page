import React from 'react';
import Banner from '../Banner/Banner';
import ProductPage from '../Product/page';
import Banner2 from '../Banner2/page';
import ProductPage2 from '../ProductPage2/page';

const HomePage = () => {
    return (
        <div className='text-black'>
           <Banner/>
           <ProductPage/>
           <Banner2/>
           <ProductPage2/>
        </div>
    );
}

export default HomePage;
