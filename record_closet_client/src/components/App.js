import React from "react"
import '../App.css'
import Router from "./Router"
import Header from "./Header"

const App = () => {
    return(
        <div className="app">
            <Header />
            <Router />
        </div>
    )
}

export default App;