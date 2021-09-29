import React, { Component } from "react"
import '../App.css'
import Router from "./Router"
import Header from "./Header"

class App extends Component {
  state = { 
      user: {}
    }

  signUp = (user) => {
    fetch('http://localhost:3000/users',{
      method: "POST",
      headers: {
        "Accept": "application.json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user:{
          username: user.username,
          password: user.password
        }
      })
    })
    .then(response => response.json())
    .then(user => this.setState({ user }))
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

