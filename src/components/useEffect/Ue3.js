import React,{useEffect,useState} from 'react'
import './Ue3.css'

function Ue3() {
    let [count,setCount]=useState(0);
    let [darkMode,setTheme]=useState(false);
  
    useEffect(()=>{
        console.log('useEffect');
        document.title=count;
    })
    console.log('render');

    let handleClick=()=>{
        setCount(count+1)
    }
    let handleChange=()=>{
        setTheme(!darkMode)
    }
    return (
        <div ClassName={darkMode ?'view dark-mode':'view'}>
            <label htmlFor='darkMode'>Dark Mode</label>
            <input name='darkMode' type='checkbox' checked={darkMode} onchange={handleChange}></input>
            <button onClick={handleClick}>{count}</button>
        </div>
    )
}

export default Ue3
