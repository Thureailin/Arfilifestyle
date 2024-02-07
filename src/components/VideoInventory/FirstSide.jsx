import React from 'react'
import back from "../../assets/img/vide/Ecommerce-Nordics.png";
import { FaCaretRight } from "react-icons/fa";

const FirstSide = () => {
  return (
    <div className='relative'>
      <img src={back} className='h-[450px] w-full' alt=''/>
      <div className=''>
        <p className='absolute top-[100px] left-11 text-cus-primary font-bold text-[40px]'>You Can See More Video...</p>
        <button className='absolute bg-purple-500 top-[200px] left-[100px] hover:p-5 text-white text-[25px] rounded-xl px-4 '>Watch Now</button>
      </div>
      <div className='shadow-2xl'>
        <p className='absolute top-[100px] right-[100px] text-cus-primary font-bold text-[45px]'>Arfi Video Inventory</p>
        <button className='border-purple-500 text-black  border-2 px-4 rounded-xl absolute top-[200px] right-[200px] font-bold text-[20px]'>See More </button>
      </div>
    </div>
    // <div className=''>

    // </div>
    
  )
}

export default FirstSide
