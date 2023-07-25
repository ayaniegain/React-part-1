import React from 'react'

import { useNavigate } from 'react-router-dom'

function About() {

  const navigate=useNavigate()

    let HandleSubmit=(param)=> {
      console.log(param)
      navigate("/login")
      
    }

  return (
    <>
    <form action="">
      <input type="text" name="name" />
      <input type="password" name="password"  />
    <button onClick={()=>HandleSubmit("hello")}>click</button>
    </form>
    </>
    
  )
}

export default About