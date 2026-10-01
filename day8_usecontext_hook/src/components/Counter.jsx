import { useState } from "react";

function Counter({count,setCount}){
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