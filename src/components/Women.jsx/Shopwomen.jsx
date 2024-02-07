// import { useState } from "react";
import { Link } from "react-router-dom"
import img1 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-07.png"
import img2 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-08.png"
import img3 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-09.png"
import img4 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-10.png"
import img5 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-11.png"
import img6 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-12.png"
// import img7 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-13.png"
// import img8 from "../../assets/img/Shop By Color Female (320.09 x 424.24)/Shop By Color Resize-14.png"
import { useState } from "react"



// import nayblue from "../..//assets/img/shopbycolor/NAVY.webp"
// import { Carousel } from 'flowbite-react';


const Shopwomen = (props) => {
  // console.log(img1)
  // 
  
  // console.log(cards?.map((card)=>card.img))

  // console.log(cards?.map((card)=>card.img))
  //  console.log(cards?.map((card)=>card.img.replace(/"/g, '')));
// const [image,setImage] =useState([]);
// setImage(dataImg?.map((i)=>i))
// console.log(image.i)
//     function changeBackground(e) {
//         e.target.style.backgroundImage =`url(${men1})`;
//       }
//     function firstImage(e) {
//         e.target.style.backgroundImage = `url(${img})`;
//     }  

      
    const {id,subcategory_name,photo} = props;
  return (
    <>
        {/* <img src={cards?.card.img}/>  */}
        
 <div  className=" rounded flex flex-col gap-10 bg-primary-content   ">
 <div 
className=" group relative    shadow-gray-700 rounded-sm  " key={id} >
       <Link to={`/women/Item/${subcategory_name}`}>   
          {/* h-[300px] mb-1  2xl:w-[400px] w-[270px]  sm:h-[270px]  2xl:h-[500px]  md:w-[270px] md:h-[350px] lg:w-[300px] lg:h-[400px] xl:w-[300px]  */}
{/* <div className="shadow-lg rounded-sm w-[200px] h-[300px]   bg-[length:100%_100%]    border" alt="" style={{ backgroundImage: `url(${img}})` }} ></div> */}
{/* <img src={img} alt=""/> */}
{/* <img src={fe} alt=""/> */}
<img src={photo} className="w-[200px] h-[300px]  shadow-lg"/>
</Link> 

<div className="mt-5"> 
<p className="text-left font-bold text-cus-primary uppercase ml-2 text-[18px] ">{subcategory_name}</p> 
</div> 
</div> 
</div> 
      

     
   </>
  )
}

export default Shopwomen;