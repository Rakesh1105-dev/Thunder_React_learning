let count=0;
function increment(){
    count++;
    render()
}
function decrement(){
    count--;
    render();
}
function render(){
    document.getElementById('root').innerHTML=`
    <h1>This is a Normal html Application</h1>
    <h1>Counter:${count}</h1>
    <button onClick="increment()">Increment</button>
      <button onClick="decrement()">Decrement</button>
    
    `
}
render();