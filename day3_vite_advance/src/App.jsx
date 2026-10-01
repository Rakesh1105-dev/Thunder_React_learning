//abb bante hai ek counter
import { useState } from "react";
function App(){
  //mtlb use state bolega ki mujhe ek varible ka name bhi de de and ek fucntion bhi dede jisse me tujai call kar pau
  let[count,setcount]=useState(0); //use state ke ander me jo bhi value dunga uss value se woh varible jo ki hai count initilize ho jayega and function hai setcount
  function incrementcount(){
    count=count+1;
    //ab mujhe react ko batana padega ki count ki value 1 se inc kar de.
    setcount(count);
  
    // document.querySelector('h1').textContent=`Counter:${count}`; yeh tarika galat hai me kabhi bhi dom ko aise direct manpulate nahi karna hai
    console.log(count);
  }
  return (
    <>
    <h1>Counter:{count}</h1>
    <button onClick={incrementcount}>Increment</button>
    
    </>
  )
}
export default App;