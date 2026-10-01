// function Sum(props){
// return(
//     <>
//     <h1>My total sum:{props.num*(props.num+1)/2}</h1> 
//     </>
// )
// }
// export default Sum;
//destructing ke thoruhg bhi kar skte hai:-

function Sum({num}){
return(
    <>
    <h1>My total sum:{num>=0?(num*(num+1)/2):(-num*(num-1)/2)}</h1> 
    </>
)
}
export default Sum;