import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import card from "../../assets/img/vide/viber_image_2024-01-19_19-58-44-950.jpg";
import { RxCross2 } from "react-icons/rx";
// import Cookies from "js-cookie";

const Payment1 = () => {
  const { cartItems, totalAmount, quantity } = useSelector(
    (state) => state.cart
  );
  const [isChecked, setIsChecked] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  const url = useSelector((state) => state.cart.url);
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const [district, setDistrict] = useState([]);
  const [township, setTownShip] = useState([]);
  const [postalCode,setPostalCode] = useState();
  const [image, setImage] = useState(null);
  const [charges,setCharges] = useState();

  // console.log(image,'hee')

  const handleImage = (e) => {
    // console.log(e.target.files,'image')
    if (e.target.files) {
      setImage(e.target.files[0]);
      setFormData((prev) => ({ ...prev, screenshot: e.target.files[0] }));
      console.log(e.target.files[0], "image");
    }
  };

  const discount = cartItems.length ? 873 : 0;
  const grandTotal = cartItems.length ? totalAmount - discount : 0;

  const preVAT = cartItems.length ? grandTotal / 1.07 : 0;

  const vatRate = cartItems.length ? preVAT * 0.07 : 0;
  // const remainPrice = totalAmount - formData.deposit
  // prevAvt + vatRate  = totalAmount(grandtotal) = Amount -Discount
  // const remainPrice = grandTotal - discount;
  const handleStatus = () => {
    const newStatusValue = !isStatus;
    setIsStatus(newStatusValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      status: newStatusValue ? 1 : 0,
    }));
  };
  const handleCheckboxChange = () => {
    const newCheckedValue = !isChecked;
    setIsChecked(newCheckedValue);
    // Assuming formData is a state and you are using setFormData to update it
    setFormData((prevFormData) => ({
      ...prevFormData,
      b2b_flag: newCheckedValue ? 1 : 0,
    }));
  };
 
  const [formData, setFormData] = useState({
    customer_id: 1,
    customer_name: "", //1
    customer_email: "", //2
    customer_phone: "", //3
    total_quantity: quantity,
    total_amount: totalAmount,
    // delivery_fee: deliveryFee, //4
    discount_amount: discount,
    payment_type: "", //5
    deliver_address: "", //6
    // postal_code: , //7
    b2b_flag: "", //8
    taxId: "", //9
    district_id: "", //10
    township_id: "", //11
    // remain_price: remainPrice,
    status: "", //12
    grand_total: grandTotal,
    vat_rate: vatRate,
    pre_vat: preVAT,
    // screenshot: image, //13
    deposit: grandTotal , //14
  });

  useEffect(() => {
    getDistrict();
    getBankList();
  }, []);
  useEffect(() => {
    if (formData.district_id) {
      getTownship();
    }
  }, [formData.district_id]);
  useEffect(() => {
    if (formData.district_township_id) {
      getDeliveryCharge();
    }
  }, [formData.district_id]);


  const getBankList = async () => {
    const api = await fetch(url + `/api/bank/list`);
    const { data } = await api.json();
    console.log("banK", data);
  };
  const getDistrict = async () => {
    const api = await fetch(url + `/api/district/list`);
    const { data } = await api.json();
    console.log(data);
    setDistrict(data);
    console.log("hi", district);
  };
  const getTownship = async () => {
    const api = await fetch(url + `/api/district/township/list`);
    const { data } = await api.json();
    console.log(data);
    const filteredTownship = data.filter(
      (item)=>item.district_id == formData.district_id
     
    )
    console.log("fitler",filteredTownship)
    setTownShip(filteredTownship);
    console.log("hi", township);
  };

  const getDeliveryCharge = async () => {
    const api = await fetch(url + `/api/township/postal/charges/list`);
    const { data } = await api.json();
    console.log(data);
    const filteredData = data.filter(
      (item) => item.district_township_id == formData.township_id
    );
    if (filteredData.length > 0) {
      // Retrieve the charges value from the first matching object (assuming there's only one)
      const fee = filteredData[0].charges;
      const postalCode = filteredData[0].postal_code;
      setCharges(fee);
      setPostalCode(postalCode);
      setFormData(prevFormData => ({
        ...prevFormData,
        postal_code: postalCode // or postal_code: postalCode if you're using postal_code instead of postalCode
      }),() => {
        // This callback function will run after postal_code is updated in the state
        console.log("state", charges);
      });
      setCharges(fee);
    } else {
      console.log("No data found for district_township_id:", formData.township_id);
    }
      
    // setDeliveryFee(filteredData);
    // console.log("hi", deliveryFee);
  };
  // const getDeliveryCharge = async () => {
  //   try {
  //     const ul = url + `/api/express/charges/filter/list`; // Replace with your API endpoint
  //     const sendData = {
  //       expressCharges: [getCharge.district_id, getCharge.express_id],
  //       // Other fields in your request body if needed
  //     };

  //     const response = await axios.post(ul, sendData);

  //     console.log("POST request successful");
  //     const { data } = response.data;
  //     const fees = data?.map((f) => f.charges);

  //     if (fees && fees.length > 0) {
  //       // Assuming you want to use the first fee in the array
  //       const selectedFee = fees[0];

  //       // Update formData state with the retrieved delivery fee
  //       setDeliveryFee(selectedFee);
  //       // setFormData((prevFormData) => ({
  //       //   ...prevFormData,
  //       //   delivery_fee: selectedFee,
  //       // }));
  //     }
  //     // Do something with the response
  //   } catch (error) {
  //     console.error("Error making POST request:", error);
  //     // Handle errors
  //   }
  // };
  const sendDataToBackend = async () => {
    const response = await axios.post(
      url + `/api/ecommerce/order/store`,
      formData
    );

    // Check if the request was successful
    if (response.status === 200) {
      setResponse(response.data.message);
      Cookies.remove("cartItems");

      // Assuming the backend sends a JSON response with a "message" field
    } else {
      console.error("Failed to send data to the backend");
    }
  };

  const handleInputChange = (e) => {
    const depositValue = parseFloat(e.target.value || 0); // Convert deposit value to a number
    const remainPrice = grandTotal - depositValue;
    setFormData((prevFormData) => ({
      ...prevFormData,
      deposit: depositValue,
      remain_price: remainPrice,
    }));
    var paymentType = document.getElementsByName("payment_type")[0].value;

    if (paymentType === "Bank_Transfer") {
      // Show the modal when Bank Transfer is selected
      document.getElementById("bankTransferModal").style.display = "block";
    } else {
      // Hide the modal for other payment types
      document.getElementById("bankTransferModal").style.display = "none";
    }
    const { name, value } = e.target;

    const updatedOrders = cartItems.map((cart) => {
      const unitid = cart.id;
      const quantity = cart.quantity;
      const price = cart.selling_price;
      const item_total_price = cart.selling_price * cart.quantity; // You might want to calculate the total price

      // Log the values for each cart item
      console.log(unitid, quantity, price);
      console.log(cart.size_id);

      return {
        unitid,
        price,
        quantity,
        item_total_price,
      };
    });

    setFormData({
      ...formData,

      [name]: value,
      orders: updatedOrders,
      total_quantity: quantity,
      total_amount: totalAmount,
    });
  };

  const closeModal = () => {
    document.getElementById("bankTransferModal").style.display = "none";
  };
  const handleSelectChangeDistrict = (event) => {
    const selectedDistrictId = event.target.value;
    setFormData({
      ...formData,
      district_id : selectedDistrictId
    })
    // getTownship()

  }
  const handleSelectChange = (event) => {
    const selectedTownshipId = event.target.value;
    setFormData({
      ...formData,
      township_id: selectedTownshipId,
    });
    getDeliveryCharge();

    console.log("id", formData.express_id);
    // const { name, value } = e.target;
    // console.log(e.target.name);
    // setGetCharge({
    //   ...getCharge,
    //   [name]: value,
    // });
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));
    // getDeliveryCharge();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const remainPrice = grandTotal - formData.deposit; // Calculate remain price
  setFormData((prevFormData) => ({
    ...prevFormData,
    remain_price: remainPrice, // Update remain_price in formData
  }));

    sendDataToBackend(formData);
    console.log(formData);
    sessionStorage.setItem("deposit", formData.deposit);
    sessionStorage.setItem("customer_name", formData.customer_name);
    sessionStorage.setItem("customer_phone", formData.customer_phone);
    sessionStorage.setItem("deli_address", formData.deliver_address);
    sessionStorage.setItem("taxId",formData.taxId)
    navigate("/checkout/3");
  };

  return (
    <div className="mt-5 mb-11   ">
      <h1 className="text-cus-primary text-center text-[30px] lg:ml-[100px] font-bold">
        Make Payment
      </h1>

      <form
        encType="multipart/form-data"
        className=" flex flex-wrap justify-center items-center sm:mx-[100px]  md:mx-[210px] mx-[20px]  max-w-lg ml-5 lg:ml-[300px] xl:ml-[400px] 2xl:ml-[520px] mt-11"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="text-cus-primary font-bold">Name</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="customer_name"
              type="text"
              placeholder=" Name"
              value={formData.customer_name}
              onChange={handleInputChange}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
          <label className="text-cus-primary font-bold">Phone</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="customer_phone"
              type="text"
              value={formData.customer_phone}
              required
              placeholder="Phone"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="text-cus-primary font-bold">Email</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              name="customer_email"
              type="text"
              placeholder="Email"
              required
              value={formData.customer_email}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="text-cus-primary font-bold">DeliveryFee</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="delivery_fee"
              type="text"
              placeholder="Select Township"
              value={charges}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <h1 className="text-cus-primary font-bold mb-2">District</h1>
            <select
              name="district_id"
              className="font-bold text-cus-primary rounded-lg w-[187px] border border-blue-900"
              onChange={handleSelectChangeDistrict}
              value={formData.district_id}
              required
            >
              <option value="">Select District</option>{" "}
              {/* Optional default option */}
              {district?.map((d) => (
                <option
                  key={d.id}
                  value={d.id}
                  className="w-full font-semibold"
                >
                  {d.district_name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <h1 className="text-cus-primary font-bold mb-2">Township</h1>
            <select
              name="express_id"
              className="font-bold text-cus-primary rounded-lg w-[187px] border border-blue-900"
              onChange={handleSelectChange}
              value={formData.express_id}
              required
            >
               <option value="">Select Township</option>{" "}
              {/* Optional default option */}
              {township?.map((e) => (
                <option
                  key={e.id}
                  value={e.id}
                  className="w-full font-semibold"
                >
                  {e.township}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="text-cus-primary font-bold">Delivery-Address</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="deliver_address"
              type="text"
              placeholder="Deliver_Address"
              value={formData.deliver_address}
              onChange={handleInputChange}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
          <label className="text-cus-primary font-bold">Postal Code</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700  border border-red-500  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="postal_code"
              type="text"
              value={postalCode}
              required
              placeholder="Select Township"
              // onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <p className="mb-1">
              <input
                type="checkbox"
                value={formData.status}
                name="status"
                checked={isStatus}
                onChange={handleStatus}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </p>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              value={formData.deposit}
              type="text"
              placeholder="Deposit"
              name="deposit"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mt-7">
            <input
              className="appearance-none block w-[185px] h-[50px] bg-gray-200 text-gray-700  border border-red-500  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="file"
              // value={formData.screenshot}
              name="screenshot"
              placeholder=""
              onChange={handleImage}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className=" px-3 mb-6 md:mb-0">
            <input
              id="default-checkbox"
              type="checkbox"
              value={formData.b2b_flag}
              checked={isChecked}
              name="b2b_flag"
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm  font-bold text-[14px] dark:text-gray-300 text-cus-primary">
              Order for organization(B2B)?
            </label>
          </div>
          <div className="w-full md:w-1/2 px-3  ">
            {isChecked && (
              <input
                className="appearance-none block w-[185px] h-[50px] bg-gray-200 text-gray-700  border border-red-500  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="TaxId"
                value={formData.taxId}
                onChange={handleInputChange}
                name="taxId"
              />
            )}
          </div>
        </div>

        <div className="mt-2 flex">
          <div className="" required>
            <label className="font-bold text-lg  text-cus-primary" required>
              Payment Options
            </label>
          </div>
          <div className="ml-[80px]" required>
            <select
              name="payment_type"
              className="font-bold text-cus-primary rounded-lg w-[200px] border border-blue-900"
              onClick={handleInputChange}
              required
            >
              <option
                value="Credit/Debit"
                className="w-full font-semibold"
                required
              >
                COD
              </option>
              <option
                value="Bank_Transfer"
                className="w-full font-semibold"
                required
              >
                Bank Transfer
              </option>
            </select>
          </div>
        </div>
        <div id="bankTransferModal" className="modal mt-5 hidden">
          <div className="modal-content shadow-2xl w-[400px] rounded-2xl p-5 border-2 border-blue-500">
            <div className="flex justify-between items-start">
              <h1 className="text-cus-primary font-bold text-[18px]">
                Bank Information
              </h1>
              <p
                className="w-11 h-11 text-red-500  cursor-pointer "
                onClick={closeModal}
              >
                <RxCross2 />
              </p>
            </div>
            <div className=" ">
              <img src={card} className="" />
            </div>
            <div className="">
              <span className="text-cus-primary font-bold text-[18px] ">
                Card Holder
                <span className=" text-[16px] ml-5 text-black font-bold">
                  Medical World Enterprise Co.,Ltd.
                </span>
              </span>
            </div>
            <div className="w-[380px]">
              <span className="text-cus-primary font-bold text-[18px] ">
                Card Holder
                <span className=" ml-5 text-[14px] text-black font-bold">
                  บริษัท เมดิเคิล เวิร์ล เอ็นตอร์ไพรส์ จำกัด
                </span>
              </span>
            </div>
            <div className="">
              <span className="text-cus-primary font-bold text-[18px]">
                Card Number
                <span className=" ml-5 text-[16px] text-black">
                  144-3-53188-9
                </span>
              </span>
            </div>
            <div className="flex justify-between items-start mt-5">
              <button
                className="bg-cus-primary text-white px-4 rounded-xl"
                onClick={closeModal}
              >
                Done
              </button>
              {/* <button
                className="bg-red-500 text-white px-4  rounded-xl"
                onClick={closeModal}
              >
                Decline
              </button> */}
            </div>
          </div>
        </div>

        <div className="text-center mt-11 ">
          <button className="bg-cus-primary hover:bg-cyan-700 px-[160px] text-white font-bold py-2  rounded">
            Go to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment1;
