import Display from "./Display";
//yeh Header wala component display wale component ko call karega.
function Header({count}){
    return (
        <>
     <h1>I am the Header</h1>
     <Display count={count}/>
        </>
    )


}
export default Header;