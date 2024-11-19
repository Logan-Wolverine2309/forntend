import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const demo=[
    {
        catagory:"Stuffed Pasta",
        ingredients:["Ravioli, Tortellini, Agnolotti"]
    },
    {
        catagory:"Flat and Sheet Pasta",
        ingredients:["Lasagna, Pappardelle, Tagliatelle"]
    },
    {
        catagory:"Miniature Pasta",
        ingredients:["Orzo, Ditalini, Stelline"]
    },
]

const MenuCard_2 = () => {
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
                 src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                 alt="" />
                 <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                    <p className="font-semibond text-xl">Pasta</p>
                    <p>₹299</p>
                    <p className="text-gray-400">
                    Long, thin, and often paired with creamy or tomato-based sauces, these are some of the most versatile types of pasta.

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
                        <div>"
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

export default MenuCard_2