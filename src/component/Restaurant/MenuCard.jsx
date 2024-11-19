import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'


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
        catagory:"Bread",
        ingredients:["Humburger Burn"]
    },
]

const MenuCard = () => {
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
                 src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt="" />
                 <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                    <p className="font-semibond text-xl">Burger</p>
                    <p>₹199</p>
                    <p className="text-gray-400">
                      A hamburger or simply burger is a food consisting of fillings--usually a patty of ground meal.
                        typicaly beef--placed inside a sliced bun or bread roll.
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
  );
};

export default MenuCard
