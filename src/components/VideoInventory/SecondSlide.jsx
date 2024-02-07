import React from 'react'
import card from "../../assets/img/vide/photo-1577864662891-c7b77f10f638.avif"
import card1 from "../../assets/img/vide/photo-1577864662891-c7b77f10f638.avif"
import card2 from "../../assets/img/vide/photo-1577864662891-c7b77f10f638.avif"
import card3 from "../../assets/img/vide/photo-1577864662891-c7b77f10f638.avif"

const SecondSlide = () => {
  return (
    <div>
        <div className='mt-5'>
            <div className='flex justify-between mx-11 items-center'>
            <p className='text-cus-primary font-bold text-[20px]'>Recent Videos</p>
            <button className='text-white px-3 py-1 rounded-xl bg-cus-primary  text-[20px]'>View All Videos</button>
            </div>
        </div>
        <div className='flex flex-cols-4 items-center justify-around mt-11'>
            <div className='shadow-lg relative '>
                <img src={card} className='w-[300px] h-[200px] rounded-xl'/>
                <button className='absolute top-2 font-bold right-5 px-5 text-[15px] rounded-2xl bg-white text-black '>Vlogs</button>
                <p className='font-bold p-2'>Arfi Content Blogs</p>
            </div>
            <div className='shadow-lg relative'>
                <img src={card1} className='w-[300px] h-[200px] rounded-xl'/>
                <button className='absolute top-2 font-bold right-5 px-5 text-[15px] rounded-2xl bg-white text-black '>Vlogs</button>
                <p className='font-bold p-2'>Arfi Content Blogs</p>
            </div>
            <div className='shadow-lg relative'>
                <img src={card2} className='w-[300px] h-[200px] rounded-xl'/>
                <button className='absolute top-2 font-bold right-5 px-5 text-[15px] rounded-2xl bg-white text-black '>Vlogs</button>
                <p className='font-bold p-2'>Arfi Content Blogs</p>
            </div>
            <div className='shadow-lg relative'>
                <img src={card3} className='w-[300px] h-[200px] rounded-xl'/>
                <button className='absolute top-2 font-bold right-5 px-5 text-[15px] rounded-2xl bg-white text-black '>Vlogs</button>
                <p className='font-bold p-2'>Arfi Content Blogs</p>
            </div>

        </div>
    </div>
  )
}

export default SecondSlide