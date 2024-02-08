
// import { addToCart } from "../features/services/cartSlice";
// import { useDispatch, useSelector } from "react-redux";


// import { useParams } from "react-router-dom";

// import { useEffect, useState } from "react";



// const WomenShopdetail = () => {
 
//   const url = useSelector((state) => state.cart.url);
//   const dispatch = useDispatch();
//   const params = useParams();
//   const [details,setDetail] = useState([]);
//   const [color,setColor] = useState([]);
//   const [fi,setFi] = useState([])
//   const [notColor,setNotColor] =useState(null)
  
  
//   let [bigImage,setBigImage] = useState(null)
//   const [fico,setFiCo] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  
//   console.log(params.id)
//   useEffect(() => {
//     setIsLoading(false);

//     getPhoto()
//     handleChooseColor()
//     getProduct();
//     getSize();
//     getColor()
//   }, []);
  
//   const handleChangeImage = (imageUrl,flag,width,style,color)=>{
   
//     if(flag =="chooseColor"){
//       console.log(flag)
//       setBigImage(imageUrl)
     
//     }
//     else {    
//       setNotColor(imageUrl)
//     }
//     const element = document.getElementById('myElement')
//     if(element){
//       element.style.border = `${width}px ${style} ${color}`
//     }
//   }
//   const handleChooseColor = async(id) => {
//     const api = await fetch(url + `/api/countingunit/list`);
//     const { unitlists } = await api.json();
//     const filterColor = unitlists.filter(item=>item.subcategory_id == id && item.category_name == "female" && item.item_name == fi.item_name && item.size_id == localStorage.getItem('size') )
//     console.log("fite",filterColor)
//     console.log("sizeid",localStorage.getItem('size'))
//     if (filterColor.length > 0) {
//       setFiCo(filterColor);
//     }
   
    


//   }
//  console.log("fi",fico)
//   const getPhoto = async ()=>{
//     const api = await fetch(url + `/api/countingunit/list`);
//     const { unitlists } = await api.json();
//     let detailPhotos=  unitlists.filter(list=> list.item_id == params.id && list.subcategory_id == params.subcategory && list.category_name == "female" )
//     setDetail(detailPhotos)
   


//   }
//   const getProduct = async (sizeid) => {
//     try {
      
//       const api = await fetch(url + `/api/countingunit/list`);
//       const { unitlists } = await api.json();
//       // console.log("product",unitlists)
//       const productFilter =  unitlists.filter(list=>list.size_id === sizeid && list.item_id == params.id && list.subcategory_id == params.subcategory && list.category_name == "female" )
//       console.log("filter",productFilter)
//       setFi(productFilter)
//       localStorage.setItem("size",sizeid)
//       console.log("state",productFilter)
//       // return new Promise((resolve) => {
//       //   // Simulating an API call or fetching data
//       //   setTimeout(() => {
//       //     // Simulated data (replace with your actual data structure)
//       //     const simulatedData = [{ item_id: 1, /* other details */ }];
//       //     resolve(simulatedData);
//       //   }, 2000); // Simulating a 2-second delay
//       // });
 
//   //  setDetails(productFilter)
//       // eslint-disable-next-line no-unused-vars
//       setFi(prevValue => {
//         return {
//           ...productFilter[0],
          
//           quantity: 1
//         }
        
//       });
//       setIsLoading(false)
      
//       console.log("usestatedetail",fi) 
//     }catch(error){
//       console.error('Error fetching data:', error);
//       setIsLoading(false)
      
//     }
   
//   };
//   // console.log("sizeid",ssid)
//   const getColor = async () => {
//     const api = await fetch(url+'/api/subcategory_all');
//     const {data} = await api.json();
//     const filterColor = data.filter(item=>item.category_name == "female")
//       console.log("fit",filterColor)
//     setColor(filterColor);
//     setIsLoading(false)
   
//   };
  
  

  
//   const getSize = async () => {
//     const api = await fetch(url + `/api/size/list`);
//     const { data } = await api.json();
//     setSizes(data);
//     setIsLoading(false)
//     // console.log(data)
//   };

 
    
  
//   // if(isLoading){
//   //   return <div className="text-cus-primary font-bold text-center text-[20px]">Checking Stock.........</div>
//   // }
 
