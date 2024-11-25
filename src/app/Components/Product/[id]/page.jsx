"use client"
import React, { useEffect, useState } from 'react';
import { productDetails } from '../page';
import { IoBag } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from 'axios';
import { AiOutlineLike } from "react-icons/ai";




const ProductDetails = ({params}) => {
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1);
    const [selectOption , setSelectOption] = useState("Newest")
    const [isOpen, setIsOpen] = useState(false)
    const [reviews , setReviews] = useState([])

    useEffect(()=>{
        const fetchReviews = async()=>{
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_WEB_URL}/api/review`)
            if(res.status === 200){
                console.log(res.data);
              setReviews(res.data.reviews)
            }
            else{
                console.error("Error");
                
            }
            } catch (error) {
                console.error("Something went wrong", error)
            }
        }
        fetchReviews()
    },[])

    const options = [ "Newest", "Oldest", "All"]

    const toggleDropDown = (options) =>{
        setSelectOption(options)
      setIsOpen(!isOpen)
    }

    const decrement = () =>{
        if (quantity> 1){
            setQuantity(quantity-1)
        }}

        const   increment = () =>{
            if(quantity<5){
                setQuantity(quantity+1)
            }
        }

    useEffect(()=>{
    const details = async () =>{
        try {
            const data = await productDetails(params.id)
            setProduct(data)
        } catch (error) {
            console.error(error, "Error fetching data")
        }
    }
    details()
    },[])
    return (
       <div>
         <div className='lg:flex items-center gap-10 mx-5 my-3 rounded-sm py-3 px-20 text-black bg-[#CECECE]'>
            <div className='flex-1'>
            {product.images?.img1 ? (
          <img src={product.images.img1} alt="Product" />
        ) : (
          <p className='text-black'>Image not available</p>
        )}
            </div>
            <div className='w-full flex-1'>
               <p>{product.newArrival=== "yes" ? <p>New Arrival</p>: <p className='px-12 py-2 w-36 bg-purple-900 text-white rounded-md'>Nope</p>}</p>
               <h1 className='text-3xl text-black my-5'>{product.productName}</h1> 
               <p>{product.rating}</p>
               <p className='text-black text-2xl my-3'>BDT{product.price}</p>
               <div className='flex justify-between  my-5 gap-20'>
                <span>
                    <p>Available Size</p>
                    <ul className='flex gap-4'>
                        {
                            product?.availableSizes?.map((size , index)=>(
                            <button className='border-[1px] px-1 rounded-lg border-purple-600' key={index}
                            >{size}</button>
                        ))
                        }
                    </ul>
                </span>
                <span>
                    <p>Available Color</p>
                    <ul className='flex gap-4'>
                        {
                            product?.availableColors?.map((size , index)=>(
                            <li className='border-[1px] px-1 rounded-lg border-purple-600' key={index}
                            >{size}</li>
                        ))
                        }
                    </ul>
                </span>
               </div>
               <hr className='border-dotted border-red-400' />
               <h1 className='mt-5 mb-2'>Quantity</h1>
               <div className='bg-[#ECE9FE] rounded-3xl flex justify-between px-5 py-3 w-[132px] h-[48px]'>
                <div><button onClick={decrement} disabled={quantity <= 1}>-</button></div>
                <div><h1 className='text-xl'>{quantity}</h1></div>
                <div><button onClick={increment} disabled={quantity>=5}>+</button></div>
               </div>

               <div className='flex justify-between my-10 gap-6'>
                <button className='w-full bg-purple-600 py-1 rounded-lg text-white' >Buy Now</button>
                <button className='w-full rounded-lg border-2 border-purple-600 text-purple-600'>Add to Cart</button>
               </div>
            </div>
            <div className={`lg:absolute lg:ml-[1090px] mt-12 bg-purple-700 text-center rounded-l-2xl px-1 text-white`}>
            <IoBag className='ml-6 mt-2'/>
                Your Bag <br />
                0
            </div>
        </div>
        <div>
        <Tabs>
    <TabList>
      <div className='text-black'>
      <Tab>Details</Tab>
      <Tab>Review & Rating</Tab>
      <Tab>Discussion</Tab>
      </div>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <div className='mx-5 my-10 text-black'>
        <div>
         <button onClick={()=> setIsOpen(!isOpen)} className=" flex items-center gap-2 text-black border-2 border-black px-4 py-1 rounded-lg focus:outline-none mb-6" >
            {selectOption}<MdOutlineKeyboardArrowDown className='text-xl'/>
         </button>
         {isOpen && (
        <div className="absolute w-28 bg-white rounded-md shadow-lg z-10">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => toggleDropDown(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      
    <div className='lg:flex justify-evenly gap-28 mx-10'>
        {/* user rating */}
    <div className='w-full'>
     {reviews.slice(0,2).map(review=><div className='border-b-2 border-dashed my-2' key={review._id}>
        <div className='flex gap-5'>
        <span className='flex gap-2'><img className='rounded-full w-10 h-10' src={review.image} alt="" />
        <span className='font-semibold text-black'>{review.name}</span>
        </span>
        <span className='text-gray-500'>{review.daysAgo} days</span>
        </div>
        <h1 className='pl-12'>{review.rating}</h1>
        <p className='pl-12 pb-5'>{review.comment}</p>
        <p className='pb-5 pl-12 flex items-center gap-1'><button><AiOutlineLike/></button>{review.likes}</p>
     </div>)}
      </div>

      {/* showing the rating */}
      <div className='w-1/2 px-20 border-2'>
        <div className='flex gap-3'>
        <p className='font-semibold'>Product Preview</p>
        <p className='text-[#7E53D4] font-semibold'>112 reviews</p>
        </div>
      <div className="flex flex-col  py-6 space-y-3">
			<div className="flex space-x-3">
				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-700">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-400">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
			</div>
		</div>
      </div>

    </div>


        </div>

      </div>
    </TabPanel>
    <TabPanel></TabPanel>
  </Tabs>
        </div>
       </div>
    );
};

export default ProductDetails;