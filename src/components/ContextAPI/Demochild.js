import React,{useContext} from 'react'
import Mycontext from './Context'

function Demochild() {
    let val = useContext(Mycontext)
    console.log(val);
    return (
        <div>
            
        </div>
    )
}

export default Demochild
