import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MenPage from "./Pages/MenPage"
import WomenPage from "./Pages/WomenPage"
import Accessories from "./Pages/Accessories"
import Grouporder from "./Pages/Grouporder"
import Shopdetail from "./Pages/Shopdetail"
import Cart from "./Pages/Cart"
import Payment from "./Pages/Payment"
import Payment3 from "./Pages/Payment3"
import Headbar from "./components/Headbar"
// import Collection from "./Pages/Collection"
// import Collectionwomen from "./components/Collection/Collectionwomen"
// import WomenShopdetail from "./Pages/WomenShopdetail"
import OrderPage from "./Pages/OrderPage"
import TrackOrder from "./Pages/TrackOrder"
import Threads from "./Pages/Threads"
import HelpCenter from "./Pages/HelpCenter"
import Register from "./components/Profile/Register"
import Login from "./components/Profile/Login"

import User from "./components/Profile/User"
import ChangePassword from "./components/Profile/ChangePassword"
// import Logout from "./components/Profile/Logout"
import MenItem from "./components/Item/MenItem"
import WomenItems from "./components/Item/WonmenItem"
import WonmenShopdetail from "./Pages/WomenShopdetail"
import UpdateProfile from "./components/Profile/UpdateProfile"
import RouteGuard from "./components/RouteGuard"
import VideoInventory from "./Pages/VideoInventory"

const App = () => {
  return (
    <div>
      {/* <Headbar/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/men" element={<MenPage/>} />
        <Route path="/women" element={<WomenPage/>} />
        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/group-order" element={<Grouporder/>} />
        <Route path="/shop/men/:id/:subcategory" element={<Shopdetail/>}/>
        <Route path='/shop/women/:id/:subcategory' element={<WonmenShopdetail/>}/>
        <Route path="/videoInventory" element={<VideoInventory/>}/>
        {/* <Route path="/shop/women/:id/:subcategory" element={<WomenShopdetail/>}/>
        <Route path="/men/collection/:category" element={<Collection/>}/> */}
        {/* <Route path="/women/collection/:id" element={<Collectionwomen/>}/> */}
        <Route path='/men/Item/:subcategory' element={<MenItem/>}/>
        <Route path='/women/Item/:subcategory' element={<WomenItems/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Payment/>}/>
        <Route path="/help_center" element={<HelpCenter/>}/>
        <Route path="/checkout/3" element={<Payment3/>} />
        <Route path="/orderPage/:id" element={<OrderPage/>} />
        <Route path='/track' element={<TrackOrder/>}/>
        <Route path="/threads" element={<Threads/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<RouteGuard><User/></RouteGuard>} />
        <Route path="/changePassword" element={<RouteGuard><ChangePassword/></RouteGuard>}/>
        <Route path="/updateprofile" element={<RouteGuard><UpdateProfile/></RouteGuard>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App