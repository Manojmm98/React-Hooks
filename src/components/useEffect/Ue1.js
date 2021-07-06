// In class component useeffect contains of componentDidMount,Componentupdate,Componentwillunmount

// But in functional component useEffect provide all the above functionality

// syntax of useEffect

// useEffect(()=>{
       // excute your functionality whatever it is
//},optional dependency array )


// There are 3 varient of useEffect in functional component


//----------------------------- UseEffect --------------------------------//


//------------------- variation 1 ----------------------//

// 1 variation ---> it is sum of (componentdidMount + componentDidupdate)

// componenetdidMount ---> is run after the 1st render  
//componentDidupdate----------> runs after the 1st render and state change for every state change it runs ----> it will run after we did somechange

// here no dependency array is present
import React,{useEffect,useState} from 'react'

function Ue1() {
    //console.log('render');
  
    // useeffect is a function which return a callback function it will run after render for every state change
    // it will work like componentdidmount+componentdidupdate
    // useeffect will run after render is finished

    // it will run afrter every render
    
    useEffect(()=>{
        console.log('useEffect');
        document.title =`you clicked ${count} times`
    })
    console.log('render');

    let [count,setCount] = useState(0);
    return (
        <div>
       <p>you clicked {count} times</p> 
       <button onClick={()=>setCount(count+1)}>click</button>
        </div>
    )
}

export default Ue1
