import React, { Component } from 'react'
import "../App.css"
// import axios from 'axios'

class Signup extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: "",
      password:"",
      password_confirmation:"",
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
    const { username, password, password_confirmation } = this.state
    return (
      <div>
        Log In:
        <form className= "signup-form" onSubmit= {this.handleSubmit}>
          <input type="text" value={username} onChange={this.handleChange} placeholder="username"/>
        <br/>
          <input type="password" value={password} onChange={this.handleChange} placeholder="password"/>
        <br/>
            <input type="password" value={password_confirmation} onChange={this.handleChange} placeholder="password_confirmation"/>
        <input type="submit" value="Sign Up"/>
        <br/>
        </form>

      </div>
    );
  }
}

export default Signup