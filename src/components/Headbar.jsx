import {AiOutlineUser} from "react-icons/ai"
const Headbar = () => {
  return (
    <div className=" ml-5 my-3 md:bg-gradient-to-r ">
    <div className="container">
      <div className="flex flex-col justify-end gap-5 py-3 md:flex-row lg:py-0 lg:ml-[650px]">
        <div className="flex space-x-2 items-center ">
          <a href="http://arfilifestyle.com/" className="font-bold text-[15px] hover:text-cus-primary
         
          
          ">ENG</a>
          <span className="font-bold">|</span>
          <a href="ไทย" className="font-bold text-[15px]">ไทย</a>
              </div>
        <div className="flex space-x-2 items-center">
          <AiOutlineUser className="w-5 h-5" />
          <span className="font-semibold"></span>
        </div>
        
        {/* <div className="flex space-x-2 items-center">
          <button className="">
          <AiOutlineShoppingCart className="w-5 h-5" />
          </button>
          <span>0</span>
        </div> */}
      </div>
    </div>
  </div>
  )
}

export default Headbar