import { useEffect, useState } from "react";
import women1 from "../../assets/img/Page_3/Women_1.png";
import women2 from "../../assets/img/Page_3/Women_2.png";
import women3 from "../../assets/img/Page_3/Women_3.png";
import banner1 from "../../assets/img/home/home2/Website Bannar 3.png"
// import color1 from "../../assets/img/shopbycolor/BLACK.webp";
// import color2 from "../../assets/img/shopbycolor/NAVY.webp";
// import color3 from "../../assets/img/shopbycolor/GRAPHITE.webp";
// import color4 from "../../assets/img/shopbycolor/Espresso.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import {useSelector} from "react-redux";
import img1 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-14.png"
import img2 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-15.png"
import img3 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-12.png"
import img4 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-10.png"
import img5 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-07.png"
import img6 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-11.png"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Slidesmall from "./Slidesmall";
import Shopwomen from "./Shopwomen";

const Slide = () => {
  const url = useSelector(state=>state.cart.url)
  // const [fe,setFe] = useState('')
  const [cards, setCards] = useState([
    {
      id: 1,
      img: women1,
    },

    { 
        id: 2,
         img: women2
     },

    {
      id: 3,
      img: women3,
    },
  ]);
  const female = [
    img1,img2,img3,img4,img5,img6
  ]
  // const female =[
  //   img1,img2,img3,img4,img5,img6
  // ]
  // const f = female.map((f)=>f)
  // console.log(f)
  // setFe(f)
  
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const api = await fetch(url+"/api/subcategory_all");
    const {data} = await api.json();
    const filterColor = data.filter(item=>item.category_name == "female")
    console.log(filterColor)
    setColors(filterColor);
          // eslint-disable-next-line no-unused-vars
          // setColors(prevValue => {
          //   return {
          //     ...data,
          //     image: cards
          //   }
            
          // });
          // console.log(colors) 

  };

   
  return (
    <>
    {/* <Swiper 
        effect={'coverflow'}
        initialSlide={1}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
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
              slidesPerView:2.5,
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
                               <Slidesmall  key={card.id} {...card}/>
                             </SwiperSlide>
                             </>
          )}
        <div className="slider-controller ">
          <div className="swiper-button-prev slider-arrow w-11 h-5 ">
            {/* <AiOutlineArrowLeft /> */}
          {/* </div> */}
          {/* <div className="swiper-button-next slider-arrow w-11 h-5"> */}
            {/* <AiOutlineArrowRight/>  */}
          {/* </div> */}
          {/* // <div className="swiper-pagination"></div> */}
        {/* // </div> */}
        {/* </Swiper>    */}

        <section>
          <div className="  ">
            <img src={banner1} alt="" className="w-full h-[300px] md:h-[550px] lg:h-[550px] xl:h-[550px] 2xl:h-[550px]"/>
          </div>
        </section>
    <section >
    <section className="mt-5">
        
        <h2 className="ml-[100px] lg:ml-[30px] font-bold text-[30px] text-cus-primary mt-5">Shop By Color</h2>

      
              
         <div className="flex flex-wrap xl:gap-8  sm:gap-2  md:gap-8  lg:gap-8 2xl:gap-8 mt-10 justify-center" >
          
         
           {colors?.map((color,index) => {
       
             return <Shopwomen key={color.id} img={female[index]}  {...color}/>;
           })}
       
         </div>
         
        
         
       </section>
    </section>
    </>
  );
};

export default Slide;
