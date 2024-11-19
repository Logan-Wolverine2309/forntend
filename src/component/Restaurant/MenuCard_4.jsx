import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo=[
    {
        catagory:"Nuts & Seeds",
        ingredients:["Cashews"]
    },
    {
        catagory:"Protein",
        ingredients:["Chicken","Bacon Strips"]
    },
    {
        catagory:"Pepperoni",
        ingredients:[" Pepperoni slices"]
    },
]


const MenuCard_4 = () => {

    const handleCheckBoxChange=(value)=>{
        console.log("value")
    }

  return (
    <Accordion>
    <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className="lg:flex items-center lg:gap-5" >
                <img className='w-[7rem] h-[7rem] object-cover'
                 src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt="" />
                 <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                    <p className="font-semibond text-xl">Pizza</p>
                    <p>₹200</p>
                    <p className="text-gray-400">
                    Known for traditional recipes with simple and authentic flavors.
                    </p>
                 </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>

            
          <form>
            <div className="flex gaps-5 flex-wrap">
            {
                    demo.map((item)=>
                        <div>
                    <p>{item.catagory}</p>
            <FormGroup>
             {item.ingredients.map((item)=> ( 
             <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)} />} label={item} />))}
    
            </FormGroup>  
            </div> 
              )}
            
             </div>
             <div className="pt-5">
                <Button variant="contained" disabled={false} type="submit">{true?"Add to Cart":"Out of Stock"}</Button>
             </div>
          </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard_4