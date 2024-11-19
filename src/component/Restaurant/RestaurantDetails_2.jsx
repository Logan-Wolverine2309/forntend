import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';
import MenuCard_2 from './MenuCard_2';
import MenuCard_3 from './MenuCard_3';
import React, { useState } from 'react'
import MenuCard_4 from './MenuCard_4';


const categories=[
    "Pizza",
    "Biriyani",
    "Burger",
    "Chicken",
    "Rice"
];
const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegitarian Only",value:"vegitarian"},
    {label:"Non-Vegitarian",value:"non-vegitarian"},
    {label:"Seasonal",value:"seasonal"}
];


const RestaurantDetails_2 = () => {
    const [foodType]=useState("all")
   
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
        
    }
  return (
    <div className='px-5 lg:px-20'>
      
    <section>
      <h3 className="text-gray-500 py-2 mt-10">Home/Spice Haven/5</h3>
      <div>
          <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                  <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_1280.jpg" alt="" />

              </Grid>
              <Grid item xs={12} lg={6}>
                  <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg" alt="" />

              </Grid>

           <Grid item xs={12} lg={6}>
                  <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2021/09/26/13/47/table-6657853_1280.jpg" alt="" />

              </Grid>
              <Grid item xs={12} lg={6}>
                    <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2015/04/25/07/55/restaurant-738788_1280.jpg" alt="" />

                </Grid>

          </Grid>
          
      </div>
      <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold"> Spice Haven</h1>
           <p className="text-gray-500 mt-1">
           A cozy yet vibrant spot where traditional flavors meet modern twists. Spice Haven offers an eclectic menu inspired by global spices, giving each dish a unique kick.
           </p>
          <div className="space-y-3 mt-3">
          <p className="text-gray-500 flex items-center gap-3">
          <LocationOnIcon className='text-green-500'/>
              <span>
                 Kolkata, Mumbai, Delhi, Chennai
                   </span> 
                   </p>
                   <p className="text-yellow-500 flex items-center gap-3">
          <CalendarTodayIcon className='text-white'/>
              <span>
                 Mon-Sun:09.00AM - 09.00PM (Today)
                   </span> 
                   </p>
          </div>

      </div>
    </section>
    <Divider/>
    <section className="pt-[2rem] lg:flex relative">
      <div className="space-y-10 lg:w[20%] filter">
       <div className=" box space-y-5 lg:sticky top-28">
  
      </div>

      <div>
          <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
               Food type

          </Typography>

          <FormControl className="py-10 space-y-5" component={"fieldset"}>
              <RadioGroup onChange={handleFilter} name="food_type" value={foodTypes}>

          {foodTypes.map((item=>  

          <FormControlLabel 
          key={item.value}
          value={item.value} 
          control={<Radio />} 
          label={item.label} />
          ))}
              </RadioGroup>
          </FormControl>
         
      </div>
          <Divider/>
      <div>
          <Typography variant="h5" sx={{paddingBottom:"1rem"}}>
               Food Category

          </Typography>

          <FormControl className="py-10 space-y-5" component={"fieldset"}>
              <RadioGroup onChange={handleFilter} name="food_type" value={foodTypes}>

          {categories.map((item=>  
          
          <FormControlLabel 
          key={item}
          value={item} 
          control={<Radio/>} 
          label={item} />
          ))}
              </RadioGroup>
          </FormControl>
         
      </div>
      </div>

      <div className="space-y-5 lg:w[80%] lg:pl-10">
        <MenuCard/>
        <MenuCard_2/>
        <MenuCard_3/>
        <MenuCard_4/>
         
          </div>
    </section>
  </div>
  )
}

export default RestaurantDetails_2