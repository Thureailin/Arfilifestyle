import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import men1 from '../../assets/img/Front_Photo_Male/Front_Photo_Male-02.jpg'
import men2 from '../../assets/img/Front_Photo_Male/Front_Photo_Male-03.jpg'
import men3 from '../../assets/img/Front_Photo_Male/Front_Photo_Male-04.jpg'
import men4 from '../../assets/img/Front_Photo_Male/Front_Photo_Male-05.jpg'
import men5 from '../../assets/img/Front_Photo_Male/Front_Photo_Male-06.jpg'
import men6 from '../../assets/img/Front_Photo_Male/Front_Photo_Male.jpg'



// //use import react
import { useState } from 'react';
import Herosmall from './Herosmall';


const Heroslide = () => {



  const [cards, setCards] = useState([
    {
      id: 1,
      photo: men1
    },
    {
      id: 2,
      photo: men2
    },
    {
      id: 3,
      photo: men3
    },
    {
      id: 4,
      photo: men4
    },
    {
      id: 6,
      photo: men5
    },
    {
      id: 7,
      photo: men6
    },


  ]);

  return (


    <Swiper className='mb-11 '
      effect={'coverflow'}
      //initialSlide={3}
      grabCursor={true}
      // centeredSlides={true}
      loop={true}
      slidesPerView={1}
      //onActiveIndexChange={1}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false
      }}
      breakpoints={{
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 50
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1.9,
          spaceBetween: 60
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        // when window width is >= 1280px
        1280: {
          slidesPerView: 3.5,
          spaceBetween: 50
        },
        1536: {
          slidesPerView: 5,
          spaceBetween: 50
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
      {cards?.map((card, index) => <>
        <SwiperSlide key={card.photo} className="flex justify-center items-center mt-11">
          <Herosmall key={card.id} {...card} />
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

  )
}

export default Heroslide