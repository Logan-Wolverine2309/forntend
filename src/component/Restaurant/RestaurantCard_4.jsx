import React from 'react'
import { Card, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
const RestaurantCard_4 = () => {
  const navigate=useNavigate()
  return (
    <Card  onClick={()=>navigate("/resturant_4/city/:title/:id")} className='m-5 w-[18rem]'>
        <div className={`${true?'cursor-pointer':"cursor-not-allowed"}relative`}>
<img className="w-full h-[10rem] rounded-t-md object-cover"
src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
            <p className="font-semibold text-lg"> Urban Spice Bistro</p>
            <p className="text-gray-500 text-sm">
            A vibrant restaurant that brings the bold flavors of global street food to your plate, paired with an eclectic urban ambiance.
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

export default RestaurantCard_4