//   // let content;

 
//    if (isLoading) {
//      return <div className="text-cus-primary font-bold text-[30px]">Checking Stock.........{console.log("hi")}</div>;
//    } 
//     else if(details.length === 0){
//       return (
//       <div className="text-center h-[100px] mt-11" >
//         <span className="text-cus-primary font-bold text-[30px]">Checking Stock.......</span>
//       </div>
//       );
//     }
//      else{
//       return (
   
//         <>
//         <div className="lg:flex justify-around container mt-11 items-start">
//           <div className="lg:-ml-[100px] md:-ml-[50px]  sm:ml-[20px]">
      
//                            { fico && fico.length != 0 ?
//                         <div className="" key={fico[0].item_id}>
//                           <img
//                             src={ !bigImage ? fico[0].photo_body : bigImage}
//                             alt=""
//                             className=" md:mr-[150px] w-[300px]  lg:ml-[100px] ml-[40px]  xl:ml-[200px] rounded-md xl:w-[300px] h-[350px]"
//   />
                          
//                              <div className="text-center ml-[10px] mt-8 lg:ml-[10px] xl:ml-[150px] lg:mt-5 flex overflow-x-auto">
//                               {console.log("this is r",fico)}
//                               <img src={fico[0].photo_back} onClick={() => handleChangeImage(fico[0].photo_back,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={fico[0].photo_right} onClick={() => handleChangeImage(fico[0].photo_right,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={fico[0].photo_left} onClick={() => handleChangeImage(fico[0].photo_left,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={fico[0].photo_path} onClick={() => handleChangeImage(fico[0].photo_path,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={fico[0].photo_body} onClick={() => handleChangeImage(fico[0].photo_body,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>

//                             </div>
                          
                          
//                         </div>
//                         : details &&  details.length != 0 ?
//                         <div className="" key={details[0].item_id}>
//                           <img
//                             src={!notColor ? details[0].photo_body : notColor}
//                             alt=""
//                             className=" md:mr-[150px] w-[300px]  lg:ml-[100px] ml-[40px]  xl:ml-[200px] rounded-md xl:w-[300px] h-[350px]"
//   />
                          
//                              <div className="text-center ml-[10px] mt-8 lg:ml-[10px] xl:ml-[150px] lg:mt-5 flex overflow-x-auto">
//                               {console.log("this is r",details)}
//                               <img src={details[0].photo_back} onClick={()=>handleChangeImage(details[0].photo_back,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={details[0].photo_right} onClick={()=>handleChangeImage(details[0].photo_right,"1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={details[0].photo_left} onClick={()=>handleChangeImage(details[0].photo_left,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={details[0].photo_body} onClick={()=>handleChangeImage(details[0].photo_body,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={details[0].photo_path} onClick={()=>handleChangeImage(details[0].photo_path,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
//                             </div>
                          
                          
//                         </div>
//                         : ""
//                         }
                      
                  
//               </div>
       
        
//           <div className="md:mt-[1px] md:-ml-5 mt-[30px] sm:ml-[80px] lg:-mr-[80px] px-2">
//             <h1 className="font-extrabold text-[30px] uppercase ">
//               {details[0].item_name}
//             </h1>
//             <div className="flex  ">
//               <div className="mr-11">
//                 <p className="mt-5  font-semibold text-black text-[10px]">
//                   <span className="text-[20px]  font-bold">
//                     <span className="text-[18px] font-bold">Baht | </span>
//                     {(fi.selling_price === null || fi.selling_price === undefined) ? 0 : fi.selling_price}
//                   </span>
//                 </p>
//               </div>
//               <div className="">
//                 <p className="mt-5  font-semibold text-black text-[10px]">
//                   <span className="text-[20px]  font-bold">
//                     <span className="text-[18px] ">Stock | </span>
//                     {/* {fico.length != 0 ? */}
//                     {/* <span>{fico[0].current_quantity}</span> :  */}
//                     <span>{(fi.current_quantity == undefined)? 0: fi.current_quantity}</span>
//                     {/* } */}
//                      {/* {fico[0].current_quantity}
//                      {(fi.current_quantity === null || fi.selling_price === undefined) ? 0 : fi.current_quantity} */}
//                   </span>
//                 </p>
//               </div>
//             </div>
  
