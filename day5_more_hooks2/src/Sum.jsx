import React from "react"
//multiple time rendering hone e bachne ke liye "reactmemo" ka use karte hai.
const Sum=React.memo(({num})=>{
 console.log("sum render")
    return(
        <>
        <h1>Sum is: {num*(num+1)/2}</h1>
        </>
    )
})

export default Sum;