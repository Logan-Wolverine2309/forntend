import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card} from '@mui/material';
import AddressCard from '../Cart/AddressCard';
import { AddLocation } from '@mui/icons-material';



const Address = ({item, showButton, handleSelectAddress}) => {
  const createOrderUsingSelectedAddress = ()=> {

  }
  const handleOpenAddressModal=()=> setOpen(true);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleSubmit=(value)=>{
      console.log(" form value",value)
    }
  return (
    
    <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
    <div>
      <h1 className="text-center font-semibold text-2xl py-10">
        Choose Delivery Address
        </h1>
        <div className="flex gap-5 flex-wrap justify-center">
          
            <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} showButton={true}/>
            
          <Card className="flex gp-5 w-64  p-5">
    <AddLocation/>
    <div className="space-y-3 text-gray-500">
        <h1 className="font-semibond text-lg text-white">Add New Address</h1>
        
            <Button  variant="outlined"  fullWidth onClick={handleOpenAddressModal}>Add</Button>
    </div>
  
 </Card>
        </div>
    </div>
   </section>
  )
}

export default Address
