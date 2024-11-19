import { Button } from '@mui/material'
import React from 'react'

const Search = () => {
  return (
    
    <div className="min-h-screen bg-black text-white items-center">
      {/* Header with Search Bar */}
      <header className="p-8  items-center justify-center">
        <div className="relative w-full max-w-3xl">
          <input
            type="text"
            placeholder="Search for cuisines or dishes..."
            className="w-full px-4 py-2 text-black rounded-lg focus:outline-none"
          />
          <Button className="absolute right-3 top-2.5 text-black"></Button>
        </div>
      </header>

      {/* Popular Cuisines */}
      <section className="p-8">
        <h2 className="text-xl mb-4 font-semibold">Popular Cuisines</h2>
        <div className="flex space-x-6 overflow-x-auto scrollbar-hidden">
          {[
            { name: "Pizza", img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Burger", img: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Sandwich", img: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Fried Rice", img: "https://cdn.pixabay.com/photo/2015/10/01/14/26/fried-rice-967081_1280.jpg" },
            { name: "Cake", img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Biryani", img: "https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Thali", img: "https://cdn.pixabay.com/photo/2024/01/23/10/02/thali-8527370_1280.jpg" },
            { name: "North Indian", img: "https://cdn.pixabay.com/photo/2022/03/19/12/33/side-dish-7078451_1280.jpg" },
            { name: "Rolls", img: "https://media.istockphoto.com/id/843375110/photo/grilled-chicken-kebab-doner-wrap-with-onion-parsley-and-tomato-on-rustic-white-painted-wood.jpg?s=612x612&w=0&k=20&c=uUJNpQ55wjUNHjfp8D2HIUHPxYFL7IrfPuwt_Fa-Ei4=" },
          ].map((cuisine, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 min-w-[100px]"
            >
              <img
                src={cuisine.img}
                alt={cuisine.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <span>{cuisine.name}</span>
            </div>
          ))}
        </div>
      </section>

            {/* Restaurant Cards */}
            <section className="px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Ashoka Restaurant",
              rating: "4.3",
              time: "27MIN",
              dish: "Pizza",
              price: "₹299",
              img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Rice, Sambar, Papad",
            },
            {
              name: "Spice Villa",
              rating: "4.5",
              time: "30MIN",
              dish: "Biryani",
              price: "₹399",
              img: "https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Chicken, Raita",
            },
            {
              name: "Taste Buds",
              rating: "4.0",
              time: "25MIN",
              dish: "Burger",
              price: "₹249",
              img: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Cheese, Fries",
            },
          ].map((restaurant, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 flex justify-between items-start"
            >
              <div>
                <h3 className="text-lg font-bold">{restaurant.name}</h3>
                <p className="text-sm">⭐ {restaurant.rating} • {restaurant.time}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold">Promoted Dish</h4>
                  <p className="text-sm">{restaurant.dish}</p>
                  <p className="text-sm">{restaurant.price}</p>
                  <p className="text-sm text-gray-400">{restaurant.description}</p>
                </div>
              </div>
              <div className="text-center">
                <img
                  src={restaurant.img}
                  alt="Dish"
                  className="w-16 h-16 rounded-md object-cover mb-2"
                />
<Button variant="contained" disabled={false} type="submit">{true?"Add":"Out of Stock"}</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Search