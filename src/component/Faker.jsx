import React from 'react'
import {Link} from "react-router-dom"
import CustomHooks from './use.custom';

function Faker() {
const url="https://api.publicapis.org/entries"
const [ product ] = CustomHooks(url);

console.log("product",product)
 
  

  return (
   <>
   <Link to="/"> <li>Home</li>  </Link>
   
   {
    product.map((e,index)=>(
      <h2 key={index}>{e.API}</h2>
    ))
   }
   </>
  )
}

export default Faker