import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="container">
    <center>
    <div className="card">

  <div class="card-body">
    <h1 className="card-title"><span className="text-dark">cient</span><span className="text-danger">më</span></h1>
    <p className="influence-line">Sign up to experience cientme.</p>
    
  <div className="input-group">
  <input type="email" aria-label="Email" className="form-control" placeholder="Mobile Number or Email"/>
  </div>
  
  <div className="input-group">
  <input type="text" aria-label="Full Name" className="form-control" placeholder="Full Name"/>
  </div>
  
  <div className="input-group">
  <input type="text" aria-label="Username" className="form-control" placeholder="Username"/>
  </div>

  <div className="input-group">
  <input type="password" aria-label="password" className="form-control" placeholder="Password"/>
</div>

  <div className="input-group">
  <input type="password" aria-label="password" className="form-control" placeholder="Confirm Password"/>
</div>

<div className="form-group">
  <input className="btn btn-danger" type="submit" value="SignUp"/>
</div>
   
  <Link className="Login" to="/login"><h5>Login</h5></Link>
  <br />
  <p className="tag-line">Your friends are here so come togather, feel togather</p>
  </div>
  
    
</div>
</center>
</div>

    
  )
}

export default Signup