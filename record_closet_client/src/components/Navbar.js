import React from "react";

import '../App.css'

function Navbar() {
    return (
        <div>
            <section className="navbar">
            <a href="/signup" className="navbar-link">Sign Up</a>
                <a href="/" className="navbar-link">Login</a>
                <a href="/about" className="navbar-link">About</a>
                <a href="/records" className="navbar-link">Records</a>
            </section>
        </div>
    )
}

export default Navbar
