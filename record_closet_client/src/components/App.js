import React, { Component } from "react"
import '../App.css'
import Router from "./Router"
import Header from "./Header"
import axios from 'axios'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        isLoggedIn: false,
        user: {}
       }
    }

    componentDidMount() {
        this.loginStatus()
    }

    handleLogin = (data) => {
        this.setState({
          isLoggedIn: true,
          user: data.user
        })
      }
    handleLogout = () => {
        this.setState({
        isLoggedIn: false,
        user: {}
        })
      }

    loginStatus = () => {
        axios.get('http://localhost:3000/logged_in', 
       {withCredentials: true})    
    .then(response => {
        if (response.data.logged_in) {
        this.handleLogin(response)
          } else {
        this.handleLogout()
          }
        })
        .catch(error => console.log('api errors:', error))
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