//             <div className="font-bold mb-1   mt-5">
//               <p>Size</p>
//             </div>
//             <div className="flex overflow-x-scroll">
//               {sizes.map((size) => {
//                 return (
//                   <>
//                     <div className="text-center mb-2 ">
//                       <button
//                         onClick={() => getProduct(size.id)}
//                         className="bg-white hover:bg-cus-primary text-black border rounded-md border-black py-1 uppercase font-bold px-4 mt-2 mr-1 "
//                       >
//                         {size.size_name}
//                       </button>
//                     </div>
//                   </>
//                 );
//               })}
//             </div>
//             <div className="mt-8 ">
//               <p className="uppercase font-bold mb-1">Color</p>
//               <div className="flex">
   
//                 {color && color.length != 0 ? 
//                    color.map(co => <>
//                    {console.log("color is ",co.id)}
//                    <p
//                           key={co.colour_code}
                         
//                           style={{
//                             backgroundColor: co.colour_code,
//                             width: 20,
//                             height: 20,
//                             borderRadius: "50%",
//                             border: 10,
//                             marginLeft: 6,
//                             cursor: "pointer",
//                           }}
//                           onClick={() => handleChooseColor(co.id, co.colour_code)
//                           }
//                         ></p>
                    
//                    </>)
//                    :
//                    ""}
//               </div>
//               <div className="mt-8">
//                 <p className="font-bold text-cus-primary">
//                   This is product Detail ......
//                 </p>
//               </div>
//               <div className="mt-11">
//                 <button
//                   className="uppercase bg-cus-primary font-bold py-2 text-white rounded-sm w-[200px]"
//                   onClick={() => dispatch(addToCart(fi))}
//                 >
//                   Add to Bag
//                 </button>
//               </div>
//             </div>
//           </div>
       
//           </div>
//         </>
//       );
     
//     }
      
   
//   // }

//   // return <>
//   //   {content}
//   // </>;
// };

// export default WomenShopdetail;

// import { addToCart } from "../features/services/cartSlice";
// import { useDispatch, useSelector } from "react-redux";


// import { useParams } from "react-router-dom";

// import { useEffect, useState } from "react";



// const Shopdetail = () => {
 
//   const url = useSelector((state) => state.cart.url);
//   const dispatch = useDispatch();
//   const params = useParams();
//   const [details,setDetail] = useState([]);
//   const [color,setColor] = useState([]);
//   const [fi,setFi] = useState([])
//   const [notColor,setNotColor] =useState(null)
  
  
//   let [bigImage,setBigImage] = useState(null)
//   const [fico,setFiCo] = useState([]);
//   const [sizes, setSizes] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  
//   console.log(params.id)
//   useEffect(() => {
//     setIsLoading(false);

//     getPhoto()
//     handleChooseColor()
//     getProduct();
//     getSize();
//     getColor()
//   }, []);
  
//   const handleChangeImage = (imageUrl,flag,width,style,color)=>{
   
//     if(flag =="chooseColor"){
//       console.log(flag)
//       setBigImage(imageUrl)
     
//     }
//     else {    
//       setNotColor(imageUrl)
//     }
//     const element = document.getElementById('myElement')
//     if(element){
//       element.style.border = `${width}px ${style} ${color}`
//     }
//   }
//   const handleChooseColor = async(id) => {
//     const api = await fetch(url + `/api/countingunit/list`);
//     const { unitlists } = await api.json();
//     const filterColor = unitlists.filter(item=>item.subcategory_id == id && item.category_name == "male" && item.item_name == fi.item_name && item.size_id == localStorage.getItem('size') )
//     console.log("fite",filterColor)
//     console.log("sizeid",localStorage.getItem('size'))
//     if (filterColor.length > 0) {
//       setFiCo(filterColor);
//     }


//   }
//  console.log("fi",fico)
//   const getPhoto = async ()=>{
//     const api = await fetch(url + `/api/countingunit/list`);
//     const { unitlists } = await api.json();
//     let detailPhotos=  unitlists.filter(list=> list.item_id == params.id && list.subcategory_id == params.subcategory && list.category_name == "male" )
//     setDetail(detailPhotos)
   


