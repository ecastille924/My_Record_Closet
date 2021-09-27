import React, { Component } from 'react'
import "../App.css"
// import axios from 'axios'



class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: "",
      password:"",
      errors: ""
    }

  }
  handleChange(e){
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit(e){
    e.preventDefault()
  }

  render(){
    const { username, password } = this.state
    return (
      <div>
        Log In:
        <form className= "login-form" onSubmit= {this.handleSubmit}>
          <input type="text" value={username} onChange={this.handleChange} placeholder="username"/>
        <br/>
          <input type="password" value={password} onChange={this.handleChange} placeholder="password"/>
        <br/>
        <input type="submit" value="Log In"/>
        <br/>
        </form>

      </div>
    );
  }
}

export default Login