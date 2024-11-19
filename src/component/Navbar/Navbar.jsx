import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge, Box, IconButton } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';
import "./Navbar.css"
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import Profile from '../Profile/Profile';
import { useState,useEffect } from 'react';


export const Navbar = () => {
  const navigate=useNavigate()
  const [isUser,setUser]=useState(false)
  useEffect(()=>{
    if(isUser)
    {
      setUser(false)
      navigate("/my-profile")
    }

      
  },[isUser])
  return (
    <>
    <Box 
    className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#f50057] lg:px-20 flex
    justify-between'>
  
    
       <div className='lg:mr-10 cursor-pointer flex items-center
        space-x-4'>
          <li className='logo font-semibold text-gray-300 text-2x1'>
            <i>FoodSphere</i>

          </li>

       </div>

    
  <div className='flex items-center space-x-2 la:space-x-10'>
          <div className=''>
            <IconButton onClick={()=> navigate("/search")}>
              <SearchIcon sx={{fontSize:"1.5rem"}}/>

            </IconButton>
          </div>
          
          <div className=''>

          {false?<Avatar sx={{ bgcolor: "white", color: pink.A400}}>J</Avatar>:
          <IconButton onClick={()=>
          // navigate("/account/login")
          setUser(!isUser)
          
           }>
            <Person/>
          </IconButton>}
          </div>
          <div className=''> 
           
            <IconButton  onClick={()=>navigate("/cart")}>
              
            
            <Badge color="primary" badgeContent={2}>
              <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
              </Badge>
              
             
            </IconButton>
         
   </div>
           
           </div>



    </Box>
    
   
      </>
  );
};