//   }
//   const getProduct = async (sizeid) => {
//     try {
      
//       const api = await fetch(url+`/api/countingunit/list`);
//       const { unitlists } = await api.json();
//       // console.log("product",unitlists)
//       const productFilter =  unitlists.filter(list=>list.size_id === sizeid && list.item_id == params.id && list.subcategory_id == params.subcategory && list.category_name == "male" )
//       console.log("filter",productFilter)
//       setFi(productFilter)
//       localStorage.setItem("size",sizeid)
//       console.log("state",productFilter)
//       // return new Promise((resolve) => {
//       //   // Simulating an API call or fetching data
//       //   setTimeout(() => {
//       //     // Simulated data (replace with your actual data structure)
//       //     const simulatedData = [{ item_id: 1, /* other details */ }];
//       //     resolve(simulatedData);
//       //   }, 2000); // Simulating a 2-second delay
//       // });
 
//   //  setDetails(productFilter)
//       // eslint-disable-next-line no-unused-vars
//       setFi(prevValue => {
//         return {
//           ...productFilter[0],
          
//           quantity: 1
//         }
        
//       });
//       setIsLoading(false)
      
//       console.log("usestatedetail",fi) 
//     }catch(error){
//       console.error('Error fetching data:', error);
//       setIsLoading(false)
      
//     }
   
//   };
//   // console.log("sizeid",ssid)
//   const getColor = async () => {
//     const api = await fetch(url+'/api/subcategory_all');
//     const {data} = await api.json();
//     const filterColor = data.filter(item=>item.category_name == "male")
//       console.log("fit",filterColor)
//     setColor(filterColor);
//     setIsLoading(false)
   
//   };
  
  

  
//   const getSize = async () => {
//     const api = await fetch(url + `/api/size/list`);
//     const { data } = await api.json();
//     setSizes(data);
//     setIsLoading(false)
//     // console.log(data)
//   };

 
    
  
//   // if(isLoading){
//   //   return <div className="text-cus-primary font-bold text-center text-[20px]">Checking Stock.........</div>
//   // }
 
//   // let content;

 
//    if (isLoading) {
//      return <div className="text-cus-primary font-bold text-[30px]">Checking Stock.........{console.log("hi")}</div>;
//    } 
//     else if(details.length === 0){
//       return (
//       <div className="text-center h-[100px] mt-11" >
//         <span className="text-cus-primary font-bold text-[30px]">Checking Stock.......</span>
//       </div>
//       );
//     }
//      else{
//       return (
   
//         <>
//         <div className="lg:flex justify-around container mt-11 items-start">
//           <div className="lg:-ml-[100px] md:-ml-[50px]  sm:ml-[20px]">
      
//                            { fico && fico.length != 0 ?
//                         <div className="" key={fico[0].item_id}>
//                           <img
//                             src={ !bigImage ? fico[0].photo_body : bigImage}
//                             alt=""
//                             className=" md:mr-[150px] w-[300px]  lg:ml-[100px] ml-[40px]  xl:ml-[200px] rounded-md xl:w-[300px] h-[350px]"
//   />
                          
//                              <div className="text-center ml-[10px] mt-8 lg:ml-[10px] xl:ml-[150px] lg:mt-5 flex overflow-x-auto">
//                               {console.log("this is r",fico)}
//                               <img src={fico[0].photo_back} onClick={() => handleChangeImage(fico[0].photo_back,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={fico[0].photo_right} onClick={() => handleChangeImage(fico[0].photo_right,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={fico[0].photo_left} onClick={() => handleChangeImage(fico[0].photo_left,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={fico[0].photo_path} onClick={() => handleChangeImage(fico[0].photo_path,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={fico[0].photo_body} onClick={() => handleChangeImage(fico[0].photo_body,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>

//                             </div>
                          
                          
//                         </div>
//                         : details &&  details.length != 0 ?
//                         <div className="" key={details[0].item_id}>
//                           <img
//                             src={!notColor ? details[0].photo_body : notColor}
//                             alt=""
//                             className=" md:mr-[150px] w-[300px]  lg:ml-[100px] ml-[40px]  xl:ml-[200px] rounded-md xl:w-[300px] h-[350px]"
//   />
                          
