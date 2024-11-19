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

const RestaurantDetails = () => {
    const [foodType]=useState("all")
    

    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
        
    }
  return (
    <div className='px-5 lg:px-20'>
      
    <section>
      <h3 className="text-gray-500 py-2 mt-10">Home/India/fast food Hub/3</h3>
      <div>
          <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                  <img className="w-full h-[40vh] object-cover" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/93/bc/9b/le-grill-robuchon-restaurant.jpg?w=600&h=-1&s=1" alt="" />

              </Grid>
              <Grid item xs={12} lg={6}>
                  <img className="w-full h-[40vh] object-cover" src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" alt="" />

              </Grid>

           <Grid item xs={12} lg={6}>
                  <img className="w-full h-[40vh] object-cover" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4d/bf/e4/social-kitchen-is-our.jpg?w=600&h=-1&s=1" alt="" />

              </Grid>
              <Grid item xs={12} lg={6}>
                    <img className="w-full h-[40vh] object-cover" src="https://img.freepik.com/free-photo/cocktail-wooden-table-restaurant_23-2147936121.jpg" alt="" />

                </Grid>

          </Grid>
          
      </div>
      <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Fast Food Hub</h1>
           <p className="text-gray-500 mt-1">
              you can consider the restaurant's atmosphere, which includes the decor, lighting, colors, and seating. 
              The style and character of the restaurant's atmosphere is known as its ambiance.
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
                 Mon-Sun:11.00AM - 10.00PM (Today)
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

export default RestaurantDetails