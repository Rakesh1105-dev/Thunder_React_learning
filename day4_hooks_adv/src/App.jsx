//a hum shikte hai props kaise pass karte hai:- props ek argument hai ek object hai jo argumnets ko wrap up karke rakhega
import { useState } from "react";
import Sum from "./Add";
function App(){
let[count,setcount]=useState(0);
return(
  <>
  <h1>counter:{count}</h1>
  <button onClick={()=>setcount(count+1)}>Increment</button>
  <button onClick={()=>setcount(count-1)}>Decrement</button>
 
  <Sum num={count}></Sum>
  </>
)
}
export default App;