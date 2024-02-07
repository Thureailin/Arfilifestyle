import logo from "../../assets/img/home/home2/logo.png"
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import {useSelector} from "react-redux";

const ChangePassword = () => {
    const [response, setResponse] = useState('');
    const navigate = useNavigate()
    const url = useSelector(state=>state.cart.url)
    const userId = localStorage.getItem("user_id")
    const[formData,setFormData] = useState({
       id:userId,
       old_password:"",
       new_password:"",
       confirm_password:""
        
    });
    
    const sendDataToBackend = async () => {

        const response = await axios.post(url+'/api/password/update',formData);
    
        // Check if the request was successful
        if (response.status === 200) {
            setResponse(response.data.message);
             
            navigate('/')
        } else {
            console.error('Failed to send data to the backend');
        }
       
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
       
        setFormData({
            ...formData,
            [name]: value,
           
           
          });
}
const formSubmit = (e) =>{
    e.preventDefault();
    sendDataToBackend(formData)
    console.log(formData)
}
  return (
    <section className="bg-gray-50 dark:bg-gray-900 -mt-[100px]">
    <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-[100px] h-[100px] mr-2" src={logo} alt="logo"/>
              
        </a>
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                   Change Password
                </h1>
                <form className="space-y-4 md:space-y-6" action="#"
                onSubmit={formSubmit}
                >
                   
                    <div>
                        <input type="text" name="old_password"  placeholder="Old Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="Use Email"
                        value={formData.old_password}
                        onChange={handleInputChange}
                        
                        />
                    </div>
                   
                    <div>
                        <input type="password" name="new_password"  placeholder="New Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="Write Password"
                        value={formData.new_password}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input type="password" name="confirm_password"  placeholder="Confirm Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="Write Password"
                        value={formData.confirm_password}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                              <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    
                    <button type="submit" className="w-full text-white bg-cus-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update</button>
                    
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default ChangePassword