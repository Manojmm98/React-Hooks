import React,{useEffect,useState} from 'react'
// here we are just cleaning up our useeffect before re render
// for clean up we just have to pass the clean up code inside return statment
function Uce1() {
    let [count,setCount]=useState(0);
       useEffect(()=>{
           console.log('useEffect');
        document.title=`you clicked ${count} times`
        return()=>{ alert(`I will be called before the next time useEffect is called ${count}`)}
        })
        console.log('render');
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>click</button>
        </div>
    )
}

export default Uce1
