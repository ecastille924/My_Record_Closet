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

handleSubmit = (e) => {
  e.preventDefault()
  this.props.login(this.state)
}

render(){
  return (
    <div>
      Login:
      <form className= "signup-form" onSubmit={this.handleSubmit}>
        <input name='username' type="text" value={this.state.username} onChange={this.handleChange} placeholder="username"/>
      <br/>
        <input name='password' type="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
      <br/>
      {this.props.error ? <p>{this.props.error}</p> : null }
      <input type="submit" value="Login"/>
      <br/>
      </form>

    </div>
    );
  }
}