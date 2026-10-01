
//yeh app wala component call karega header and counter wale component ko
import Header from "./components/Header";
import Counter from "./components/Counter";
import { useState } from "react";
function App(){
  //toh counte state varible ko jo mane counter wala componets me create kara hai woh waha pe create nahi hoga balki yeha pe create hoga.
  const [count,setCount]=useState(0);
return(
  <>
  <h1> I am the app</h1>
  <Header count={count}></Header>
  <Counter count={count} setCount={setCount}></Counter>
  </>
)
}
export default App;