//babel ka mtlb yeh hai ki me html element ko js me react ke form me likh saku iske liye me babel ka use kart hoon
// const element=<h1>Hello coder army</h1>;
// const element2=<div>i am the best</div> //iss wale syntax ko bolte hai jsx(javascript xml)
//sabse pahel root wale element ko select karenge:-


//agar man lo mujhe ke bar me ek se jayeda chize render karwani hogi toh ??
//yeh toh me pahele ek root parent div bana ke uske ander childeen ko append kar du.
// const element3=<div>
//     <h1>Hello coder army</h1>
//     <div>i am the best</div> 
// </div>

//ab react ke ander components present hotte hai. components ka mtlb hai ki function hotte hai bas ek khasiyat yeh hai ki
//yeh jsx ko return karega
//yeh number,string,array ko display karwa deta hai par yeh js ke object ko display nahi karwata hai

function App(){
    let a="rakesh";
    let b="kundu";
    
    return <h1>Hello Coder{a+b}</h1>;
}

//this is the old method:-
// const root=document.getElementById('root');
// ReactDom.render(element,root);

//new method reactdom banane ka:-
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(App());