import { CountContext } from "../App";
import { useContext } from "react";
function Display(){
    const {count}=useContext(CountContext);
    //mujhe ab display wale component me bhi count wale ko dhikna hai toh hum yeha pe state lifting the use karenge.
return (
    <>
    <h1>I will display something:{count}</h1>
    </>
)
}
export default Display;