//header function bana rahe hai"-
function Header(){
    return(
        <>
        <h1>Hello Rakesh </h1>
        <h2>Full satck devloper shahab</h2>
        </>
    )
}
function Main(){
    return (
        <>
        <p>Hey there i am rakesh kundu a full stck mern devloper where i make a real world impatcfull 
            project 
        </p>
        <ul>
            <li>Web devlopment</li>
            <li>DSA</li>
            <li>GenAi</li>
            <li>Deep Learning</li>
            <li>System design</li>
        </ul>
        </>
    )
}
function Footer(){
    return(
        <>
        <h3>I am footer of strike platform</h3>
        </>
    )
}
function App(){
    return (
        <>
         <Header/>
        <Main/>
        <Footer/> 
     {/* {Header()}
     {Main()}
     {Footer()} */}
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<><Header/> <Main/> <Footer/></>); but yeh best practice nahi hota hai render karwane ke liye.
root.render(<App/>)