import { useState } from "react"

function App(){
  const[count,setCount]=useState(0);
  return(
    <>
    <h1>This is your React application</h1>
    <h1>Counter:{count}</h1>
    <button onClick={()=>setCount(count=>count+1)}>Increment</button>
      <button onClick={()=>setCount(count=>count-1)}>Increment</button>
    </>
  )
}
export default App;