import React from 'react'
import logo from './images/lg.png'
function Header() {
  return (
    <>
        <div className='header'>
            <img src={logo} alt='logo' width='100px'/>
            <h1>Prashant Keep</h1>
        </div>
    </>
  )
}

export default Header
