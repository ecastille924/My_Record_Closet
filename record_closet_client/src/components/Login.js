import React from 'react'

function Login() {
    return (
        <div>
           Login: 
            <br/>
            <input type= "text" placeholder="Username" className="form-inputs" /><br/>
            <input type= "text" placeholder="email" className="form-inputs" /><br/>
            <input type= "password" placeholder="Password" className="form-inputs" /> 
        </div>
    )
}

export default Login
