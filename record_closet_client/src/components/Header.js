import React from 'react'
import Navbar from './Navbar'

import '../App.css'

function Header() {
    return (
        <section className = 'header'>
            <section className= 'header-navbar'>
                <Navbar />
            </section>
            <hr className= 'divider'/>
        </section>
    )
}

export default Header
