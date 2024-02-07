import { useEffect, useState } from "react";
import men1 from "../../assets/img/Page_2/Menm_1.png"
import men2 from "../../assets/img/Page_2/Men_2.png"
import men3 from "../../assets/img/Page_2/Men_3.png"
import banner2 from "../../assets/img/home/home2/Website Bannar 5.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Mensmall from "./Mensmall";
import Shopmen from "./Shopmen";
const Menslide = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      img: men1,
    },
    {
      id: 2,
      img: men2,
    },
    {
      id: 3,
      img: men3,
    },
  ]);



  const [colors,setColors] = useState();
  const url = useSelector(state=>state.cart.url)

  console.log(url)
  useEffect(() => {
      fetchProduct();
    }, []);

    
  
    const fetchProduct = async () => {
      const api = await fetch(url+'/api/subcategory_all');
      const {data} = await api.json();
      const filterColor = data.filter(item=>item.category_name == "male")
        console.log("fit",filterColor)
      setColors(filterColor);
      console.log("data",data) 
     
    };
   
  return (
    <>
      {/* <Swiper
        effect={"coverflow"}
        initialSlide={1}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
        }}
        breakpoints={{
          // when window width is >= 320px
          0: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 50,
          },
          1536: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {cards?.map((card) => (
          <>
            <SwiperSlide className="flex justify-center items-center mt-11">
              <Mensmall key={card.id} {...card} />
            </SwiperSlide>
          </>
        ))}
        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow w-11 h-5 ">
            {/* <AiOutlineArrowLeft /> */}
          {/* </div> */}
          {/* <div className="swiper-button-next slider-arrow w-11 h-5"> */}
            {/* <AiOutlineArrowRight/>  */}
          {/* </div> */}
           <div className="swiper-pagination"></div>
        {/* </div> */}
      {/* </Swiper>  */}
      <section>
        <div className="">
          <img src={banner2} alt="" className="w-full md:h-[550px] h-[300px] lg:h-[550px] xl:h-[550px] 2xl:h-[550px]"/>
       
        </div>
      </section>
      <section className="">
        
       <h2 className="ml-[120px] lg:ml-[15px] font-bold text-[28px] text-cus-primary mt-5">Shop By Color</h2>
        

        <div className="flex flex-wrap xl:gap-8 sm:gap-2  md:gap-8  lg:gap-8 2xl:gap-8 mt-11 justify-center">
          {colors?.map((color) => {
            return <Shopmen key={color.id} {...color} />;
          })}
        </div>
        
      </section>
    </>
  );
};

export default Menslide;
