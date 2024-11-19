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

const RestaurantDetails_3 = () => {
    const [foodType]=useState("all")

    

    
    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
        
    }
  return (
    <div className='px-5 lg:px-20'>
      
    <section>
      <h3 className="text-gray-500 py-2 mt-10">Home/India/Harvest & Hearth/3</h3>
      <div>
          <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                  <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg" alt="" />

              </Grid>
              <Grid item xs={12} lg={6}>
                  <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg" alt="" />

              </Grid>

           <Grid item xs={12} lg={6}>
                  <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2018/01/15/17/32/table-3084384_1280.jpg" alt="" />

              </Grid>
              <Grid item xs={12} lg={6}>
                    <img className="w-full h-[40vh] object-cover" src="https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888_1280.jpg" alt="" />

                </Grid>

          </Grid>
          
      </div>
      <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Harvest & Hearth</h1>
           <p className="text-gray-500 mt-1">
            A farm-to-table experience focusing on fresh, seasonal ingredients. At Harvest & Hearth, dishes are thoughtfully crafted to bring out the authentic taste of each ingredient, creating a wholesome dining experience that feels both comforting and innovative
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
                 Mon-Sun:.05.00Pm - 10.00PM (Today)
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

export default RestaurantDetails_3