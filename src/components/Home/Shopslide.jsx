import women6 from '../../assets/img/Front_Photo_Female/Front_Photo_Female_01.jpg'
import women7 from '../../assets/img/Front_Photo_Female/Front_Photo_Female.jpg'
import women8 from '../../assets/img/Front_Photo_Female/Front_Photo_Female_02.jpg'
import women9 from '../../assets/img/Front_Photo_Female/Front_Photo_Female_03.jpg'
import women10 from '../../assets/img/Front_Photo_Female/Front_Photo_Female_05.jpg'
import women11 from '../../assets/img/Front_Photo_Female/Front_Photo_Female_06.jpg'
import women12 from '../../assets/img/Front_Photo_Female/Front_Photo_Female_07.jpg'
import women13 from '../../assets/img/Front_Photo_Female/Front_Photo_Female_08.jpg'
import women14 from '../../assets/img/Front_Photo_Female/Front_Photo_Female4.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Shopsmall from './Shopsmall'
import { useState } from 'react'


const Shopslide = () => {

  

  

  const [cards,setCards] = useState([
    {
      id: 1,
      name: 'alexis mickinney',
      content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!',
      photo: women6,
    },
    {
      id: 2,
      name: 'alexis mickinney2',
      content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!',
      photo: women7,
    },
    {
      id: 3,
      name: 'alexis mickinney3',
      content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!',
      photo: women8,
    },
    {
      id: 4,
      name: 'alexis mickinney3',
      content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!',
      photo: women9,
    },
    {
      id: 5,
      name: 'alexis mickinney3',
      content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!',
      photo: women10,
    },
    {
      id: 6,
      name: 'alexis mickinney3',
      content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!',
      photo: women11,
    },{
      id: 7,
      name: 'alexis mickinney3',
      content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!',
      photo: women12,
    },{
      id: 8,
      name: 'alexis mickinney3',
      content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!',
      photo: women13,
    },
    {
      id: 9,
      name: 'alexis mickinney3',
      content: 'My first visit and experience was pure bliss.The beautiful and serene environment makes you feel peaceful the moment you enter.The service is excellent!',
      photo: women14,
    },
  ]);

  return (
    <>
   
    <section >
      <div className="text-center  mt-[100px]">
        <h2 className="uppercase text-cus-primary text-3xl font-bold mb-3">Shop by</h2>
        <div className="flex justify-center items-center">
          <div className=" flex items-center p-3 mx-11 bg-cus-primary rounded-lg space-x-4 text-white">
            <span>Colors,</span>
            <span>Category,</span>
            <span>Gender,</span>
            <span>Specification,</span>
          </div>
        </div>
       
      </div>
    </section>
    <Swiper  className='md:mb-[100px]'
        effect={'coverflow'}
        initialSlide={3}
        grabCursor={true}
       // centeredSlides={true}
        loop={true}
        slidesPerView={1}
        //onActiveIndexChange={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier:1 ,
        }}
        breakpoints= {{
          // when window width is >= 320px
          0: {
            slidesPerView:1,
            spaceBetween: 50
          },
          // when window width is >= 768px
          768: {
            slidesPerView:1.9,
            spaceBetween: 60
          },
          1024:{
              slidesPerView:3,
              spaceBetween:50
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView:3.5 ,
            spaceBetween:50
          },
          1536:{
            slidesPerView:5,
            spaceBetween:50
          },
          
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        
      >
         {cards?.map((card) =><>
                             <SwiperSlide className="flex justify-center items-center mt-11 ">
                               <Shopsmall  key={card.id} {...card}/>
                             </SwiperSlide>
                             </>
          )}
         <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow w-11 h-5 ">
            {/* <AiOutlineArrowLeft /> */}
          </div>
          <div className="swiper-button-next slider-arrow w-11 h-5">
            {/* <AiOutlineArrowRight/>  */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
        </Swiper>  
        </>
        
  )
}


export default Shopslide