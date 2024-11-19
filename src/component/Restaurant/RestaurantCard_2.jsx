import React from 'react'
import { Card, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';

const RestaurantCard_2 = () => {
  const navigate=useNavigate()
  

  return (
    <Card onClick={()=>navigate("/resturant_2/city/:title/:id")}  className='m-5 w-[18rem]'>
        <div className={`${true?'cursor-pointer':"cursor-not-allowed"}relative`}>
<img className="w-full h-[10rem] rounded-t-md object-cover"
src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
alt="" />
<chip
size="small"
className="absolute top-2 left-2"
color={true?"success":"error"}
label={true?"open":'closed'}
  />

        </div>
        <div className='p-4 textpart lg:flex w-full justify-between'>
          <div className="space-y-1">
            <p className="font-semibold text-lg">Spice Haven</p>
            <p className="text-gray-500 text-sm">
            A cozy yet vibrant spot where traditional flavors meet modern twists.
            </p>
          </div>
          <div>
            <IconButton>
              {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>
          </div>

        </div>
      
    </Card>
  )
}

export default RestaurantCard_2