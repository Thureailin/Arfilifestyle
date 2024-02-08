import logo from "../assets/img/vide/viber_image_2024-01-22_15-14-21-838.jpg"
import { useSelector } from "react-redux";
import { Table } from "flowbite-react";
import html2pdf from 'html2pdf.js';
import { Link } from "react-router-dom";

const Payment3 = () => {
  let deposit = sessionStorage.getItem('deposit');
  let customer_phone = sessionStorage.getItem('customer_phone');
  let customer_name = sessionStorage.getItem('customer_name');
  let customer_address = sessionStorage.getItem('deli_address');
  let taxId = sessionStorage.getItem('taxId')
    const url = useSelector((state) => state.url);
    
    const { cartItems, totalAmount, quantity } = useSelector(
      (state) => state.cart
    );
    
    const discount = 873;
    const  grandTotal = totalAmount - discount;
   
    
    const preVAT =  grandTotal / 1.07 ;
    

    const vatRate = preVAT * 0.07 ;
    const downloadPDF = () => {
        const element = document.getElementById('invoice-container'); // Replace 'invoice-container' with the ID of your container div
        html2pdf(element);
      };
  return (
//     <div className="text-center mt-5 lg:ml-[60px] ">
//         <h1 className="text-[30px] text-cus-primary mb-5 font-bold">Make Payment</h1>
//         {/* ml-[600px] mt-7 lg:ml-[350px] md:ml-[300px] sm:mx-[150px] 2xl:ml-[100px] xl:ml-[400px] */}
//         {/* <div className="text-center sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-5 "> */}
// <ol className="flex items-center w-[250px] xl:ml-[450px] mt-11  2xl:ml-[600px] lg:ml-[350px] mx-[90px] md:ml-[200px] sm:mx-[150px]">
//     <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
//         <span className=" text-[20px] font-bold flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
//            1
//         </span>
//     </li>
//     <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
//         <span className=" text-[20px] font-bold flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
//            2
//         </span>
//     </li>
//     <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
//         <span className=" text-[20px] font-bold flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
//            3
//         </span>
//     </li>
// </ol>
//         <div className="flex flex-wrap justify-center items-center mt-11">
//         <button className="bg-cus-primary hover:bg-blue-700  text-white font-bold py-2  w-[100px] h-[100px] rounded-[50%]">
//         <GiCheckMark className="w-11 h-11 mx-6"/>
//                   </button>
//         </div>
//         <div className="mt-5">
//             <p className="font-bold text-[20px]">Success</p>
//         </div>
//         <div className="mt-11">
//             <Link to='/'>
//         <button className="bg-cus-primary hover:bg-blue-700 px-[100px] text-white font-bold py-2  rounded">
//                     Complete
//                   </button>
//                   </Link>
//         </div>
//     </div>
<>
{/* <div className="container">
   
    <div className=" mt-5" >

        <div className="" id="invoice-container">
    <div className="text-center" >
        <img src={logo} alt="" className="w-[200px] h-[100px] mx-[300px]"/>
   
  
    <h1 className="font-bold text-[28px] -mt-5  mb-11 decoration-slice">Proforma Invoice </h1>
    </div>
    <div className="flex justify-around items-start">
    <div className="ml-11">
    <p className="text-[18px]  font-bold">1563/99 The Rich Biz Home Lasella Road,
South Bangana Subdistrict
</p>
<p className='text-[18px]  font-bold'>Bangna District, Bangkok 
10260</p>
<p className="text-[18px]  font-bold"> +66 9 500 980 27</p>
    </div>
    <div className="ml-[20px]">
      <p className="font-bold ">Customer Name : <span>{customer_name}</span></p>
      <p className="font-bold ">Customer Phone : <span>{customer_phone}</span></p>
      <p className="font-bold">Customer Address : <span>{customer_address}</span></p>
    </div>
    
    </div>
   <div className=" mt-5 mr-20">
   <div className="flex flex-col items-end">
        
               <table className="table-auto border border-black text-center">
                <thead className ="border border-black">
                  <tr className ="border border-black">
                    
                    <th className="border border-black px-4 ">Product</th>
                    <th className= "border border-black px-2 py-4">Unit Price</th>
                    <th className="border border-black px-4">Size</th>
                    <th className= "border border-black px-4">Color</th>
                    <th className= "border border-black px-4 w-40">Quantity</th>
                    <th className= "border border-black px-4 w-40">Total Price</th>
                  </tr>
                </thead>
                <tbody className= "border border-black">
                  {cartItems?.map((cart)=>{
                                    const oneItemPrice = cart.selling_price * cart.quantity;

                    return(
                      <>
                      <tr>
                      <td className="p-2 py-4 border border-black font-bold text-center">{cart.item_name}</td>
                      <td className="p-2 py-4 border border-black font-bold text-center">{cart.selling_price}</td>
                      <td className="p-2 py-4 border border-black font-bold text-center">{cart.size_name}</td>
                      <td className="p-2 py-4 border border-black font-bold text-center ">{cart.subcategory_name}</td> <td className="border border-black font-bold text-center">1</td>
                      <td className="p-2 py-4 border border-black font-bold text-center ">{oneItemPrice}</td> 
                      </tr>
                      </>
                    )
                  })}
                  
                </tbody>
              </table>
              <table className="table-auto border">
                <tbody className="border border-black">
                  <tr >
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center">Sub Total</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">{totalAmount}</td>
                  </tr>
                  <tr >
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center">Discount</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">873</td>
                  </tr>
                  <tr >
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center ">GrandTotal</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">{grandTotal}</td>
                  </tr>
                  <tr >
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center">VAT rate(7%)</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">{vatRate.toFixed(2)}</td>
                  </tr>
                 <tr>
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center">Deposit</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">{deposit}</td>
                  </tr>
                 
                  <tr >
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center">Pre VAT</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">{preVAT.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
                  <div className="mr-[200px] mb-11 mt-11 ">
                    <p className="text-cus-primary font-bold text-xl">Thanks for buying our product.......</p>
                  </div>
          
          
        </div>
   </div>
   </div>
   </div>
</div>
<div className="text-right absolute top-[300px] right-[400px]">
<button className="text-left bg-cus-primary px-6 text-white rounded-xl py-1" onClick={downloadPDF}>Download</button>
</div>
<Link to={'/track'}>
<div className="text-right absolute top-[200px] right-[400px]">
<button className="text-left bg-cus-primary px-6 text-white rounded-xl py-1">Go to Order</button>
</div>
</Link> */}
<div className="" id="invoice-container">
<div className="flex justify-center items-center">
  <img src={logo} alt="" className="w-[200px] h-[100px] text-center" />
  
</div>
<p className="text-center">
  1563/99 The Rich Biz Home Lasella Road,
South Bangana Subdistrict
<p className="text-center">
Bangna District, Bangkok
10260
</p>
  </p>
  <h1 className=" text-center font-bold text-[25px] mt-5">Proforma Invoice</h1>
  <div className="flex justify-around items-center mx-[100px] container mt-11">
    <div className="">
      <p className="-ml-[200px]" >TextId<span className="mx-2 font-bold text-black ">{taxId}</span></p>
    </div>
    <div className="">
      <p>Customer Name:<span className=" font-bold text-black px-5">{customer_name}</span></p>
      <p>Customer Phone:<span className=" font-bold text-black px-5 " >{customer_phone}</span></p>
      <p>Customer Address:<span className=" font-bold text-black px-5">{customer_address}</span></p>
    </div>
    
  </div>
  <div className="flex flex-col items-center mt-5">
        
               <table className="table-auto border border-black text-center">
                <thead className ="border border-black">
                  <tr className ="border border-black">
                    
                    <th className="border border-black px-4 ">Product</th>
                    <th className= "border border-black px-2 py-4">Unit Price</th>
                    <th className="border border-black px-4">Size</th>
                    <th className= "border border-black px-4">Color</th>
                    <th className= "border border-black px-4 w-40">Quantity</th>
                    <th className= "border border-black px-4 w-40">Total Price</th>
                  </tr>
                </thead>
                <tbody className= "border border-black">
                  {cartItems?.map((cart)=>{
                                    const oneItemPrice = cart.selling_price * cart.quantity;

                    return(
                      <>
                      <tr>
                      <td className="p-2 py-4 border border-black font-bold text-center">{cart.item_name}</td>
                      <td className="p-2 py-4 border border-black font-bold text-center">{cart.selling_price}</td>
                      <td className="p-2 py-4 border border-black font-bold text-center">{cart.size_name}</td>
                      <td className="p-2 py-4 border border-black font-bold text-center ">{cart.subcategory_name}</td> <td className="border border-black font-bold text-center">1</td>
                      <td className="p-2 py-4 border border-black font-bold text-center ">{oneItemPrice}</td> 
                      </tr>
                      </>
                    )
                  })}
                  
                </tbody>
              </table>
              <table className="table-auto border ml-[298px]">
                <tbody className="border border-black">
                  <tr >
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center">Sub Total</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">{totalAmount}</td>
                  </tr>
                  <tr >
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center">Discount</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">873</td>
                  </tr>
                  <tr >
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center ">GrandTotal</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">{grandTotal}</td>
                  </tr>
                  <tr >
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center">VAT rate(7%)</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">{vatRate.toFixed(2)}</td>
                  </tr>
                 <tr>
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center">Deposit</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">{deposit}</td>
                  </tr>
                 
                  <tr >
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center">Pre VAT</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">{preVAT.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
                  <div className=" mb-11 mt-11 ">
                    <p className="text-cus-primary font-bold text-lg text-center ">Please be Advised that the deli fee is to be paid upon the arrival of the parcel.</p>
                    <p className="text-cus-primary font-bold text-lg text-center py-2">Thanks for your Purchase</p>
                  </div>
          
          
        </div>
        </div>
        <div className="text-right absolute top-[100px] right-[400px]">
<button className="text-left bg-cus-primary px-6 text-white rounded-xl py-1" onClick={downloadPDF}>Download</button>
</div>
<Link to={'/checkout'}>
<div className="text-right absolute top-[200px] right-[400px]">
<button className="text-left bg-cus-primary px-6 text-white rounded-xl py-1">Go to Order</button>
</div>
</Link> 
</>

  )
}

export default Payment3