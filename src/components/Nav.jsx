import React,{useState} from 'react'
import './Nav.css'

function Nav() {
    const [show,setShow]= useState(false)
    window.addEventListener('scroll',()=>{
        if(window.scrollY>200){
            setShow(true)
        }else{
            setShow(false)
        }
    })
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <img src="../logo.png" alt="Netflix" width={'120px'}/>
    </div>
    
  )
}

export default Nav