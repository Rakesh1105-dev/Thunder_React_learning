import { useState,useContext} from "react";
//ab mujhe count and Setcount ko read karna hai
import { CountContext } from "../App";
function Counter(){
  const {count,setCount}=  useContext(CountContext);
    // let[count,setCount]=useState(0);
return(
    <>
    <h1>Counter:{count}</h1>
    <button onClick={()=>setCount(count=>count+1)}>Increment</button>
    <button onClick={()=>setCount(count=>count-1)}>decrement</button>
    </>
)
}
export default Counter;