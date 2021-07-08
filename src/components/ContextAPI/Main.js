import React,{useState} from 'react'
import Demo from './Demo'
import Mycontext from './Context'

function Main() {
    console.log('Main render');
    let [count,setCount]= useState(0);
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>click</button>
            
            <Mycontext.Provider value={count}>
                 <Demo/>
            </Mycontext.Provider>
        </div>
    )
}

export default Main
