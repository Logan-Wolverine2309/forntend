import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
import RestaurantCard_2 from '../Restaurant/RestaurantCard_2'
const Favorites = () => {
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>

      <div className="flex flex-wrap justify-center">

        <RestaurantCard/>
        <RestaurantCard_2/>
      </div>
    </div>
  )
}
  

export default Favorites
