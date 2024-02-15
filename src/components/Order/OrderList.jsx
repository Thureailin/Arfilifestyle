import { Table } from "flowbite-react"
// import url  from "../../assets/img/New folder/mensmall2.avif"
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
// import { Tab } from "@mui/material";


const   OrderList = () => { 
  // const path = `http://ecommerceapp.arfilifestyle.com/ecommerce/items/`;

  const params = useParams();
  const [details,setDetails] =useState({});
  const url = useSelector(state=>state.cart.url)
  const fetchProduct = async () => {
    await axios.get(url+`/api/order/detail/${params.id}`).then(result=>{
      console.log("detail",result.data.data)
      setDetails(result.data.data);
     
    });
  
   
   };

  useEffect(() => {
    fetchProduct();
  }, []);

  



  return (
    
    <>
    <div className="">

    <div className="mt-5">
        <div className="flex justify-around items-center">
        <h2 className="font-bold md:text-[25px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] text-[20px] text-cus-primary">My Order Detail</h2>
        </div>


        <div className="sm:hidden lg:hidden md:hidden xl:hidden 2xl:hidden">
            <div className="ml-[50px] mt-5">
              <div className="">
                  <span className="mx-8 text-cus-primary font-bold">Voucher Code ::</span> <span className="font-bold text-center">{details.order_code}</span>
                  </div>
                  <div className="">
                  <span className="mx-8 text-cus-primary font-bold">Voucher Name ::</span> <span className="font-bold">{details.order_date}</span>
                  </div>
                  <div className="">
                  <span className="mx-8 text-cus-primary font-bold">Total Qty: ::</span> <span className="font-bold">{details.total_quantity}</span>
                  </div>
                  <div className="">
                  <span className="mx-8 text-cus-primary font-bold">Total Amount ::</span> <span className="font-bold"> {details.total_amount}</span>
                  </div>
                  <div className="">
                  <span className="mx-8 text-cus-primary font-bold">Customer Name ::</span> <span className="font-bold">{details.customer_name} </span>
                  </div>
                  <div className="">
                  <span className="mx-8 text-cus-primary font-bold">Customer Phone: ::</span> <span className="font-bold">{details.customer_phone}</span>
                  </div>
                  <div className="">
                  <span className="mx-8 text-cus-primary font-bold">Delivery Address:  ::</span> <span className="font-bold">{details.deliver_address}</span>
                  </div>
                  <div className="">
                  <span className="mx-8 text-cus-primary font-bold">Delivery fee:::</span> <span className="font-bold">{details.delivery_fee}</span>
                  </div>
                  
                 
                  
            </div>
        </div>
        <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex  hidden shadow-lg container w-[800px]    mt-11 border-[1px] rounded-sm ">
         <div className=" flex justify-between  items-center">
         
            
            
              <div className="text-md  sm:ml-[100px] -ml-[20px] mx-8 my-8 font-bold text-cus-primary ">
                  <p >Voucher Code:    <span className="text-black">{details.order_code}</span>   </p>
                  <p className="mt-3">Voucher Date: <span className="text-black">  {details.order_date} </span>  </p>
                  <p className="mt-3">Total Qty: <span className="text-black ">{details.total_quantity}</span>   </p>
                  <p className="mt-3">Total Amount:<span className="text-black">   {details.total_amount}</span> </p>
              </div>
     
          
          <div className="text-md  font-bold text-cus-primary ">
                  <p>Customer Name:  <span className="text-black">{details.customer_name} </span> </p>
                  <p className="mt-3">Customer Phone:   <span className="text-black">{details.customer_phone} </span></p>
                  <p className="mt-3">Delivery Address:   <span className="text-black">{details.deliver_address} </span></p>
                  <p className="mt-3">Delivery fee: <span className="text-black">{details.delivery_fee} </span></p>
                  
              </div>
            
         </div>
         </div>
    </div>
   
   
    </div>
    

   
    <div className="mt-5  sm:block md:block lg:block xl:block 2xl:block">
    <div className="flex justify-center items-center before:">
    <h2 className="font-bold text-xl text-cus-primary ">My Product List</h2>
    </div> 
 <div className="lg:my-11 xl:my-11 2xl:my-11 my-2 md:my-11 overflow-x-scroll"> 
  < Table className="lg:w-[1005px]  2xl:w-[1400px] xl:w-[1200px]  xl:mx-[80px] lg:ml-[20px] my-11">
          <Table.Head className="uppercase font-bold text-[15px]">
            <Table.HeadCell >Product</Table.HeadCell>
            {/* <Table.HeadCell className="">Unit Name</Table.HeadCell>
  
  
            <Table.HeadCell className="">Unit Price</Table.HeadCell> */}
            <Table.HeadCell className="">Item Name</Table.HeadCell>
            <Table.HeadCell className="">Color</Table.HeadCell>
            <Table.HeadCell className="">Unit Name</Table.HeadCell>
            <Table.HeadCell className="">Size</Table.HeadCell>
            <Table.HeadCell className="">Unit Price</Table.HeadCell>
            <Table.HeadCell>Qty</Table.HeadCell>
            <Table.HeadCell>Price Total</Table.HeadCell>
       


          </Table.Head>
          <Table.Body className="divide-y ">
           { details.counting_unit_ecommerce_orders?.map((i)=>
            
           <>
  <Table.Row className="bg-white dark:border-gray-700 font-bold dark:bg-gray-800">
              
  <Table.Cell className="whitespace-nowrap font-medium text-gray-900  dark:text-white">
    <div className="flex  items-center text-[15px]">
    <img
      src={i.photo}
      alt=""
      className="rounded-lg mr-8 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] inline-block "
    />
   
    
    
    </div>
  </Table.Cell>
  <Table.Cell>
   {i.item_name} 
    </Table.Cell>
  <Table.Cell>
   {i.subcategory_name} 
    </Table.Cell>
  <Table.Cell>{i.unit_name}</Table.Cell>
  <Table.Cell>{i.size}</Table.Cell>
<Table.Cell >{i.price - i.discount_price }</Table.Cell>
  <Table.Cell>
  <div className='flex flex-col items-center'>
<p  className='text-secondary cursor-pointer'>
{i.quantity}
</p>

</div>
  </Table.Cell>
  <Table.Cell>{i.item_total_price -( i.quantity * i.discount_price )}</Table.Cell>

</Table.Row> 
</>
           )} 
              
          </Table.Body>
        </Table>
         
      </div>
       
 </div>
</> 
   )
}


export default OrderList