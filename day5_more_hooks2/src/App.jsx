import { useState } from "react";
import Sum from "./Sum"
function App(){
  const[count,setCount]=useState(100);
  const[number,setNUmber]=useState(10000);
  console.log("app render");
  return(
    <>
    <h1>Counter is: {count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
     <h1>Number is :{number}</h1>
     <button onClick={()=>setNUmber(number+1)}>Increment</button>
    <Sum num={count}/>
    </>
  )
}
export default App;