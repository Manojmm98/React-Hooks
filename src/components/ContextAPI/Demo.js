// if we wanna use value of mycontext so we have to import it through usecontext usecontext is given by mycontext
import React,{useContext} from 'react'
import Mycontext from './Context'
// we want to render demochild under demo so we have to render it
import Demochild from './Demochild'
function Demo() {
    // here we get the mycontext value using usecontext and stored it in val
    let val = useContext(Mycontext);
    console.log(val);
    return (
        <div>
            <Demochild/>
        </div>
    )
}

export default Demo
