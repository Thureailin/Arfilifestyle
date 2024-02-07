import { Link, NavLink } from "react-router-dom"
import logo from "../../src/assets/img/home/home2/logo.png"
import {AiOutlineSearch} from "react-icons/ai"
import { useState } from "react"
import { LuLogIn } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { Badge } from "flowbite-react"
import { useSelector } from "react-redux"
import { Dropdown } from 'flowbite-react';
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Navbar = () => {

  
 const user = localStorage.getItem('user_id')
  const url = useSelector(state=>state.cart.url)
  const [response,setResponse] =useState()
  const [formData,setFormData] = useState({
    user_id:user
  })
  const {cartItems} = useSelector(state => (state.cart));
  const [isOpen, setIsOpen] = useState(false)
  
  

   const navigate = useNavigate()

  const logout = async () => {
    console.log(localStorage.getItem('user_id'))
    const response = await axios.post(url+'/api/logout',{user_id:user});
   
    // Check if the request was successful
    if (response.status === 200) {
       
        setResponse(response.data.message);
         // Assuming the backend sends a JSON response with a "message" field

         localStorage.clear();
        //  Cookies.(cartItems)
        navigate('/')
    } else {
        console.error('Failed to send data to the backend');
    }
}

// const gotoCart = ()=>{
//   // window.location.href ='/cart'
// }
  
	const toggleNav = () => {
		setIsOpen(!isOpen)
    
}
return (
  <nav 
  
    className="lg:h-[62px] sticky top-0 right-0 z-40 flex-no-wrap flex md:w-full sm:w-full w-full  xl:w-full 2xl:w-full items-center justify-end bg-cus-primary lg:w-full">
    <div>
      <div className="flex 2xl:mr-[300px] w-full flex-wrap px-3 items-center justify-end lg:justify-center lg:px-0 ">
        <button onClick={toggleNav}
          className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
           
          <span className="[&>svg]:w-7"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white">
              <path fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
   
        
        <div style={{height: isOpen ? "0px" : "130px",opacity:isOpen? "0":"10"}} 
      
  className=" basis-[100%] items-center   justify-around lg:!flex lg:basis-auto transition-all duration-300" id="navbarSupportedContent1" 
        >
        
          
        <div className=" shrink-0   h-[80px] lg:block" aria-details="logo-container">
            <div
              className=" absolute -top-12 left-0  translate-y-1/2 flex justify-around lg:w-[130px] lg:h-[72px] xl:w-[200px] bg-white w-[200px] text-3xl font-bold">
              <img src={logo} className="lg:h-[80px]   w-[80px] h-[80px]" alt=""/>
            </div>
            </div>
   
            <div className=" md:ml-[200px] sm:-ml-[200px] lg:-mr-[60px] xl:-ml-[1500px] 2xl:-ml-[700px]  ">
       
          <ul
            className="-mt-11 lg:mt-4  md:-mr-[-100px]  lg:-mr-[-20px] xl:-mr-[-100px] 2xl:-mr-[-200px]  "> 
             <div
              className="flex justify-around items-center overflow-x-auto lg:overflow-hidden xl:overflow-hidden 2xl:overflow-hidden ">
               
            <NavLink to='/'>
              <li className=" mb-2 p-1 lg:p-2 hover:bg-white rounded-sm  lg:w-[100%] xl:w-[100%] 2xl:w-[100%] font-bold text-white  text-sm transition-colors whitespace-nowrap hover:text-gray-800 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                 Home
            </li>
            </NavLink>
            <NavLink to='/men'>
              <li className="mb-2  p-1 lg:p-2 hover:bg-white rounded-sm   lg:w-[100%] xl:w-[100%] 2xl:w-[100%] text-white  font-bold  text-sm transition-colors whitespace-nowrap hover:text-gray-800 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                 Men
            </li>
            </NavLink>
            <NavLink to='/women'>
              <li className=" mb-2  p-1 lg:p-2 hover:bg-white rounded-sm   lg:w-[100%] xl:w-[100%] 2xl:w-[100%] text-white  font-bold  text-sm transition-colors whitespace-nowrap hover:text-gray-800 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                 Women
            </li>
            </NavLink>
            <NavLink to='/accessories'>
              <li className=" mb-2 p-1 lg:p-2 hover:bg-white rounded-sm lg:w-[100%] xl:w-[100%] 2xl:w-[100%] text-white  font-bold  text-sm transition-colors whitespace-nowrap hover:text-gray-800 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                 Accessories
            </li>
            </NavLink>
            <NavLink to='/group-order'>
              <li className=" mb-2 p-1 lg:p-2 hover:bg-white rounded-sm  lg:w-[100%] xl:w-[100%] 2xl:w-[100%] text-white font-bold   text-sm transition-colors whitespace-nowrap hover:text-gray-800 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                Group-Order
            </li>
            </NavLink>
            <NavLink to='/threads'>
              <li className=" mb-2 p-1 lg:p-2 hover:bg-white rounded-sm   lg:w-[100%] xl:w-[100%] 2xl:w-[100%] text-white font-bold  text-sm transition-colors whitespace-nowrap hover:text-gray-800 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
                Articles
            </li>
            </NavLink>
            
            <NavLink to='/help_center '>
              <li className="  mb-2 p-1 lg:p-2 hover:bg-white rounded-sm    lg:w-[100%] xl:w-[100%] 2xl:w-[100%] text-white font-bold   text-sm transition-colors whitespace-nowrap hover:text-gray-800 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
               Help
            </li>
            </NavLink>
            <NavLink to={'/cart'} className=" 2xl:ml-[30px] w-11 lg:ml-1 hidden  sm:block md:block lg:block xl:block 2xl:block"> 
           <div className="relative " >
            <Badge className="absolute bottom-5 left-5 badge w-2 h-5 pr-3  text-white bg-red-700 rounded-[30%] badge-sm" >
              {cartItems.length}
              
                
             </Badge>
            <IoCartOutline
              className=" relative text-3xl text-violet-50"
              style={{ zIndex: 10 }}
            /> 
           </div> 
           
        </NavLink>
       
 

             </div> 
           </ul>  
           
            </div>
           
      
                
           
            <div className="flex justify-around items-center -ml-2  lg:ml-11 xl:-ml-[350px] 2xl:-ml-[100px]">
              <div className=" xl:mx-5 lg:mx-1 2xl:mx-1  ">
            < Dropdown label={<FaRegUser/>} dismissOnClick={true} className="font-bold text-[50px]  ">
      
      <Link to={'/login'}>
  <Dropdown.Item className="text-cus-primary font-bold">Login<LuLogIn className="mx-6 font-bold text-red-700"/></Dropdown.Item>
  </Link>
 
  <Link to={'/profile'}>
  <Dropdown.Item className="text-cus-primary font-bold">Profile<FaRegUser className="mx-5 font-bold text-red-700"/></Dropdown.Item>
  </Link>
  <Link to={'/changePassword'}>
  <Dropdown.Item className="text-cus-primary font-bold">Change Password</Dropdown.Item>
  </Link>
  
  <Dropdown.Item className="text-cus-primary font-bold" onClick={logout}>Log out<CiLogout className="mx-5 font-bold text-red-700 "/></Dropdown.Item>
  
  <NavLink to='/track'>
              <Dropdown.Item className="lg:px-2 xl:px-2   lg:py-2 px-6 mb-2 hover:bg-white rounded-sm text-cus-primary mx-2 font-bold  text-sm transition-colors whitespace-nowrap hover:text-gray-800 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-zinc-400">
               Track-Order
            </Dropdown.Item>
            </NavLink>
</Dropdown> 
</div>
<div className="flex space-x-2 items-center ">
          <a href="http://arfilifestyle.com/" className="font-bold text-white text-[15px] hover:text-gray-100
         
          
          ">ENG</a>
          <span className="font-bold text-white">|</span>
          <a href="ไทย" className="font-bold text-[15px] text-white">ไทย</a>
              </div>
<div className="flex justify-between items-center mx-6 xl:mx-2 2xl:mx-2">

      <input
        type="search"
        className="relative text-[#2563eb]  rounded-[5px]  m-0 !bg-white  block 2xl:w-[200px] xl:w-[200px] md:w-[100px]  lg:w-[150px] w-[150px] min-w-0 flex-auto  border-solid !border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600  dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        placeholder="Search......."
        aria-label="Search"
        aria-describedby="button-addon3 " />
        <button
          className="relative text-white  z-[2] rounded-r p-2 text-xs font-medium uppercase transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          type="button"
          id="button-addon3"
          data-te-ripple-init>
            <AiOutlineSearch className="w-5 h-5"/>
        </button>
     </div>
            </div>
       </div>   
       <NavLink to={`/cart`}  className=" 2xl:ml-[30px] lg:ml-1 -mt-[80px] sticky sm:hidden lg:hidden xl:hidden 2xl:hidden  "style={{opacity:isOpen? "0":"10"}}> 
           <div className="relative " >
            <Badge className="absolute bottom-5 left-5 badge w-2 h-5 pr-3  text-white bg-red-700 rounded-[30%] badge-sm">
              {cartItems.length}
              
                
             </Badge>
            <IoCartOutline
              className=" relative text-3xl text-violet-50"
              style={{ zIndex: 10 }}
            /> 
           </div> 
           
        </NavLink>
        </div>
    </div> 
   </nav>  
  
)
}

export default Navbar