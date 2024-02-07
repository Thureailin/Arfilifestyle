import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const WomenItem = () => {
    const itemImage = `http://ecommerceapp.arfilifestyle.com/`;
    const url = useSelector(state=>state.cart.url)
    const params = useParams()
    const [item,setItems] = useState();
    const [isLoading,setLoading] = useState(true);
    const [nays,setNays] = useState();
    const navigate  = useNavigate()
    useEffect(() => {
        fetchProduct();
      
      }, []);
    const fetchProduct = async () => {
        const api = await fetch(url+"/api/item/lists");
        const {data} = await api.json();
        setItems(data);
        console.log(params.subcategory,"sub") 
       
            const filterNay = data.filter(list=>list.subcategory_name === params.subcategory && list.category_name ==="female")
            setNays(filterNay)
            console.log(filterNay)
            setLoading(false)
          
       
      };
      const gotolink= (id,subcategory)=>{
            navigate(`/shop/women/${id}/${subcategory}`)
      }
      if(isLoading){
        return <div className="text-center text-[20px] text-cus-primary">Checking Stock..........</div>
      }
      
      return (
        <>
            {nays ?(
            nays.map((result)=>(
            <div key={nays.id}>
                <section className='mx-2 lg:ml-[80px]'>
                 {/* <img src={result.photo_path} className="w-[500px] h-[500px]" onClick={()=>gotolink(result.subcategory_name)}/>
                    <h2>{result.item_name}</h2> */}
                    <section className='m-2 lg:ml-[80px] '>
     <div className='mt-5 ' key={result.id} >
         <div className='mb-8 ml-[20px] '>
          <h2 className='font-bold text-[23px] text-cus-primary uppercase'>{result.item_name}</h2>
        </div> 
        <div className='mx-[35px] ml-[60px] grid grid-cols-1 sm:gird sm:grid-cols-2 md:grid md:grid-cols-3  lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-4  gap-3'>
            <div className=' group relative'>
       
                <img src={itemImage + result.photo_path} className='w-[362.8px] h-[370px] shadow-lg rounded-md 'onClick={()=>gotolink(result.id,result.subcategory_id)}/>
                
                <div className='font-bold'>
                <p className='mb-5 text-cus-primary mt-2 text-center'>{result.item_name}</p>
                </div>
                      

           </div> 
         
        </div>
    </div> 
</section>
</section>
            
             </div>
             ))
             
            ):(
            <p>There is No Product for these Color</p>
            
      )};
      </>
)}

export default WomenItem
