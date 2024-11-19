import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia 
            sx={{height:345}} 
        image='https://cdn.pixabay.com/photo/2021/02/05/11/58/street-food-5984348_1280.jpg'/>
        <CardContent>
            <Typography variant='h5' className='text-blue-500'>
            Food Truck Festival
            </Typography>
            <Typography variant='body2' className='text-gray-400'>
            A gathering of various food trucks offering cuisines from all over the world, including Mexican, Italian, and local specialties. Enjoy live music and a casual outdoor dining experience.
            </Typography>
            <div className='py-2 space-y-2'>
                <p>{"Kolkata"}</p>
                <p className="text-sm text-green-500">
                Start Time: 11:00 AM
                </p>
                <p className='text-sm text-red-600'>
                  End Time: 8:00 PM
                </p>
            </div>
        </CardContent>
       {false && <CardActions>
            <IconButton>
            <DeleteIcon/>
            </IconButton>
        </CardActions>}
      </Card>
      
    </div>
  )
}

export default EventCard
