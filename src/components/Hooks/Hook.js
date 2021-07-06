// here usestate work as setstate first we have to import it  
import React,{useState} from 'react'

function Hook() {
// now in class components we use setstate to set a function here we use count as a variable which will start from 0
// here count is like a variable and setcount is a function through which we can do our work
// here count is equal to state and usestate(0) is value of state
    const [count,setcount] =useState(0);
    // we have increment and decrement the value of 0 when clicked 
    // then create a new increment and decrement function 

    // for increment 
    const handleincrement =function(){
        setcount(count+1);
    }
    // for decrement
    const handledecrement =()=>{
        setcount(count-1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleincrement}>+</button>
            <button onClick={handledecrement}>-</button>
        </div>
    )
}

export default Hook
