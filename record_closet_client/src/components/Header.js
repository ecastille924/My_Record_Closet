import React from 'react'
import Navbar from './Navbar'

import '../App.css'

function Header() {
    return (
        <section className = 'header'>
            <section className = 'header-icon'>
                <img src= "../images/rcrd_plyr_logo.png" className= "png"/>
            </section>
            
            <section className= 'header-navbar'>
                <Navbar />
            </section>
            <hr className= 'divider'/>
        </section>
    )
}

export default Header
