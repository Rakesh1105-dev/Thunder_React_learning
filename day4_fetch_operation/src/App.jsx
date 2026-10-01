import { useEffect, useState } from "react";
function App(){
  //ab mujhe iss github ke users ko apne frontend pe show karwanahai toh uske liye mere pass ek state varible hona chhaiye react ka
   const[user,setUser]=useState([]);//use satte me ek empty array pass kar diye
   //ab use karte hai useeffect hook ka:- use effect hook ek dam last me chalta hai sirf ekbar
   const [count,setCount]=useState(10);
   useEffect(()=>{
      async function github(){
   const response =await fetch(`https://api.github.com/users?per_page=${count}`);
   const data=await response.json();
   setUser(data);
   console.log(data);
  }
  github();
   },[count]); //yeha pe empty array ko dena bhauy hi jayeda jaruri hai warna useEffetc bar bar chalega but ab me chahta hoon ki jaise count ki de user app wala funciton dubara call ho but useeffect toh ek hi bar run hota hai isiliye count ko array me pass karte hai 

  // if(user.length==0)
  
return(
  <>
  <h1>Github user profile:</h1>
  <input type="number" value={count} style={{fontSize:"50px",padding:"10px"}}onChange={(e)=>setCount(e.target.value)}></input>
  <div>
    {
      user.map((u)=><img src={u.avatar_url} height={"150px"} width={"150px"}></img>)
    }
  </div>
  </>
)
}
export default App;