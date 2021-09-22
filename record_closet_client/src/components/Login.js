import React from 'react'

function Login() {
    return (
        <div>
           Login: 
            <br/>
            <input type= "text" placeholder="Username" className="form-inputs" /><br/>
            <input type= "text" placeholder="email" className="form-inputs" /><br/>
            <input type= "password" placeholder="Password" className="form-inputs" /><br/>
            <input type="button" value="Login" /> {""} <input type="button" value="Logout" />
        </div>
    )
}

export default Login
