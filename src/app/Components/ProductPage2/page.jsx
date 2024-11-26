"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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
        <div className="my-5">
            <div className='grid lg:grid-cols-4 md:grid-cols-2  lg:gap-5 sm:grid-cols-1'>
            {
                    product.slice(4, 8).map(products => <div className='text-black my-5 mx-5 bg-white' key={products._id}>
                        <p className="bg-[#7E53D4] rounded-b-3xl px-1 py-1 absolute ml-52 w-10 text-white text-center mt-2">Up to 40%</p>
                        <Image
  className="h-[287px] p-2 shadow-lg w-[286px] rounded-md"
  src={products.images.img1}
  alt="Product Image"
  width={286}  // Width as per your requirement
  height={287} // Height as per your requirement
/>
                        <div className='flex lg:justify-between gap-20 lg:gap-0 mt-4 mb-2 px-2'>
                            <h1 className=''>{products.productName}</h1>
                            <h1 className='font-semibold text-black'>BDT {products.price}</h1>
                        </div>
                        <div className="flex mt-2 mb-4 item-center">
            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>

            <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg> ({products.rating})
        </div>

                        <Link href={`/Components/Product/${products._id}`}><button className='border-2 border-[#7E53D4] w-[260px] text-[#7E53D4]'>Add to Cart</button> </Link>
                    </div>)
                }
                <button className='text-center lg:mx-[560px] md:mx-[300px] sm:mx-[200px]  flex justify-center bg-[#7E53D4] px-3 text-white w-36 py-3 rounded-lg'>Show More</button>
            </div>
        </div>
    );
};


export default ProductPage2;