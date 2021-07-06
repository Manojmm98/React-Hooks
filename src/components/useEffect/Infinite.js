// here loop will continue infinite times

import React,{useEffect,useState} from 'react'
function Infinite() {
    let [count,setCount]=useState(0);
    useEffect(() => {
        console.log('useEffect');
        let num = Math.random()*100;
        setCount(num);
    })
    console.log('render');
    return (
        <div>
            <p>you have clicked  {count} times</p>
            <button onClick={()=>{setCount(count+1)}}></button>
        </div>
    )
}

export default Infinite
