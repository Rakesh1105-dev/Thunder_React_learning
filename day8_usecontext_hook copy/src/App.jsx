
//yeh app wala component call karega header and counter wale component ko
import Header from "./components/Header";
import Counter from "./components/Counter";
import { useState,createContext} from "react";
//ab me app wale components ka context create karunga kyuki yeh app wala components ansestet hai
export const CountContext=createContext();
function App(){
  //toh counte state varible ko jo mane counter wala componets me create kara hai woh waha pe create nahi hoga balki yeha pe create hoga.
  const [count,setCount]=useState(0);
return(
  <>
  <CountContext value={{count,setCount}}> // mane count and setCount ko ek object ke ander wrap kar diya hai toh ye count and setCount ko koi bhi childreen use kar skta hai
    <h1> I am the app</h1>
  <Header></Header>
  <Counter></Counter>
  </CountContext>
  
  </>
)
}
export default App;