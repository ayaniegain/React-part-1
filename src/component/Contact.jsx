import React, { useEffect, useState , useContext} from 'react'
import {ThemeContext} from "../App"
import {Link} from "react-router-dom"



function Contact() {
  const theme = useContext(ThemeContext);

    const[count,setCount]=useState(0)
  const [intervalId, setIntervalId] = useState(null);
  
 let  startInterval=()=>{

let id=setInterval(() => {
     setCount((prevSeconds) => prevSeconds + 1);
    }, 1000);
    setIntervalId(id)

  }
  
 
let stopInterval=()=>{
    clearInterval(intervalId)
    setIntervalId(null)
  }

  useEffect(() => {
    return () => {
      stopInterval()
    }
  }, [])
  
  
  return (
    <>
   <Link to="/"> <li>Home</li>  </Link>
   <h3>{theme}</h3>
    <h2>count: {count}</h2>
    <button onClick={stopInterval}>click</button>
    <button onClick={startInterval}>click</button>
    </>
  )
}

export default Contact