import { Table } from "flowbite-react"
import { FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TrackOrder = () => {
  const url = useSelector(state=>state.cart.url)
  const [lists,setLists] = useState();
  const [filterPhone,setFilterPhone] = useState([]);
  const[filterOrder,setFilterOrder] = useState([]);
  const[response,setResponse] =useState();

  useEffect(() => {
    fetchProduct();
  }, []);

  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
  };
  const fetchProduct = async () => {
    const api = await fetch(url+"/api/track/order",requestOptions);
    const {data} = await api.json();
    console.log(data)
    setLists(data)
    console.log(lists?.map((list)=>{
      list.customer_phone
    }))
  
  };

  const filterPhoneNumber = ()=>{
    const filteredItems = lists.filter(list=>list.customer_phone === searchPhone.customer_phone);
      console.log(filteredItems)
     setFilterPhone(filteredItems)
  }

  const filterOrderCode = ()=>{
    const filterOrderCode = lists.filter(list=>list.order_code === searchOrder.order_code)
    setFilterOrder(filterOrderCode)
  }
  

  
  const [searchPhone,setSearchPhone] = useState({
   customer_phone : "",
   
  });
  const [searchOrder,setSearchOrder] = useState({
    order_code : "",
  })


  const handleInputChange = (e) => {
    const {name,value}= e.target;
    setSearchPhone({
      ...searchPhone,
      [name]: value,
     
    });
  }
  const handleInputChangeOrder = (e)=>{
    const {name,value} = e.target;
    setSearchOrder({
      ...searchOrder,
      [name]:value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    filterPhoneNumber(searchPhone)
    filterOrderCode(searchOrder)
    console.log(searchPhone,searchOrder)
    
  };

  return (
    <div>
        <div className="flex items-center justify-center my-11">
            <h2 className="font-bold text-[20px] text-cus-primary ">My Order List</h2>
        </div>
        <form className="md:flex xl:flex 2xl:flex lg:flex justify-center items-center block"
        onSubmit={handleSubmit}
        >
            <input type="text" className="w-[500px] rounded-md mx-2 cursor-pointer hidden md:flex lg:flex xl:flex 2xl:flex" placeholder="Search"/>
            <input type="text"
             placeholder="phone Number"
              className="lg:mx-2  mx-1 rounded-md"
              name="customer_phone"
              value={searchPhone.customer_phone}
              onChange={handleInputChange}

              />
            <input type="text" placeholder="orderCode" className="lg:mx-2 rounded-md"
              name="order_code"
              value={searchOrder.order_code}
              onChange={handleInputChangeOrder}
            />
            <button className="bg-cus-primary text-white px-4 py-2 rounded-md mt-5 ml-[300px] md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 block md:flex lg:flex xl:flex 2xl:flex">Search</button>

        </form>
        <div className="2xl:ml-[150px]  xl:ml-[150px]  lg:my-11 xl:my-11 2xl:my-11 my-1 md:my-11 overflow-x-scroll overflow-y-scroll">
    < Table className="2xl:w-[1200px] xl:w-[1000px]  lg:w-[800px] my-11">
          <Table.Head className="uppercase font-bold text-[15px]">
            <Table.HeadCell >Order Date</Table.HeadCell>
            <Table.HeadCell className="">Order Code</Table.HeadCell>
            <Table.HeadCell>Customer Name</Table.HeadCell>
            <Table.HeadCell>Customer Phone</Table.HeadCell>
            <Table.HeadCell>Total Quantity</Table.HeadCell>
            <Table.HeadCell>Total Amount</Table.HeadCell>
            <Table.HeadCell>Delivery Address</Table.HeadCell>
            <Table.HeadCell>Delivery Fee</Table.HeadCell>
            <Table.HeadCell className="">Control</Table.HeadCell>


          </Table.Head>
         
          <Table.Body className="divide-y ">
            {filterPhone?.map((item)=>{

              return(
                <>
                <Table.Row className="bg-white dark:border-gray-700 font-bold dark:bg-gray-800">
              
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900  dark:text-white">
                
                <p className="uppercase text-cus-primary ">
                {/* {cart.item_name} */}
                {item.order_date}
           
                </p>
                
              </Table.Cell>
              <Table.Cell > {item.order_code}</Table.Cell>
              <Table.Cell>
              <div className='flex flex-col items-center'>
          
          <p className='text-primary'>{item.customer_name}</p>
        
      </div>
              </Table.Cell>
              <Table.Cell>{item.customer_phone}</Table.Cell>
              <Table.Cell >
              {item.total_quantity}
              </Table.Cell>

              <Table.Cell>
                     {item.total_amount}
            
                </Table.Cell>
                <Table.Cell>
                 {item.deliver_address}
                </Table.Cell>
                <Table.Cell>
                     
              {item.delivery_fee}               
                </Table.Cell>
                <Table.Cell key={item.id}>
                  <Link to ={`/orderPage/${item.order_id}`}>
                    <div className="" >
                  <p className="text-white p-2 rounded-sm ml-2 font-bold bg-cus-primary text-md">
                   Detail
                  </p>
                  </div>
                  </Link>
                </Table.Cell>
            </Table.Row>
            </>
              )
            })}
            {filterOrder?.map((item)=>{
               return(
                <>
                <Table.Row className="bg-white dark:border-gray-700 font-bold dark:bg-gray-800">
              
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900  dark:text-white">
                
                <p className="uppercase text-cus-primary ">
                {/* {cart.item_name} */}
                {item.order_date}
           
                </p>
                
              </Table.Cell>
              <Table.Cell > {item.order_code}</Table.Cell>
              <Table.Cell>
              <div className='flex flex-col items-center'>
          
          <p className='text-primary'>{item.customer_name}</p>
        
      </div>
              </Table.Cell>
              <Table.Cell>{item.customer_phone}</Table.Cell>
              <Table.Cell >
              {item.total_quantity}
              </Table.Cell>

              <Table.Cell>
                     {item.total_amount}
            
                </Table.Cell>
                <Table.Cell>
                 {item.deliver_address}
                </Table.Cell>
                <Table.Cell>
                     
              {item.delivery_fee}               
                </Table.Cell>
                <Table.Cell>
                  <Link to ={`/orderPage/${item.order_id}`}>
                    <div className="" >
                  <p className="text-cus-primary font-bold text-xl">
                    Detail
                  </p>
                  </div>
                  </Link>
                </Table.Cell>
            </Table.Row>
            </>
              )
            })}

             
             
                
             
            
              
   
                
             
           
           
          </Table.Body>
            
        </Table>
        </div>
    </div>
  )
}

export default TrackOrder