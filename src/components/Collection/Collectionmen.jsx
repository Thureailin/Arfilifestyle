// import top from '../../assets/img/shopbycolor/Black_Desktop.webp'

// import { useEffect, useState } from 'react'
// import MenItems from './MenItems'
// import { useParams } from 'react-router-dom'
// const Collectionmen = () => {

//     const [items,setItems]= useState([]);
//     const params = useParams()

//   useEffect(() => {
//       fetchProduct();
    
//     }, []);

//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     const fetchProduct = async () => {
//       const api = await fetch("http://ecommerceapp.arfilifestyle.com/api/category/item/list/1",requestOptions);
//       const {data} = await api.json();
//       //setItems(data);
//       console.log(data) 
//       console.log(params.category)
//       const filterNay = data.filter(list=>list.subcategory_name === params.category && list.category_name ==="male")
//       setItems(filterNay)
//       console.log(filterNay)
      
     
//     };
    
//   return (
//     <div>
//         <section>
//             <div className="">
//                 <img src={top} className='w-full h-[270px] sm:h-[370px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[620px]'/>
//             </div>
//         </section>
//         <section className='mx-2 lg:ml-[80px]'>
//         {items?.map((item) => {
          
//              return <MenItems key={item.id}   {...item}  />;
         
           
//           })}
//         </section>
//     </div>
//   )
// }

// export default Collectionmen