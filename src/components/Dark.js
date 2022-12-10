import React,{useEffect} from "react"
import './Dark.css'

const Dark =() =>{
    const [ darkMode, setDarkMode ] = React.useState(false)
   
  React.useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
    

    if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])

    return(
      
        <div id="toggle"
         onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)} >
        <div className="toggle-inner"/>
      </div>
   
    )
}
export default Dark