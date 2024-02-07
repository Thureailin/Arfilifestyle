// import { Table } from "flowbite-react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
// import { BsTrash } from "react-icons/bs";
// import {
//   addItemsQuantity,
//   removeFromCart,
//   subtractItemsQuantity,
// } from "../features/services/cartSlice";
// import { useEffect, useState } from "react";

// // const Cart = () => {
// //   // const [preVat,setPreVat] = useState();
// //   // const [grandTotal,setGrandTotal] = useState();
// //   // const [vatRate,setVatRate] = useState();
// //   const url = useSelector((state) => state.url);
// //   const { cartItems, totalAmount, quantity } = useSelector(
// //     (state) => state.cart
// //   );
// //   const dispatch = useDispatch();

// //   console.log(cartItems);
// //   console.log(totalAmount);
// //   console.log(quantity);

// //   useEffect(() => {
// //     productList();
// //   }, []);
// //     const discount = 873;
// //     const  grandTotal = totalAmount - discount;

// //     const preVAT =  grandTotal / 1.07 ;

// //     const vatRate = preVAT * 0.07 ;

// //   const productList = async () =>
// //     await fetch(url + "/api/ecommerce/order/store", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(cartItems),
// //     })
// //       // .then(response => response.json())
// //       .then((data) => {
// //         // window.location.reload("/cart")
// //         console.log("Success:", data);
// //         console.log(cartItems);
// //       });

// //   return (
// //     <>
// //       <nav
// //         className="flex ml-[150px] sm:mx-[300px]   lg:mx-[500px] xl:mx-[600px] md:mx-[350px] 2xl:mx-[700px] mt-5"
// //         aria-label="Breadcrumb "
// //       >
// //         {/* <ol className="inline-flex items-center space-x-1 md:space-x-3">
// //           <li className="inline-flex items-center">
// //             <Link to={'/men'}>

// //               Home

// //             </Link>
// //           </li>
// //           <li>
// //             <div className="flex items-center">
// //               <svg
// //                 className="w-3 h-3 text-gray-400 mx-1"
// //                 aria-hidden="true"
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 6 10"
// //               >
// //                 <path
// //                   stroke="currentColor"
// //                   stroke-linecap="round"
// //                   stroke-linejoin="round"
// //                   stroke-width="2"
// //                   d="m1 9 4-4-4-4"
// //                 />
// //               </svg>
// //               <Link to="/men">
// //                 <a
// //                   href="#"
// //                   className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
// //                 >
// //                   Men
// //                 </a>
// //               </Link>
// //             </div>
// //           </li>
// //           <li aria-current="page">
// //             <div className="flex items-center">
// //               <svg
// //                 className="w-3 h-3 text-gray-400 mx-1"
// //                 aria-hidden="true"
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 6 10"
// //               >
// //                 <path
// //                   stroke="currentColor"
// //                   stroke-linecap="round"
// //                   stroke-linejoin="round"
// //                   stroke-width="2"
// //                   d="m1 9 4-4-4-4"
// //                 />
// //               </svg>
// //               <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
// //                 Cart
// //               </span>
// //             </div>
// //           </li>
// //         </ol> */}
// //       </nav>

// //       <form className="md:flex lg:flex xl:flex 2xl:flex flex-wrap justify-center items-center mt-11 ">
// //         <div className="overflow-x-scroll">
// //           <Table className="w-[700px] lg:w-[1000px] xl:w-[1290px] sm:w-[600px] sm:ml-[20px]  2xl:w-[1300px]   ">
// //             <Table.Head className="uppercase  font-bold text-[15px]">
// //               <Table.HeadCell>Product</Table.HeadCell>
// //               <Table.HeadCell className="">Unit Price</Table.HeadCell>
// //               <Table.HeadCell className="">Size</Table.HeadCell>
// //               <Table.HeadCell className="">Color</Table.HeadCell>
// //               <Table.HeadCell>Qty</Table.HeadCell>
// //               <Table.HeadCell>Price Total</Table.HeadCell>

// //               <Table.HeadCell>Cancel</Table.HeadCell>
// //             </Table.Head>
// //             <Table.Body className="divide-y ">
// //               {cartItems?.map((cart) => {

// //                 // let originalPrice = cart.selling_price
// //                 // let vatRate = 0.07;

// //                 // const preVAT = originalPrice / (1 + vatRate / 100);
// //                 // console.log("prevat", preVAT);
// //                 // setPreVat(preVAT)
// //                 //  if(cartItems.length == 1){

// //                   // window.location.reload()
// //                 //  }
// //                 const oneItemPrice = cart.selling_price * cart.quantity;

