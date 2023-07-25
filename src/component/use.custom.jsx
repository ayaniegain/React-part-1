import React, { useEffect, useState } from 'react'
import axios from "axios"


function CustomHooks(url) {
const [product,setProduct]=useState([])

useEffect(() => {
    axios.get(url)
   .then((response)=>{
     let res= response.data
     setProduct(res.entries)
   })
 }, [])
 return [product]

}

export default CustomHooks