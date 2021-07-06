// here loop will continue infinite times

import React,{useEffect,useState} from 'react'
function Infinite() {
    let [count,setCount]=useState(0);
    // here useeffect will be called after every render 1st  count will be 0 after that onclick called and count value increased again render and useeffect
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
