import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5 mt-5'>
      <div className='flex items-center space-x-5'>
      <img
      className="h-16 w-16" 
      src="https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600" 
      alt="" 
      />
        <div>
        <p>Pizza</p>
        <p>₹300</p>
        </div>
      </div>
      <div>
        <button  className="cursor-not-allowed text-green-400">Delivered</button>
      </div>
      
    </Card>
    
  )
}

export default OrderCard
