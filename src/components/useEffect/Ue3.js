import React,{useEffect,useState} from 'react'
// to give black colour to background we created this
import './Ue3.css';

function Ue3() {
    let [count,setCount]=useState(0);
    let [darkMode,setTheme]=useState(false);
  // it is just to give title  here useeffect runs everytime when render occurs we can make it correct
    // useEffect(()=>{
    //     console.log('useEffect');
    //     document.title=count;
    // })

  // we have to make like thaaaat it will only called when count value is changed
  // so we have  to add that item in dependency array which we do not want to call every time when renders 
  // here useEffect will run if there will be any change in useeffect
    useEffect(()=>{
        console.log('useEffect');
        document.title=count;
    },[count])
    
    let handleClick=()=>{
        setCount(count+1)
    }
    // if there no darkmode then set theme function give that functionality to it
    let handleChange=()=>{
        setTheme(!darkMode)
    }
    console.log('render');
    return (
        <div className={darkMode ?'view dark-mode':'view'}>
            <label htmlFor='darkMode'>Dark Mode</label>
            <input name='darkMode' type='checkbox' checked={darkMode} onChange={handleChange}></input>
            <button onClick={handleClick}>{count}</button>
        </div>
    )
}

export default Ue3
