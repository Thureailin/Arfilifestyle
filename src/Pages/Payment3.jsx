import logo from "../assets/img/vide/viber_image_2024-01-22_15-14-21-838.jpg";
import { useSelector } from "react-redux";
import html2pdf from "html2pdf.js";
import { Link } from "react-router-dom";

const Payment3 = () => {
  // let deposit = sessionStorage.getItem('deposit');
  let customer_phone = sessionStorage.getItem("customer_phone");
  let customer_name = sessionStorage.getItem("customer_name");
  let customer_address = sessionStorage.getItem("deli_address");
  let taxId = sessionStorage.getItem("taxId");
  // const url = useSelector((state) => state.url);

  const { cartItems, totalAmount } = useSelector(
    (state) => state.cart
  );

  // const discount = 873;
  const grandTotal = totalAmount ;
  const preVAT = grandTotal / 1.07;

  const vatRate = preVAT * 0.07;
  const downloadPDF = () => {
    const element = document.getElementById("invoice-container"); // Replace 'invoice-container' with the ID of your container div
    html2pdf(element);
  };
  return (
    <>
      <div className="" id="invoice-container">
        <div className="flex justify-center items-center">
          <img src={logo} alt="" className="w-[200px] h-[100px] text-center" />
        </div>
        <p className="text-center">
          1563/99 The Rich Biz Home Lasella Road, South Bangana Subdistrict
          <p className="text-center">Bangna District, Bangkok 10260</p>
        </p>
        <h1 className=" text-center font-bold text-[25px] mt-5">
          Proforma Invoice
        </h1>
        <div className="flex justify-around items-center mx-[100px] container mt-11">
          <div className="-ml-[230px]">
            <p className="">
              TaxId<span className="mx-2 font-bold text-black ">{taxId}</span>
            </p>
            <p>
              Customer Address:
              <span className=" font-bold text-black px-5">
                {customer_address}
              </span>
            </p>
          </div>
          <div className="">
            <p>
              Customer Name:
              <span className=" font-bold text-black px-5">
                {customer_name}
              </span>
            </p>
            <p>
              Customer Phone:
              <span className=" font-bold text-black px-5 ">
                {customer_phone}
              </span>
            </p>
           
          </div>
        </div>
        <div className="flex flex-col items-center mt-5">
          <table className="table-auto border border-black text-center">
            <thead className="border border-black">
              <tr className="border border-black">
                <th className="border border-black px-4 ">No</th>
                <th className="border border-black px-4 ">Product</th>
                <th className="border border-black px-2 py-4">Unit Price</th>
                <th className="border border-black px-4">Size</th>
                <th className="border border-black px-4">Color</th>
                <th className="border border-black px-4 w-40">Quantity</th>
                <th className="border border-black px-4 w-40">Total Price</th>
              </tr>
            </thead>
            <tbody className="border border-black">
              {cartItems?.map((cart, index) => {
                const oneItemPrice = (cart.selling_price - cart.discount) * cart.quantity;
                const loopValue = index + 1;

                return (
                  <>
                    <tr>
                      <td className="border border-black font-bold text-center">
                        {loopValue}
                      </td>
                      <td className="p-2 py-4 border border-black font-bold text-center">
                        {cart.item_name}
                      </td>
                      <td className="p-2 py-4 border border-black font-bold text-center">
                        {cart.selling_price - cart.discount}
                      </td>
                      <td className="p-2 py-4 border border-black font-bold text-center">
                        {cart.size_name}
                      </td>
                      <td className="p-2 py-4 border border-black font-bold text-center ">
                        {cart.subcategory_name}
                      </td>
                      <td className="p-2 py-4 border   border-black font-bold text-center">
                        {cart.quantity}
                      </td>
                      <td className="p-2 py-4 border border-black font-bold text-center ">
                        {oneItemPrice}<span className="mx-2">baht</span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <table className="table-auto border ml-[373px]">
            <tbody className="border border-black">
              <tr>
                <td className="p-4 w-40 border border-black border-t-white font-bold text-center">
                  Sub Total
                </td>
                <td className="p-4 border border-black border-t-white w-40 text-center font-bold">
                  {totalAmount}<span className="mx-2">baht</span>
                </td>
              </tr>
              {/* <tr>
                <td className="p-4 w-40 border border-black border-t-white font-bold text-center">
                  Discount
                </td>
                <td className="p-4 border border-black border-t-white w-40 text-center font-bold">
                  873<span className="mx-2">baht</span>
                </td>
              </tr> */}

              <tr>
                <td className="p-4 w-40 border border-black border-t-white font-bold text-center">
                  VAT rate(7%)
                </td>
                <td className="p-4 border border-black border-t-white w-40 text-center font-bold">
                  {vatRate.toFixed(2)}<span className="mx-2">baht</span>
                </td>
              </tr>
              {/* <tr>
                    <td className="p-4 w-40 border border-black border-t-white font-bold text-center">Deposit</td>
                    <td className="p-4 border border-black border-t-white w-40 text-center font-bold">{deposit}</td>
                  </tr>
                  */}
              <tr>
                <td className="p-4 w-40 border border-black border-t-white font-bold text-center">
                  Pre VAT
                </td>
                <td className="p-4 border border-black border-t-white w-40 text-center font-bold">
                  {preVAT.toFixed(2)}<span className="mx-2">baht</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 w-40 border border-black border-t-white font-bold text-center ">
                  GrandTotal
                </td>
                <td className="p-4 border border-black border-t-white w-40 text-center font-bold">
                  {grandTotal}<span className="mx-2">baht</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className=" mb-11 mt-11 ">
            <p className="text-cus-primary font-bold text-lg text-center ">
              Please be Advised that the deli fee is to be paid upon the arrival
              of the parcel.
            </p>
            <p className="text-cus-primary font-bold text-lg text-center py-2">
              Thanks for your Purchase
            </p>
          </div>
        </div>
      </div>
      <div className="text-right absolute top-[100px] right-[400px]">
        <button
          className="text-left bg-cus-primary px-6 text-white rounded-xl py-1"
          onClick={downloadPDF}
        >
          Download
        </button>
      </div>
      <Link to={"/checkout"}>
        <div className="text-right absolute top-[200px] right-[400px]">
          <button className="text-left bg-cus-primary px-6 text-white rounded-xl py-1">
            Go to Order
          </button>
        </div>
      </Link>
    </>
  );
};

export default Payment3;
