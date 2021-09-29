import React, { Component } from 'react'
import "../App.css"
// import axios from 'axios'



export default class Login extends Component {
 
  state = {
    username: '',
    password: '',
    
  }

handleChange = (e) => {
  this.setState({
    [e.target.name]:e.target.value
  })
}

render(){
  return (
    <div>
      Login:
      <form className= "signup-form">
        <input name='username' type="text" value={this.state.username} onChange={this.handleChange} placeholder="username"/>
      <br/>
        <input name='password' type="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
      <br/>
      <input type="submit" value="Sign Up"/>
      <br/>
      </form>

    </div>
    );
  }
}