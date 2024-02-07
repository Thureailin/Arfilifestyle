import { Link } from "react-router-dom";

const Shopmen = (props) => {

    // function changeBackground(e) {
    //     e.target.style.backgroundImage =`url(${men1})`;
    //   }
    // function firstImage(e) {
    //     e.target.style.backgroundImage = `url(${img})`;
    // }  /

      
    const {id,subcategory_name,photo} = props;
    
    const name = subcategory_name.split("%20");
    console.log(subcategory_name.split("%20"),"split")
    return (
      


     
        
      <div className=" rounded flex flex-col gap-10 bg-primary-content">
       <div 
     className=" group relative    shadow-gray-700 " key={id}>
             <Link to={`/men/Item/${subcategory_name}`}>      {/* h-[300px] mb-1  2xl:w-[400px] w-[270px]  sm:h-[270px]  2xl:h-[500px]  md:w-[270px] md:h-[350px] lg:w-[300px] lg:h-[400px] xl:w-[300px]  */}
      <div className="shadow-lg rounded-sm w-[200px] h-[300px]   bg-[length:100%_100%]    border" alt="" style={{ backgroundImage: `url(${photo})` }} ></div>
    </Link> 

     <div className="mt-5"> 
     <p className="text-left font-bold text-cus-primary uppercase ml-2 text-[18px] ">{subcategory_name}</p> 
   
     </div> 
   </div> 
   </div>  
      
    

  );
}

//         <>
//  <div className=" rounded flex flex-col gap-10 bg-primary-content   ">
//       <div 
//     className=" group relative    shadow-gray-700 " key={id}>
//             <Link to={`/men/collection/${id}`}>
//      {/* h-[300px] mb-1  2xl:w-[400px] w-[270px]  sm:h-[270px]  2xl:h-[500px]  md:w-[270px] md:h-[350px] lg:w-[300px] lg:h-[400px] xl:w-[300px]  */}
//      <div className="shadow-lg rounded-sm w-[300px] h-[400px]   bg-[length:100%_100%]    border" alt="" style={{ backgroundImage: `url(${nayblue})` }} ></div>
//     </Link> 

//      <div className="mt-5"> 
//      <p className="text-left font-bold text-cus-primary uppercase ml-2 text-[18px] ">{subcategory_name}</p> 
   
//      </div> 
//    </div> 
//    </div>  

  
//   </>
   

export default Shopmen