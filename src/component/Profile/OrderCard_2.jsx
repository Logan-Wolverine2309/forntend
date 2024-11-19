import React from 'react'
import { Button, Card } from '@mui/material'

const OrderCard_2 = () => {
  return (
    <Card className='flex justify-between items-center p-5 mt-5'>
      <div className='flex items-center space-x-5'>
      <img
      className="h-16 w-16" 
      src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=" 
      alt="" 
      />
        <div>
        <p>Briyani</p>
        <p>₹599</p>
        </div>
      </div>
      <div>
        <button className="cursor-not-allowed text-red-600">Cancelled</button>
      </div>
      
    </Card>
  )
}

export default OrderCard_2