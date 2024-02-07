// import { useNavigate } from "react-router-dom";
// import credit from "../../src/assets/img/home/shop/bank.jpg"
// import { useState } from "react";
// import { useLocation } from 'react-router-dom';

// const Payment2 = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const receivedData = location.state?.arr || 'No data received';
//   console.log(receivedData)
//   const sendDataToBackend = async (formData) => {
//     try {
//       const response = await fetch('https://your-api-endpoint.com/api/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await response.json();
//       console.log('Response from backend:', data);
//       // Handle the response as needed
//     } catch (error) {
//       console.error('Error sending data to the backend:', error);
//     }
//   };

//   const [formData,setFormData] = useState({
//     card_number: "",
//     expiry:"",
//     cvv : "",
//     holder_number  : "",
   
//   });
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call a function to send data to the backend
//     if(formData == null){
//       navigate('/checkout/2')
//     }else{
//       sendDataToBackend(formData);
//       console.log(formData)
//       navigate('/checkout/3')
//     }
  
    
//   };
  
//   return (
//     <div className="mt-8">
//       <h1 className="text-[30px] text-center font-bold text-cus-primary">
//         Make Payment
//       </h1>
//       <div className="text-center sm:mx-[150px] ml-[100px] 2xl:mx-[600px] md:mx-[300px] mt-11">
// <ol className="flex items-center w-[250px] ">
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
//     <li className="flex items-center w-full">
//         <span className="text-[20px] font-bold flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
//             3
//         </span>
//     </li>
// </ol>
// </div>
//       <div className="flex flex-wrap justify-center md:mx-[100px] items-center mt-11">
//         <div className="grid grid-cols-2">
//           <div className=" mr-[5px]  ">
//             <img src={credit} alt="" className="w-[200px] 2xl:w-[400px] 2xl:h-[300px] sm:w-[250px] sm:h-[250px] h-[200px]" />
//           </div>
//           <div className="sm:mr-[100px] ">
//             <form className="w-[300px] ml-[40px] " onSubmit={handleSubmit}>
//               <div className="flex flex-wrap -mx-3  mb-6">
//                 <div className="w-full px-3">
                
//                   <input
//                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                     id="grid-password"
//                     type="text"
//                     placeholder="Card Number"
//                     name="card_number"
//                     required
//                     value={formData.card_number}
//                     onChange={handleInputChange}                  />
//                 </div>
//               </div>
//               <div className="flex flex-wrap -mx-3 mb-6 ">
//                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  
//                   <input
//                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                     id="grid-first-name"
//                     type="text"
//                     placeholder="Expiry"
//                     required
//                     name='expiry'
//                     value={formData.expiry}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full md:w-1/2 px-3">
              
//                   <input
//                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                     id="grid-last-name"
//                     type="text"
//                     placeholder="CVV"
//                     required
//                     name="cvv"
//                     value={formData.cvv}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-wrap -mx-3 mb-6">
//                 <div className="w-full px-3">
                
//                   <input
//                     className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                     id="grid-password"
//                     name="holder_number"
//                     type="text"
//                     value={formData.holder_number}
//                     required
//                     placeholder="Holder Number"
//                     onChange={handleInputChange}                    
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-wrap -mx-3 mb-6">
//                 <div className="w-full  px-3">
//                   <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
//                     <input
//                       id="bordered-checkbox-1 "
//                       type="checkbox"
//                       value=""
//                       required
//                       name="bordered-checkbox"
//                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                     />
//                     <label
//                       for="bordered-checkbox-1"
//                       className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                     >
//                       Save This credit Card
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-11 ml-[80px]">
//                 {/* <Link to="/checkout/3"> */}
//                   <button className="bg-cus-primary hover:bg-blue-700 px-11 text-white font-bold py-2  rounded">
//                     Confirm
//                   </button>
//                 {/* </Link> */}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment2;
