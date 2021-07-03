import React,{useState} from 'react'


function Uswo() {
    let[msg,countmsg] =useState('');
    let[objmsg,objmsgf]=useState({message:''});

    let handlechange =(e)=>{
        countmsg(e.target.value)
    }
    let objecthandle=(e)=>{
        objmsg.message=e.target.value;
        objmsgf(objmsg);
        console.log(objmsg);
    }
   

    return (
        <div>
            <input value={objmsg.message} onChange={objecthandle} type="text" placeholder="Enter your text"></input>
            <p>{objmsg.message}</p>
           
        </div>
    )
}

export default Uswo
