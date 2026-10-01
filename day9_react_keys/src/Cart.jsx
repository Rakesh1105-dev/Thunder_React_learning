import { useState } from "react";

function Cart(){
    const[foodItem,setFoodItem]=useState(["orange ","apple ","banana ","grapes "]);
    function increase(){
        //yeh wale method yeh problem hai ki react dom chnages nahi kar raha hai kyuki use lag rha hai ki array me koi chngges hi nahi huye hai kuki aray compare hotte hai by refrences bot by value
        
        // foodItem.push("mango ");
        // setFoodItem(foodItem);

        //toh ab hame destructiing karni hogi array ka:-
        setFoodItem([...foodItem,"mango"]);
    }
    return (
        <>
        {/* <h1>my food items:{foodItem}</h1> */}
        <ul>
            {
                foodItem.map((food,index)=><li key={index}>{food}</li>)
                //aisa karne par yeh message show ho raha hai:-Each child in a list should have a unique "key" prop.
                //jo childreen "dynamic" honge unke upper "keys" laga do. har childreen ko ek unique id deni padegi and each key should be "unique"
                //aur key ko hum "index" rakh bhi skte hai aur nahi bhi rakh skte hai depends karta hai condition me
            }
        </ul>
        <button onClick={increase}>Add fruit</button>
        </>
    )
}
export default Cart;