//                              <div className="text-center ml-[10px] mt-8 lg:ml-[10px] xl:ml-[150px] lg:mt-5 flex overflow-x-auto">
//                               {console.log("this is r",details)}
//                               <img src={details[0].photo_back} onClick={()=>handleChangeImage(details[0].photo_back,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={details[0].photo_right} onClick={()=>handleChangeImage(details[0].photo_right,"1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={details[0].photo_left} onClick={()=>handleChangeImage(details[0].photo_left,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={details[0].photo_body} onClick={()=>handleChangeImage(details[0].photo_body,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
//                               <img src={details[0].photo_path} onClick={()=>handleChangeImage(details[0].photo_path,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
//                             </div>
                          
                          
//                         </div>
//                         : ""
//                         }
                      
                  
//               </div>
       
        
//           <div className="md:mt-[1px] md:-ml-5 mt-[30px] sm:ml-[80px] lg:-mr-[80px] px-2">
//             <h1 className="font-extrabold text-[30px] uppercase ">
//               {details[0].item_name}
//             </h1>
//             <div className="flex  ">
//               <div className="mr-11">
//                 <p className="mt-5  font-semibold text-black text-[10px]">
//                   <span className="text-[20px]  font-bold">
//                     <span className="text-[18px] font-bold">Baht | </span>
//                     {(fi.selling_price === null || fi.selling_price === undefined) ? 0 : fi.selling_price}
//                   </span>
//                 </p>
//               </div>
//               <div className="">
//                 <p className="mt-5  font-semibold text-black text-[10px]">
//                   <span className="text-[20px]  font-bold">
//                     <span className="text-[18px] ">Stock | </span>
//                     {/* {fico.length != 0 ? */}
//                     {/* <span>{fico[0].current_quantity}</span> :  */}
//                     <span>{(fi.current_quantity == undefined)? 0: fi.current_quantity}</span>
//                     {/* } */}
//                      {/* {fico[0].current_quantity}
//                      {(fi.current_quantity === null || fi.selling_price === undefined) ? 0 : fi.current_quantity} */}
//                   </span>
//                 </p>
//               </div>
//             </div>
  
//             <div className="font-bold mb-1   mt-5">
//               <p>Size</p>
//             </div>
//             <div className="flex overflow-x-scroll">
//               {sizes.map((size) => {
//                 return (
//                   <>
//                     <div className="text-center mb-2 ">
//                       <button
//                         onClick={() => getProduct(size.id)}
//                         className="bg-white hover:bg-cus-primary text-black border rounded-md border-black py-1 uppercase font-bold px-4 mt-2 mr-1 "
//                       >
//                         {size.size_name}
//                       </button>
//                     </div>
//                   </>
//                 );
//               })}
//             </div>
//             <div className="mt-8 ">
//               <p className="uppercase font-bold mb-1">Color</p>
//               <div className="flex">
   
//                 {color && color.length != 0 ? 
//                    color.map(co => <>
//                    {console.log("color is ",co.id)}
//                    <p
//                           key={co.colour_code}
                         
//                           style={{
//                             backgroundColor: co.colour_code,
//                             width: 20,
//                             height: 20,
//                             borderRadius: "50%",
//                             border: 10,
//                             marginLeft: 6,
//                             cursor: "pointer",
//                           }}
//                           onClick={() => handleChooseColor(co.id, co.colour_code)
//                           }
//                         ></p>
                    
//                    </>)
//                    :
//                    ""}
//               </div>
//               <div className="mt-8">
//                 <p className="font-bold text-cus-primary">
//                   This is product Detail ......
//                 </p>
//               </div>
//               <div className="mt-11">
//                 <button
//                   className="uppercase bg-cus-primary font-bold py-2 text-white rounded-sm w-[200px]"
//                   onClick={() => dispatch(addToCart(fi))}
//                 >
//                   Add to Bag
//                 </button>
//               </div>
//             </div>
//           </div>
       
//           </div>
//         </>
//       );
     
//     }
      
   
//   // }

//   // return <>
//   //   {content}
//   // </>;
// };

