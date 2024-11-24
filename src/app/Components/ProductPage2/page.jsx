"use client"
import axios from "axios";
import { useEffect, useState } from "react";

const ProductPage2 = () => {
    const [product , setProduct] = useState([])

    useEffect(()=>{
     
        const fetchProduct = async () =>{
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_WEB_URL}/api/Clothes`)
                if(res.status=== 200){
                    setProduct(res.data.clothes)
                }
                else{
                    console.error("Error")
                }
            } catch (error) {
                console.error("Error Fetching", error)
            }
        }
        fetchProduct()

    },[])

    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-5 sm:grid-cols-1'>
             {
                product.slice(4,10).map(products=><div className='text-black my-5 mx-5' key={products._id}>
                    <img className='border-2 h-[287px] w-[286px] rounded-md' src={products.images.img1}
                    />
                    <div className='flex lg:justify-between gap-20 lg:gap-0 my-4 px-2'>
                    <h1 className=''>{products.productName}</h1>
                    <h1 className='font-semibold text-black'>BDT {products.price}</h1>
                    </div>
                    <button className='border-2 border-[#7E53D4] w-full text-[#7E53D4]'>Add to Cart </button>
                </div>)
             }
            </div>
        </div>
    );
};


export default ProductPage2;