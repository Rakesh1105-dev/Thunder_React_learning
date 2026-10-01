import { useEffect } from "react";
import { useState } from "react";

function Add(){
  const [time,setTime]=useState(new Date().toLocaleTimeString());
  const[show,setShow]=useState(true);

  useEffect(()=>{
      if(!show)
    return;
     const intervalId= setInterval(()=>{
    setTime(new Date().toLocaleTimeString());
   console.log("hello");
    
   

  },1000);  
  
  //use effect hamshes ek return statement bhi demand karta hai:- woh hai ek callback function.Agar tum useeffect hoom ka use kar rahe ho toh yeh fir kuch bhi return mat karwao nahi toh return karwao ek callback function ko
  return()=>{
    clearInterval(intervalId);
  }
  },[show]);

  return (
    <>
    <button onClick={()=>setShow(!show)}>{show?"show":"hide"}</button>
    {
      show&&<h1>Current Time: {time}</h1>
    }
    </>
  )
}
export default Add;