import React from 'react'
import Home from '../Home/Home'
import RestaurantDetails from '../Restaurant/RestaurantDetails'
import Cart from '../Cart/Cart'
import Profile from '../Profile/Profile'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from '../Navbar/Navbar'
import Auth from '../Auth/Auth'
import RestaurantDetails_2 from '../Restaurant/RestaurantDetails_2'
import RestaurantCard_3 from '../Restaurant/RestaurantCard_3'
import RestaurantDetails_3 from '../Restaurant/RestaurantDetails_3'
import RestaurantDetails_4 from '../Restaurant/RestaurantDetails_4'
import Search from '../Search/Search'

const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/resturant/city/:title/:id' element={<RestaurantDetails/>}/>
            <Route path='/resturant_2/city/:title/:id' element={<RestaurantDetails_2/>}/>
            <Route path='/resturant_3/city/:title/:id' element={<RestaurantDetails_3/>}/>
            <Route path='/resturant_4/city/:title/:id' element={<RestaurantDetails_4/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            
      </Routes>
      <Auth/>
    </div>
  )
}

export default CustomerRoute

// /my-profile/orders