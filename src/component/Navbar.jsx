import {React,useContext,useRef,useReducer,useMemo} from 'react'
import {NavLink} from "react-router-dom"
import {ThemeContext} from "../App"


let reducer=(state,action)=>{
  if (action.type=="inc") {
    return state+1
  }
  if(action.type=="dec"){
    return state-1

  }

}

function Navbar() {
  const theme = useContext(ThemeContext);
  const inputRef = useRef(0)
  const [state, dispatch] = useReducer(reducer,0)
 console.log(inputRef)


 const HandleClick = (() => {
  console.log(inputRef.current.value);
});


  return (
  <>
  <ul style={{display:"flex", justifyContent:"flex-end", gap:"20px" }}>
   <NavLink to="/"> <li>Home</li>  </NavLink>
   <NavLink to="/about"> <li>About</li> </NavLink>
   <NavLink to="/contact"> <li> Contact</li> </NavLink>
   <NavLink to="/faker"> <li> faker</li> </NavLink>
  </ul>
<h2>hello {theme}</h2>
    <div>
      <input type="text" ref={inputRef} />
    </div>
    <section>
      <h2>count: {state}</h2>
      <button onClick={()=>dispatch({type:"inc"})}>Increment</button>
      <button onClick={()=>dispatch({type:"dec"})}>Decrement</button>
    </section>
    <button onClick={HandleClick}>click me ref</button>
  </>
  )
}

export default Navbar