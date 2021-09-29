import React, { Component } from "react"
import '../App.css'
import Router from "./Router"
import Header from "./Header"

class App extends Component {
  state = { 
      user: {}
    }

  render() {
      return (
        <div className="app">
            <Header />
            <Router />
        </div>
      );
    }
  };
  export default App;