// //                 //  if(cart.quantity <= 1 ) {
// //                 //   alert("cart is 0")
// //                 //   console.log("alert")
// //                 //  }
// //                 // const totalquantity = cart.quantity;
// //                 // console.log(totalquantity)

// //                 // const image = `http://ecommerceapp.arfilifestyle.com/ecommerce/items/${cart.photo_path}`;

// //                 return (
// //                   <>
// //                     <Table.Row className="bg-white dark:border-gray-700 font-bold dark:bg-gray-800">
// //                       <Table.Cell className="whitespace-nowrap font-medium text-gray-900  dark:text-white">
// //                         <div className="flex  items-center text-[15px]">
// //                           <img
// //                             src={cart.photo_body}
// //                             alt=""
// //                             className="rounded-lg mr-8 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] inline-block "
// //                           />
// //                           <p className="uppercase text-cus-primary shadow-lg">
// //                             {cart.item_name}
// //                           </p>
// //                         </div>
// //                       </Table.Cell>
// //                       <Table.Cell>{cart.selling_price}</Table.Cell>
// //                       <Table.Cell>{cart.size_name}</Table.Cell>
// //                       <Table.Cell>{cart.subcategory_name}</Table.Cell>
// //                       <Table.Cell>
// //                         <div className="flex flex-col items-center">
// //                           <p
// //                             onClick={() =>
// //                               dispatch(addItemsQuantity(cart)) &&
// //                               window.location.reload()
// //                             }
// //                             className="text-secondary"
// //                           >
// //                             <AiFillCaretUp />
// //                           </p>
// //                           <p className="text-primary">{cart.quantity}</p>
// //                           <p
// //                             onClick={() =>
// //                               cart.quantity > 1 &&
// //                               dispatch(subtractItemsQuantity(cart)) &&
// //                               window.location.reload()
// //                             }
// //                             className="text-secondary"
// //                           >
// //                             <AiFillCaretDown />
// //                           </p>
// //                         </div>
// //                       </Table.Cell>
// //                       <Table.Cell>{oneItemPrice}</Table.Cell>

// //                       <Table.Cell>
// //                         <button
// //                           onClick={() =>
// //                             dispatch(removeFromCart(cart)) &&
// //                             window.location.reload()
// //                           }
// //                           className=" text-red-500 cursor-pointer select-none"
// //                         >
// //                           <BsTrash className="font-bold text-xl" />
// //                         </button>
// //                       </Table.Cell>
// //                     </Table.Row>
// //                   </>
// //                 );
// //               })}
// //             </Table.Body>
// //           </Table>
// //         </div>

// //         <div className="mx-11">
// //           <div className="text-center shadow-2xl p-2  rounded-2xl mt-5">
// //             {/* <p className="text-cus-primary font-bold text-xl  ">
// //               SubTotal<span>=</span>
// //               <span>{isNaN(totalAmount) ? 0 : totalAmount}</span>
// //             </p>
// //              <p className="text-cus-primary font-bold text-xl ">
// //               Discount<span>=</span>
// //               <span>{discount}</span>
// //             </p>
// //             <p className="text-cus-primary font-bold text-xl ">
// //               Grand Total<span>=</span>
// //               <span>{grandTotal}</span>
// //             </p>
// //             <p className="text-cus-primary font-bold text-xl ">
// //               VAT rate(7%)<span>=</span>
// //               <span>{vatRate.toFixed(2)}</span>
// //             </p>
// //             <p className="text-cus-primary font-bold text-xl ">
// //               Pre VAT<span>=</span>
// //               <span>{preVAT.toFixed(2)}</span>
// //             </p>
// //             <p className="text-cus-primary font-bold text-xl ">
// //               Total<span>=</span>
// //               <span>{grandTotal}</span>
// //             </p>  */}
// //             <div className="flex justify-around  items-center">
// //               <div className="w-[100px] ">SubTotal</div>

// //               <div className="font-bold text-black">{ isNaN(totalAmount)? window.location.reload() : totalAmount}</div>
// //             </div>
// //             <div className="flex justify-around items-center">
// //               <div className="w-[100px]">Discount</div>

// //               <div className="text-black font-bold">{discount}</div>
// //             </div>
// //             <div className="flex justify-around items-center">
// //               <div className="w-[100px]">Grand Total</div>

// //               <div className="text-black font-bold">{grandTotal}</div>
// //             </div>
// //             <div className="flex justify-around items-center">
// //               <div className="w-[100px]">VAT rate(7%)</div>

// //               <div className="text-black font-bold">{vatRate.toFixed(2)}</div>
// //             </div>
// //             <div className="flex justify-around items-center">
// //               <div className="w-[100px]">Pre VAT</div>

// //               <div className="text-black font-bold">{preVAT.toFixed(2)}</div>
// //             </div>
// //             <div className="flex justify-around items-center">
// //               <div className="w-[100px]">Total</div>

