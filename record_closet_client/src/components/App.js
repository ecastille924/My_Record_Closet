import React, { Component } from "react"
import '../App.css'
// import Router from "./Router"
import Header from "./Header"
import Signup from "./Signup"
import Login from "./Login"
import RecordsContainer from "./RecordsContainer"

class App extends Component {
  state = { 
      user: {}
    }

  signUp = user => {
    fetch('http://localhost:3000/users',{
      method: "POST",
      headers: {
        "Accept": "application/json",
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
    .then(user => this.setState({ user: user }))
  }

  login = user => {
    fetch('http://localhost:3000/login',{
      method: "POST",
      headers: {
        "Accept": "application/json",
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
    .then(result => {
      if (result.token){
        localStorage.setItem('token', result.token)
        this.setState({
          user: result.user
        })
      }
    })
  }

  render() {
      return (
        <div className="app">
            <Header />

            {this.state.user.username ? <RecordsContainer/> : (
                <>
                <Login login={this.login} />
                <Signup signUp={this.signUp} /> 
                </>
            )
            }
            

            {/* <Router /> */}
        </div>
      );
    }
  };
  export default App;

