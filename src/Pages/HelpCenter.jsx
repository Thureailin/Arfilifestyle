import { CiDeliveryTruck } from "react-icons/ci";
import { FaRecycle } from "react-icons/fa6";

const HelpCenter = () => {
  return (
    <div>
      <div className="flex container mt-5">
        <div className="float-left">
          <h2 className="text-[25px] font-bold text-cus-primary p-2 rounded-sm ">Help Center</h2>
        </div>
        <div className="float-right">
          
        </div>
      </div>
      <div className="">
        <div className="text-center">
          <h2 className="font-bold text-[20px] lg:text-[40px] text-cus-primary">Hi, how can we help?</h2>
        </div>
        <div className="text-center mt-11">
          <h2 className="font-bold text-[16px] text-cus-primary border-b-blue-800">Top Questions</h2>
        </div>
        <div className=" lg:grid grid-cols-3 mx-11 block">
        <div className="">
            <div className="p-5 ">
              <div className=" shadow-xl py-8 px-2 sm:py-[50px] border-[2px]  rounded-md">
               <a href="">
                <CiDeliveryTruck className="ml-[100px] 2xl:ml-[200px]  sm:ml-[200px] xl:ml-[150px] md:ml-[300px]  text-[50px] lg:ml-[100px] mb-5 text-cus-primary  font-extrabold" />
           
                <p className=" text-center font-bold ">Shipping and Delivery</p>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="p-5 ">
              <div className=" shadow-xl py-8 px-2 sm:py-[50px]  border-[3px] rounded-md">
               <a href="">
                <FaRecycle className=" text-[50px] 2xl:ml-[200px] sm:ml-[200px] xl:ml-[150px] md:ml-[300px] ml-[100px] lg:ml-[100px] mb-5 text-cus-primary  font-extrabold" />
           
                <p className=" text-center font-bold ">Returns and Refunds</p>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <div className="p-5 ">
              <div className=" shadow-xl py-8 px-2 sm:py-[50px]  border-[3px] rounded-md">
               <a href="text-center">
                <CiDeliveryTruck className=" ml-[100px] 2xl:ml-[200px]  sm:ml-[200px] md:ml-[300px] xl:ml-[150px]  text-[50px] lg:ml-[100px] mb-5 text-cus-primary  font-extrabold" />
           
                <p className=" text-center font-bold ">Returns and Refunds</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:gird grid-cols-3 container p-4">
        <div className="">
          <h2 className="font-bold text-[18px]  lg:-ml-10 text-cus-primary my-5 ">Shipping & Delivery</h2>
          <p className="mb-2"><span className="text- font-bold">1. </span>Timely Delivery: Upon purchase, expect your order to be delivered within a prompt window of 3 to 4 days.</p>
          <p className="mb-2"><span className="text- font-bold">2. </span>Delivery Fee: A nominal delivery fee of 50 baht must be paid by customer in advance.</p>
          <p className="mb-2"><span className="text- font-bold">3. </span> Order Tracking: Should you wish to track your order, feel free to contact our customer service team. We're here to assist you every step of the way.</p>
        </div>
        <div className="">
          <h2 className="font-bold text-[18px] lg:-ml-10 text-cus-primary my-5 ">Returns & Refunds</h2>
          <p className="mb-2"><span className="text- font-bold">1. </span>Sizing and Item Errors: In the event of sizing discrepancies or errors with your item, we have a hassle-free returns policy in place..</p>
          <p className="mb-2"><span className="text- font-bold">2. </span>Covered Delivery Costs: Rest assured, any associated delivery fees for returns will be covered by our service.</p>
          <p className="mb-2"><span className="text- font-bold">3. </span>Contact for Assistance: For seamless returns or refunds, we encourage you to get in touch with our dedicated customer support team prior to initiating the process.<p> We're committed to ensuring your satisfaction and resolving any concerns you may have swiftly.</p>
</p>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter