import React from 'react'
import { Card, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';

const RestaurantCard_3 = () => {
  const navigate=useNavigate()

  

  return (
    <Card onClick={()=>navigate("/resturant_3/city/:title/:id")}  className='m-5 w-[18rem]'>
        <div className={`${true?'cursor-pointer':"cursor-not-allowed"}relative`}>
<img className="w-full h-[10rem] rounded-t-md object-cover"
src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
            <p className="font-semibold text-lg"> Harvest & Hearth</p>
            <p className="text-gray-500 text-sm">
            A farm-to-table experience focusing on fresh, seasonal ingredients. 
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

export default RestaurantCard_3