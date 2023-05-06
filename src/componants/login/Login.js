

import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="container">
    <center>
    <div className="card">

  <div class="card-body">
    <h1 className="card-title"><span className="text-dark">cient</span><span className="text-danger">më</span></h1>
    <p className="influence-line">Sign up to experience cientme.</p>
  
  
  <div className="input-group">
  <input type="text" aria-label="Username" className="form-control" placeholder="Username or Email"/>
  </div>

  <div className="input-group">
  <input type="password" aria-label="password" className="form-control" placeholder="Password"/>
</div>

<div className="form-group">
  <input className="btn btn-danger" type="submit" value="LogIn"/>
</div>
   
  <Link className="Login" to="/signup"><h5>SignUp</h5></Link>
  <br />
  <p className="tag-line">Your friends are here so come togather, feel togather</p>
  </div>
  
    
</div>
</center>
</div>

    
    
  )
}

export default Login