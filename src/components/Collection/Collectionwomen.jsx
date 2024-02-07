
// import top from '../../assets/img/shopbycolor/Black_Desktop.webp'

// import { useEffect, useState } from 'react'
// import WomenItems from './WomenItems'
// const Collectionwomen = () => {

//     const [items,setItems] = useState([])
//     useEffect(() => {
//         fetchProduct();
//       }, []);

//       const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
    
//       const fetchProduct = async () => {
//         const api = await fetch("http://ecommerceapp.arfilifestyle.com/api/category/item/list/2",requestOptions);
//         const  {data} = await api.json();
//         setItems(data);
//         console.log(data) 
       
//       };
//   return (

     
//     <div>
//     <section>
//         <div className="">
//             <img src={top} className='w-full h-[270px] sm:h-[370px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[620px]'/>
//         </div>
//     </section>
//     <section >
      
//     </section>

//     <section className='mx-2 lg:ml-[80px]'>
//         {items?.map((item) => {
//             return <WomenItems key={item.id} {...item} />;
//           })}
//         </section>
   
// </div>
//   )
// }

// export default Collectionwomen