import { useState } from "react"

function App(){
    const[time,setTime]=useState(0);
    const[intervalId,setIntervalId]=useState(null);
    function handleStart(){
        if(intervalId!=null)
            return
        const intId =setInterval(() => {
            // setTime((time)=>{
            //      return time+1;
            // });      //isko me aise bhi likh skte hai yeh fir me isko aise bhi likh skte hai.
            setTime(time=>time+1);  //setTime(time+1) pe kam nahi kar raha tha tha kyuki yeh callback function webapi handle karta hai
        },1000);
        setIntervalId(intId);
    }
    //stop karne ke liye function bana raha hoon:-
    function handleStop(){
       clearInterval(intervalId);
       setIntervalId(null);
    }
    //ab handle reset wale function ko bante hai:-
    function handleReset(){
        clearInterval(intervalId);
         setIntervalId(null);
         setTime(0);
    }
    return(
        <>
        <h1>Stopwatch:{time}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default App;