// export default Shopdetail;
import axios from 'axios';
import { addToCart } from "../features/services/cartSlice";
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
const WomenShopdetail = () => {
  const [sizes, setSizes] = useState([]);
  const [color,setColor] = useState([]);
  const [product,setProduct] = useState([]);
  const [prosize,setProsize] = useState([]);
  const [filterItem,setFilterItem] = useState();
  const [notColor,setNotColor] =useState(null)
  let [bigImage,setBigImage] = useState(null)
  const URL = useSelector((state) => state.cart.url);
  const params = useParams();
  const dispatch = useDispatch();
 
  const getItem = async (id) => {
    try {
      const api = await fetch(URL + '/api/item/lists');
      const { data } = await api.json();
  
      const filteredItems = data
        .filter(item => item.subcategory_id === id && item.item_name === product[0].item_name)
        .map(i => i.id);
  
      setFilterItem(filteredItems);
      console.log("item_id",filterItem)
      
      

    } catch (error) {
      console.error('There was a problem with the request:', error);
    }
   
  };
  // const handleChooseColor = async(id)=>{
  //   console.log(id)
  //   localStorage.setItem("color_id",id)
  //   //
  // }
  localStorage.removeItem(["color_id","item_id"])
  
  const getProduct= async() =>{
    const url = URL +'/api/countingunit/list/filter/website'; // Replace with your API endpoint
  const data = {
    unit: [1,params.id],
    
  };
  axios.post(url, data)
    .then(response => {
     
     const product = response.data.unitlists
    // eslint-disable-next-line no-unused-vars
     setProduct(prevValue => {
      return {
        ...product,  
        quantity: 1
      }
      
    });
    })
    .catch(error => {
      console.error('There was a problem with the request:', error);
     
    });
  }
  const getProductWithSize= async(sizeid) =>{
   
    const url = URL +'/api/countingunit/list/filter/website'; 
    let data ;
    if(filterItem == null){
      data = {
        unit: [sizeid,params.id],
        
      };
    }else{
      data = {
        unit :[sizeid,filterItem]
      }
    }
 
  axios.post(url, data)
    .then(response => {
      const productbb = response.data.unitlists;

      // Assuming setProsize is a state-setting function that accepts a payload
          // eslint-disable-next-line no-unused-vars
      setProsize(prevValue => {
        return {
          ...productbb,
          quantity :1
         
        }
        
      });
    })
    .catch(error => {
      console.error('There was a problem with the request:', error);
      
    });
  }

  const getColor = async () => {
    const api = await fetch(URL+'/api/subcategory_all');
    const {data} = await api.json();
    const filterColor = data.filter(item=>item.category_name == "female")
    
    setColor(filterColor);
   
   
  };
  
  const handleChangeImage = (imageUrl,flag,width,style,color)=>{
   
    if(flag =="chooseColor"){
      console.log(flag)
      setBigImage(imageUrl)
     
    }
    else {    
      setNotColor(imageUrl)
    }
    const element = document.getElementById('myElement')
    if(element){
      element.style.border = `${width}px ${style} ${color}`
    }
  }
  
  const getSize = async () => {
    const api = await fetch( URL+ `/api/size/list`);
    const { data } = await api.json();
    setSizes(data);
    console.log("hi",sizes)
  };
  useEffect(() => {
    getSize();
    getProduct()
    getColor()
    // handleChooseColor()
  }, []);
  console.log(product,"products")
  console.log(prosize,"according size")
  return (
  //   <>
    
  //   {prosize && prosize.length == !0 ?
  //   <div className=''>
  //     <h1 className=''>{prosize[0].item_name}</h1>
  //     <h1>{prosize[0].selling_price}</h1>
  //     <h1>{prosize[0].current_quantity}</h1>
  //     <div className=''>
  //     <img src={prosize[0].photo_back} className='w-[250px] h-[250px]'/>
     
  //     </div>
  //     <div className='flex justify-around items-center w-[300px]'>
  //     <img src={prosize[0].photo_body} className='w-[100px] h-[100px]'/>
  //     <img src={prosize[0].photo_left} className='w-[100px] h-[100px]'/>
  //     <img src={prosize[0].photo_path} className='w-[100px] h-[100px]'/>
  //     </div>
  //    </div>
  //   :
  //   product && product.length == !0 ?
  //   <div className=''>
  //   <h1 className=''>{product[0].item_name}</h1>
  //   <h1>{product[0].selling_price}</h1>
  //   <h1>{product[0].current_quantity}</h1>
  //   <div className='flex justify-between items-center'>
  //   <img src={product[0].photo_back} className='w-[250px] h-[250px]'/>
  //     <img src={product[0].photo_body} className='w-[250px] h-[250px]'/>
  //     <img src={product[0].photo_left} className='w-[250px] h-[250px]'/>
  //     <img src={product[0].photo_path} className='w-[250px] h-[250px]'/>
  //   </div>
   
  //  </div>
  //  :
  //  <div className=''>
  //   <p>Loading..........</p>
  //  </div>
  // }
    
    
  //   <div className="flex overflow-x-scroll">
  //   {sizes.map((size) => {
  //     return (
  //       <>
  //         <div className="text-center mb-2 ">
  //           <button
          
            
  //             onClick={() =>getProductWithSize(size.id)}
  //             className="bg-white hover:bg-cus-primary text-black border rounded-md border-black py-1 uppercase font-bold px-4 mt-2 mr-1 "
  //           >
  //             {size.size_name}
  //           </button>
  //         </div>
  //       </>
  //     );
  //   })}
  // </div>
  // <div className="flex">
   
  //               {color && color.length != 0 ? 
  //                  color.map(co => <>
  //                  {console.log("color is ",co.id)}
  //                  <p
  //                         key={co.colour_code}
                         
  //                         style={{
  //                           backgroundColor: co.colour_code,
  //                           width: 20,
  //                           height: 20,
  //                           borderRadius: "50%",
  //                           border: 10,
  //                           marginLeft: 6,
  //                           cursor: "pointer",
  //                         }}
  //                         onClick={() =>getItem(co.id)
  //                         }
  //                       ></p>
                    
  //                  </>)
  //                  :
  //                  ""}
  //             </div>
  // </>
  <>
  <div className="lg:flex justify-around container mt-11 items-start">
    <div className="lg:-ml-[100px] md:-ml-[50px]  sm:ml-[20px]">

                     { prosize && prosize.length !== 0 ?
                  <div className="" key={prosize[0].item_id}>
                    <img
                      src={ !bigImage ? prosize[0].photo_body : bigImage}
                      alt=""
                      className=" md:mr-[150px] w-[300px]  lg:ml-[100px] ml-[40px]  xl:ml-[200px] rounded-md xl:w-[300px] h-[350px]"
/>
                    
                       <div className="text-center ml-[10px] mt-8 lg:ml-[10px] xl:ml-[150px] lg:mt-5 flex overflow-x-auto">
                        {console.log("this is r",prosize[0])}
                        <img src={prosize[0].photo_back} onClick={() => handleChangeImage(prosize[0].photo_back,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
                        <img src={prosize[0].photo_right} onClick={() => handleChangeImage(prosize[0].photo_right,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
                        <img src={prosize[0].photo_left} onClick={() => handleChangeImage(prosize[0].photo_left,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
                        <img src={prosize[0].photo_path} onClick={() => handleChangeImage(prosize[0].photo_path,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>
                        <img src={prosize[0].photo_body} onClick={() => handleChangeImage(prosize[0].photo_body,"chooseColor")}  className="w-[80px] h-[80px] lg:mx-0"/>

                      </div>
                    
                    
                  </div>
                  : product &&  product.length !== 0 ?
                  <div className="" key={product[0].item_id}>
                    <img
                      src={!notColor ? product[0].photo_path : notColor}
                      alt=""
                      className=" md:mr-[150px] w-[300px]  lg:ml-[100px] ml-[40px]  xl:ml-[200px] rounded-md xl:w-[300px] h-[350px]"
/>
                    
                       <div className="text-center ml-[10px] mt-8 lg:ml-[10px] xl:ml-[150px] lg:mt-5 flex overflow-x-auto">
                        {console.log("this is r",product)}
                        <img src={product[0].photo_back} onClick={()=>handleChangeImage(product[0].photo_back,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
                        <img src={product[0].photo_right} onClick={()=>handleChangeImage(product[0].photo_right,"1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
                        <img src={product[0].photo_left} onClick={()=>handleChangeImage(product[0].photo_left,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
                        <img src={product[0].photo_body} onClick={()=>handleChangeImage(product[0].photo_body,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
                        <img src={product[0].photo_path} onClick={()=>handleChangeImage(product[0].photo_path,"","1","solid","black")} className="w-[80px] h-[80px] lg:mx-0"/>
                      </div>
                    
                    
                  </div>
                  : ""
                  }
                
            
        </div>
 
  
    <div className="md:mt-[1px] md:-ml-5 mt-[30px] sm:ml-[80px] lg:-mr-[80px] px-2">
      {prosize && prosize.length !== 0 ? 
      <>
      
      <h1 className="font-extrabold text-[30px] uppercase ">
      {prosize[0].item_name}
    </h1>
    <div className="flex  ">
      <div className="mr-11">
        <p className="mt-5  font-semibold text-black text-[10px]">
          <span className="text-[20px]  font-bold">
            <span className="text-[18px] text-black font-bold">Baht | </span>
            {prosize[0].selling_price }
          </span>
        </p>
      </div>
      <div className="">
        <p className="mt-5  font-semibold text-black text-[10px]">
          <span className="text-[20px]  font-bold">
            <span className="text-[18px] ">Stock | </span>
            {/* {fico.length != 0 ? */}
            {/* <span>{fico[0].current_quantity}</span> :  */}
            <span>{prosize[0].current_quantity }</span>
            {/* } */}
             {/* {fico[0].current_quantity}
             {(fi.current_quantity === null || fi.selling_price === undefined) ? 0 : fi.current_quantity} */}
          </span>
        </p>
      </div>
    </div>
    </>
    : 
     product && product.length !== 0 ? 
     <>
     <h1 className="font-extrabold text-[30px] uppercase ">
     {product[0].item_name}
   </h1>
   <div className="flex  ">
     <div className="mr-11">
       <p className="mt-5  font-semibold text-black text-[10px]">
         <span className="text-[20px]  font-bold">
           <span className="text-[18px] text-black font-bold">Baht | </span>
           {product[0].selling_price }
         </span>
       </p>
     </div>
     <div className="">
       <p className="mt-5  font-semibold text-black text-[10px]">
         <span className="text-[20px]  font-bold">
           <span className="text-[18px] ">Stock | </span>
           {/* {fico.length != 0 ? */}
           {/* <span>{fico[0].current_quantity}</span> :  */}
           <span>{product[0].current_quantity }</span>
           {/* } */}
            {/* {fico[0].current_quantity}
            {(fi.current_quantity === null || fi.selling_price === undefined) ? 0 : fi.current_quantity} */}
         </span>
       </p>
     </div>
   </div>
   </>
    :""}
      
      <div className="font-bold mb-1   mt-5">
        <p>Size</p>
      </div>
      <div className="flex overflow-x-scroll">
        {sizes.map((size) => {
          return (
            <>
              <div className="text-center mb-2 ">
                <button
                  onClick={() => getProductWithSize(size.id)}
                  className="bg-white hover:bg-cus-primary text-black border rounded-md border-black py-1 uppercase font-bold px-4 mt-2 mr-1 "
                >
                  {size.size_name}
                </button>
              </div>
            </>
          );
        })}
      </div>
      <div className="mt-8 ">
        <p className="uppercase font-bold mb-1">Color</p>
        <div className="flex">

          {color && color.length != 0 ? 
             color.map(co => <>
             {console.log("color is ",co.id)}
             <p
                    key={co.colour_code}
                   
                    style={{
                      backgroundColor: co.colour_code,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: 10,
                      marginLeft: 6,
                      cursor: "pointer",
                    }}
                    onClick={() => getItem(co.id)
                    }
                  ></p>
              
             </>)
             :
             ""}
        </div>
        <div className="mt-8">
          <p className="font-bold text-cus-primary">
            This is product Detail ......
          </p>
        </div>
        <div className="mt-11">
          <button
            className="uppercase bg-cus-primary font-bold py-2 text-white rounded-sm w-[200px]"
            onClick={() => {
              const prosizeWithQuantity = {
                ...prosize[0],
                quantity :1
              };
              dispatch(addToCart(prosizeWithQuantity));
            }}          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
 
    </div>
  </>
  )
}

export default WomenShopdetail
