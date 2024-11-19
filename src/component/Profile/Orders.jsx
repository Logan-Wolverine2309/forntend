import React from 'react'
import OrderCard from './OrderCard'
import OrderCard_2 from './OrderCard_2'

const Orders = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibond'>My Orders</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
      <OrderCard/>
      <OrderCard_2/>
      </div>
    </div>
  )
}

export default Orders
