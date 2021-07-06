//------------ UseEffect 2 ------------//

// we have to import react & useEffect from recat first 

// in this case if we pass an empty dependency array then useeffect will work like componentdidmount only

// here only once the state will be changed and after that only render will be called 
// here the title will not changed on every click i only changed for 1st times
// if we want to change our title for once means if we want our function to work like only componentdidmount then we have to pass an empty array

import React,{useEffect,useState} from 'react'

function Use2() {
 
    let [count,setCount]=useState(0);
    useEffect(()=>{
        console.log('useEffect');
        document.title=`click ${count}`
    },[])

    console.log('render');
    return (
        <>
       <p>you clicked{count} times</p>
        <button onClick={()=>setCount(count+1)}>click here</button>
        </>
    )
}

export default Use2
