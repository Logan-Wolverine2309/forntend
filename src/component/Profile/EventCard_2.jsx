import React from 'react'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard_2 = () => {
  return (
    <div>
    <Card sx={{width:345}}>
      <CardMedia 
          sx={{height:345}} 
      image='https://cdn.pixabay.com/photo/2019/10/22/13/32/cooking-4568742_1280.jpg'/>
      <CardContent>
          <Typography variant='h5' className='text-blue-500'>
          International Street Food Night
          </Typography>
          <Typography variant='body2' className='text-gray-400'>
          Sample street food from different cultures, such as Thai noodles, Turkish kebabs, and Japanese sushi rolls. The event also features cultural performances.
          </Typography>
          <div className='py-2 space-y-2'>
              <p>{"Kolkata"}</p>
              <p className="text-sm text-green-500">
              Start Time: 5:00 PM
              </p>
              <p className='text-sm text-red-600'>
                End Time: 11:00 PM
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

export default EventCard_2