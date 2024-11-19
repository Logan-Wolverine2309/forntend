import React from 'react'
import EventCard from './EventCard'
import EventCard_2 from './EventCard_2'

const Events = () => {
  return (
    <div className='mt-5 px-5  flex flex-wrap flex-ro  gap-5'>
      
      <EventCard/>
      <EventCard_2/>
    </div>
    
  )
}

export default Events
