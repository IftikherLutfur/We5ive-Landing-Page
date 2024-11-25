"use client"
import React, { useEffect, useState } from 'react';
import { productDetails } from '../page';
import { IoBag } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



const ProductDetails = ({params}) => {
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1);
    const [selectOption , setSelectOption] = useState("Select")
    const [isOpen, setIsOpen] = useState(false)

    const options = ["Hoodie", "Shoe", "Jacket"]

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
        </div>

        <div>
            Rating View 
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