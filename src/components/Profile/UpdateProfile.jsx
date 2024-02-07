import { useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const UpdateProfile = () => {
    const url = useSelector(state=>state.cart.url)
    const userId = localStorage.getItem('user_id')
    const navigate = useNavigate()
    const [response,setResponse] = useState()
    const [formData,setFormData] = useState({
        id:userId,
        name:"",
        username:"",
        phone:"",
        delivered_address:"",
        email:"",
        // photo:"",

    })
    const sendDataToBackend = async () => {

        const response = await axios.post(url+'/api/website/user/info/update',formData);
    
        // Check if the request was successful
        if (response.status === 200) {
            setResponse(response.data.message); // Assuming the backend sends a JSON response with a "message" field
        } else {
            console.error('Failed to send data to the backend');
        }
    }    
    const handleSubmit = (e) => {
        e.preventDefault();
        // setShowAlert(false);
        sendDataToBackend(formData);
        console.log(formData)
        navigate('/')
        };
        

    const inputHandleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
           
           
          });
    }
   return (
    <div className="mt-5">
        
        <div className="">
            
            <h2 className="text-center text-cus-primary font-bold text-[20px] uppercase">Update Profile </h2>
        </div>
        
<form className="text-center  mt-5 shadow-2xl p-5" encType="multipart/form-data" onSubmit={handleSubmit} >
    <div className="grid gap-6 mb-6 md:grid-cols-2 mt-5">
        <div>
            <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John@gmail.com" required
            name="name"
            value={formData.name}
            onChange={inputHandleChange}
            
            />
        </div>
        <div>
            <label for="UserName" className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
            <input type="text" id="UserName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John@gmail.com" required
            name="username"
            value={formData.username}
            onChange={inputHandleChange}
            
            />
        </div>
        <div>
            <label for="Email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" id="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe@gmail.com" required
             name="email"
             value={formData.email}
             onChange={inputHandleChange}
            />
        </div>
        <div>
            <label for="Phone Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
            <input type="number" id="Phone Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required
            name="phone"
            value={formData.phone}
            onChange={inputHandleChange}
            />
        </div>  
        <div>
            <label for="delivered_address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Delivered_Address</label>
            <input type="text" id="delivered_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required
            name="delivered_address"
            value={formData.delivered_address}
            onChange={inputHandleChange}
            />
        </div>
        {/* <div>
            <label for="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
            <input type="file" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required
            name="photo"
            value={formData.photo}
            onChange={inputHandleChange}
            />
        </div> */}
        
    </div>
    <div>
    </div>
    <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
</form>

    </div>
  )
}

export default UpdateProfile