// //               <div className="text-black font-bold">{grandTotal}</div>
// //             </div>
// //           </div>
// //           {/* <div className="lg:mx-[120px] mx-[50px] mt-11">
// //               <span className="text-cus-primary font-bold text-xl mx-8 ">Total</span>
// //               <span className="mr-5 font-bold text-xl">=</span>
// //               <span className="mx-5 text-cus-primary font-bold text-[20px]">Baht</span>
// //               <span className="text-cus-primary font-bold text-xl">{isNaN(totalAmount) ? 0  :totalAmount  }</span>
// //             </div> */}

// //           <div className="sm:ml-[80px]">
// //             <Link to="/checkout">
// //               <button className="rounded-md  mt-8 w-[200px] bg-cus-primary hover:bg-blue-700 text-white font-bold py-2 px-4 border mx-[100px] border-blue-700 ">
// //                 Check Out
// //               </button>
// //             </Link>
// //           </div>
// //         </div>
// //       </form>
// //     </>
// //   );
// // };

// export default Cart;
import { Table } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import {
  addItemsQuantity,
  removeFromCart,
  subtractItemsQuantity,
} from "../features/services/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  // const [preVat,setPreVat] = useState();
  // const [grandTotal,setGrandTotal] = useState();
  // const [vatRate,setVatRate] = useState();
  const url = useSelector((state) => state.url);
  const { cartItems, totalAmount, quantity } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  console.log(cartItems, "cart");
  console.log(totalAmount);
  console.log(quantity);

  useEffect(() => {
    productList();
  }, []);
  const discount = cartItems.length ? 873 : 0;
  const grandTotal = cartItems.length ? totalAmount - discount : 0;

  const preVAT = cartItems.length ? grandTotal / 1.07 : 0;

  const vatRate = cartItems.length ? preVAT * 0.07 : 0;

  // const productList = async () =>
  //   await fetch(url + "/api/ecommerce/order/store", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(cartItems),
  //   })
  //     // .then(response => response.json())
  //     .then((data) => {
  //       // window.location.reload("/cart")
  //       console.log("Success:", data);
  //       console.log(cartItems,"cart");
  //     });
  const productList = async () => {
    if (cartItems.length > 0) {
      await fetch(url + "/api/ecommerce/order/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      }).then((data) => {
        console.log("Success:", data);
        console.log(cartItems, "cart");
      });
    }
  };
  
  const handleReloadPage = () => {
    window.location.reload();
  };
  const handleAddQuantity = (cart) => {
    dispatch(addItemsQuantity(cart));
    window.location.reload();

  };

  const handleSubtractQuantity = (cart) => {
    if (cart.quantity > 1) {
      dispatch(subtractItemsQuantity(cart));
      window.location.reload();

    }
  };

  const handleRemoveItem = (cart) => {
    dispatch(removeFromCart(cart));
        window.location.reload();

  };
  
  return (
    <>
      <nav
        className="flex ml-[150px] sm:mx-[300px]   lg:mx-[500px] xl:mx-[600px] md:mx-[350px] 2xl:mx-[700px] mt-5"
        aria-label="Breadcrumb "
      >
        {/* <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to={'/men'}>

              Home
            
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link to="/men">
                <a
                  href="#"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Men
                </a>
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Cart
              </span>
            </div>
          </li>
        </ol> */}
      </nav>

      <form className="md:flex lg:flex xl:flex 2xl:flex flex-wrap justify-center items-center mt-11 ">
        <div className="overflow-x-scroll">
          <Table className="w-[700px] lg:w-[1000px] xl:w-[1290px] sm:w-[600px] sm:ml-[20px]  2xl:w-[1300px]   ">
            <Table.Head className="uppercase  font-bold text-[15px]">
              <Table.HeadCell>Product</Table.HeadCell>
              <Table.HeadCell className="">Unit Price</Table.HeadCell>
              <Table.HeadCell className="">Size</Table.HeadCell>
              <Table.HeadCell className="">Color</Table.HeadCell>
              <Table.HeadCell>Qty</Table.HeadCell>
              <Table.HeadCell>Price Total</Table.HeadCell>

              <Table.HeadCell>Cancel</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y ">
              {cartItems?.map((cart) => {
                // let originalPrice = cart.selling_price
                // let vatRate = 0.07;

                // const preVAT = originalPrice / (1 + vatRate / 100);
                // console.log("prevat", preVAT);
                // setPreVat(preVAT)
                //  if(cartItems.length == 1){

                // window.location.reload()
                //  }
                const oneItemPrice = cart.selling_price * cart.quantity;

                //  if(cart.quantity <= 1 ) {
                //   alert("cart is 0")
                //   console.log("alert")
                //  }
                // const totalquantity = cart.quantity;
                // console.log(totalquantity)

                // const image = `http://ecommerceapp.arfilifestyle.com/ecommerce/items/${cart.photo_path}`;

                return (
                  <>
                    <Table.Row className="bg-white dark:border-gray-700 font-bold dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900  dark:text-white">
                        <div className="flex  items-center text-[15px]">
                          <img
                            src={cart.photo_body}
                            alt=""
                            className="rounded-lg mr-8 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] inline-block "
                          />
                          <p className="uppercase text-cus-primary shadow-lg">
                            {cart.item_name}
                          </p>
                        </div>
                      </Table.Cell>
                      <Table.Cell>{cart.selling_price}</Table.Cell>
                      <Table.Cell>{cart.size_name}</Table.Cell>
                      <Table.Cell>{cart.subcategory_name}</Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-col items-center">
                          <p
                            onClick={() => handleAddQuantity(cart)}
                            className="text-secondary"
                          >
                            <AiFillCaretUp />
                          </p>
                          <p className="text-primary">{cart.quantity}</p>
                          <p
                            onClick={() => handleSubtractQuantity(cart)}
                            className="text-secondary"
                          >
                            <AiFillCaretDown />
                          </p>
                        </div>
                      </Table.Cell>
                      <Table.Cell>{oneItemPrice}</Table.Cell>

                      <Table.Cell>
                        <button
                          onClick={() => handleRemoveItem(cart)}
                          // &&
                          // window.location.reload()

                          className=" text-red-500 cursor-pointer select-none"
                        >
                          <BsTrash className="font-bold text-xl" />
                        </button>
                      </Table.Cell>
                    </Table.Row>
                  </>
                );
              })}
            </Table.Body>
          </Table>
        </div>

        <div className="mx-11">
          <div className="text-center shadow-2xl p-2  rounded-2xl mt-5">
            {/* <p className="text-cus-primary font-bold text-xl  ">
              SubTotal<span>=</span>
              <span>{isNaN(totalAmount) ? 0 : totalAmount}</span>
            </p>
             <p className="text-cus-primary font-bold text-xl ">
              Discount<span>=</span>
              <span>{discount}</span>
            </p>
            <p className="text-cus-primary font-bold text-xl ">
              Grand Total<span>=</span>
              <span>{grandTotal}</span>
            </p> 
            <p className="text-cus-primary font-bold text-xl ">
              VAT rate(7%)<span>=</span>
              <span>{vatRate.toFixed(2)}</span>
            </p> 
            <p className="text-cus-primary font-bold text-xl ">
              Pre VAT<span>=</span>
              <span>{preVAT.toFixed(2)}</span>
            </p>
            <p className="text-cus-primary font-bold text-xl ">
              Total<span>=</span>
              <span>{grandTotal}</span>
            </p>  */}
            <div className="flex justify-around  items-center">
              <div className="w-[100px] ">SubTotal</div>

              <div className="font-bold text-black">
                {/* {isNaN(totalAmount) ? window.location.reload() : totalAmount} */}
                {isNaN(totalAmount) ? handleReloadPage() : totalAmount}

              </div>
            </div>
            <div className="flex justify-around items-center">
              <div className="w-[100px]">Discount</div>

              <div className="text-black font-bold">{discount}</div>
            </div>
            <div className="flex justify-around items-center">
              <div className="w-[100px]">Grand Total</div>

              <div className="text-black font-bold">{grandTotal}</div>
            </div>
            <div className="flex justify-around items-center">
              <div className="w-[100px]">VAT rate(7%)</div>

              <div className="text-black font-bold">{vatRate.toFixed(2)}</div>
            </div>
            <div className="flex justify-around items-center">
              <div className="w-[100px]">Pre VAT</div>

              <div className="text-black font-bold">{preVAT.toFixed(2)}</div>
            </div>
            <div className="flex justify-around items-center">
              <div className="w-[100px]">Total</div>

              <div className="text-black font-bold">{grandTotal}</div>
            </div>
          </div>
          {/* <div className="lg:mx-[120px] mx-[50px] mt-11">
              <span className="text-cus-primary font-bold text-xl mx-8 ">Total</span>
              <span className="mr-5 font-bold text-xl">=</span>
              <span className="mx-5 text-cus-primary font-bold text-[20px]">Baht</span>
              <span className="text-cus-primary font-bold text-xl">{isNaN(totalAmount) ? 0  :totalAmount  }</span>
            </div> */}

          <div className="sm:ml-[80px]">
            <Link to="/checkout">
              <button className="rounded-md  mt-8 w-[200px] bg-cus-primary hover:bg-blue-700 text-white font-bold py-2 px-4 border mx-[100px] border-blue-700 ">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Cart;
