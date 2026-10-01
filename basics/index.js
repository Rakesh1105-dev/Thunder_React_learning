// let count=2; this is the first solution.

function display(count){
    console.log(`i am display ${count}`);
    //ab me chahta hoon ki counter wale function me jo count varible hai woh bhi mera display wale ke sath allign ho jaye:toh ek solution ho ksta hai ki me count varible ko global varible declare kar du
}

function counter(count){
    // let count=2;
    console.log(`your count is ${count}`);
}
function header(count){
    console.log("i am header");
    //display ko karega header wala:-
    display(count);
}
//dusra soltuion yeh hai ki me app wale function ke ander me count varible ko intilize kar du toh yeh fir sibling property se dono ko access il jayega:- isko bolte hai state lifin
function app(){
    let count=2
    console.log("app is calling");
    //app wale function ne header+counter dono function ko call kiya hai
    header(count);
    counter(count);
}

function main(){
    console.log("main is calling");
    app();
}
main()
const obj={
     a:10,
     b:20,
     c1:{
        d:5,
        hello:function(){
      console.log(this.a);
        }
     }

}