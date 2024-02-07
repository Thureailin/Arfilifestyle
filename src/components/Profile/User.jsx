// import { useState } from 'react';
// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react';
// import profile from '../../assets/img/detail/profile.jpg'
import axios from 'axios'
import {useSelector} from "react-redux";
import { Link, useParams } from 'react-router-dom';
const User = () => {
    const userId = localStorage.getItem("user_id")
    // const name = localStorage.getItem("name")

    // const email = localStorage.getItem("email")

    // const delivered_address = localStorage.getItem("delivered_address")
    // const photo = localStorage.getItem("photo")
    // const phone= localStorage.getItem("phone")
    // const userId = localStorage.getItem("user_id")

    const params = useParams()
    // console.log("id ",userId)
    const [profileData, setProfileData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = useSelector(state=>state.cart.url)
    
    const [formData,setFormData] = useState({
      id:userId
        
      });
    useEffect(() => {
      // Fetch data when the component mounts
      axios.post(url+'/api/user/detail',{id:userId}) // Replace with your API endpoint
        .then(response => {
            console.log(response.data,"userdetail")
          setProfileData(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error);
          setIsLoading(false);
        });
    }, []);
   
  return (
    <div className="block sm:block md:flex lg:flex xl:flex 2xl:flex justify-around items-start mt-11 ">
        <div className="shadow-xl  border-[2px] border-blue-900 rounded-[10px]">
            <div className=''>
                <div className='flex p-5 '>
                    <p className='font-bold text-cus-primary'>Full Name</p>
                    <p className='ml-[100px] font-bold'>{profileData.name}</p>
                </div>
                <div className='flex mt-2 p-5'>
                    <p className='font-bold text-cus-primary'>Email</p>
                    <p className='ml-[100px] font-bold'>{profileData.email}</p>
                </div>
                <div className='flex mt-2 p-5'>
                    <p className='font-bold text-cus-primary'>Phone</p>
                    <p className='ml-[100px] font-bold'>{profileData.phone}</p>
                </div>
                <div className='flex mt-2 mb-11  p-5'>
                    <p className='font-bold text-cus-primary'>Address</p>
                    <p className='ml-[100px] font-bold'>{profileData.delivered_address}</p>
                </div>
                
            </div>
    </div>
    <div className="shadow-xl border-[2px] border-blue-900 rounded-[10px]  -ml-[100px] lg:-ml-[100px] xl:-ml-[300px] 2xl:-ml-[800px] ">
        <div className="p-11">
            <div className=''>
            <img src={profileData.photo} className='w-[150px] h-[150px] rounded-[50%]'/>
            </div>
            <p className='text-cus-primary text-xl text-center font-bold mt-5'>{profileData.name}</p>
            <p className='text-lg text-black font-bold text-center mt-5'>{profileData.email}</p>
            <Link to={'/updateprofile'}>
            <button className='bg-cus-primary text-white p-2 m-8 rounded-sm '>Profile Update</button>
            </Link>
        </div>
    </div>
   
</div>

  )
}

export default User

