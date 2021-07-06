import React,{useState} from 'react'


function Uswo() {
    let[msg,countmsg] =useState('');
    let[objmsg,objmsgf]=useState({message:''});

    let handlechange =(e)=>{
        countmsg(e.target.value)
    }
    let objecthandle=(e)=>{
        console.log('render');
        // // here we are changing our message directly or muttatively so nothing will seen in the console
        // objmsg.message = e.target.value;
        // objmsgf(objmsg);
        // console.log(objmsg);

        // If we want to see the typed message in our console then we have to update object immutatively means by creating a new one
       let obj={...objmsg,message:e.target.value};//shallow copy
       objmsgf(obj);
    }
   

    return (
        <div>
            <input value={objmsg.message} onChange={objecthandle} type="text" placeholder="Enter your text"></input>
            <p>{objmsg.message}</p>
           
        </div>
    )
}

export default Uswo
