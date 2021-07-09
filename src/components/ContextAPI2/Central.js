import React,{useState} from 'react'
import ThemeContext from './ThemeContext'
import Navbar from './Navbar'
// here we just render the navbar and we provided our disired value
// we created a variable ntheme for storing theme value and setnTheme for setting the theme 
function Central() {
    const [ntheme,setnTheme] =useState('Light')
    return (
            <div>
                <ThemeContext.Provider value={{theme:ntheme,chfn:setnTheme}}>
                <Navbar/>
                </ThemeContext.Provider>
             
            </div>
        
    )
}

export default Central