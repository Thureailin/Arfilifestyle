// import { Link } from "react-router-dom";

// import { useEffect, useState } from "react";
// const WomenItems = (props) => {
//   const [sizes,setSizes] = useState([]);
//   useEffect(() => {
//       fetchSize();
//     }, []);
 

//     const fetchSize = async ()=>{
//       const api = await fetch(`http://ecommerceapp.arfilifestyle.com/api/size/list`);
//       const {data} = await api.json();
//       setSizes(data)
//       console.log(data)
      
//     }
//     const {id,item_name,subcategory_id,unit_name,photo_path,selling_price} = props;
//     const itemImage = `http://ecommerceapp.arfilifestyle.com/ecommerce/items/${photo_path}`;
//     console.log(itemImage)
//   return (
//     <section className='m-2 lg:ml-[80px] '>
//     <div className='mt-5 ' key={id}>
//        <div className='mb-8 ml-[20px] '>
//            <h2 className='font-bold text-[23px] text-cus-primary uppercase '>{unit_name}</h2>
//        </div>
//        <div className='mx-[35px] ml-[60px] grid grid-cols-1 sm:gird sm:grid-cols-2 md:grid md:grid-cols-3  lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-4  gap-3'>
//            <div className=' group relative'>
//            <Link to={`/shop/women/${id}/${subcategory_id}`}>
//                <img src={itemImage} className='w-[362.8px] h-[370px]'/>
//                </Link>
//                <div className='font-bold'>
//                <p className='mb-5 text-center text-cus-primary mt-2'>{item_name}</p>
//                </div>
//                {sizes?.map((size=>{
//                         return(
//                           <>
//                           <div className="flex bg-gray-100 absolute opacity-0 group-hover:opacity-100  top-[280px]">
//                          <div className="text-center mb-2">
//                          <button className="bg-white text-black border rounded-md border-black py-1 uppercase font-bold px-4 mt-2 mr-2 ">{sizes[0].size_name}</button>
//                          <button className="bg-white text-black border rounded-md border-black py-1 uppercase font-bold px-4 mt-2 mr-2 ">{sizes[1].size_name}</button>
//                          <button className="bg-white text-black border rounded-md border-black py-1 uppercase font-bold px-4 mt-2 mr-2 ">{sizes[2].size_name}</button>
//                          <button className="bg-white text-black border rounded-md border-black py-1 uppercase font-bold px-4 mt-2 mr-2 ">{sizes[3].size_name}</button>
//                          <button className="bg-white text-black border rounded-md border-black py-1 uppercase font-bold px-4 mt-2 mr-2 ">{sizes[4].size_name}</button>
//                          <button className="bg-white text-black border rounded-md border-black py-1 uppercase font-bold px-4 mt-2 mr-2 ">{sizes[5].size_name}</button>
//                          <button className="bg-white text-black border rounded-md border-black py-1 uppercase font-bold px-4 mt-2 mr-2 ">{sizes[6].size_name}</button>
//                          </div>
//                          </div> 

//                          </>
//                         )
//                        }))} 
//           </div> 
        
//        </div>
//    </div> 
// </section>
//   )
// }

// export default WomenItems